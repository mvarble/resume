import React from 'react';
import fs from 'node:fs';
import path from 'node:path';
import { Readable } from 'node:stream';
import { Buffer } from 'node:buffer';
import CombinedStream from 'combined-stream';
import webpack from 'webpack';
import { merge } from 'webpack-merge';
import { renderToStaticNodeStream } from 'react-dom/server';
import webpackConfig from './webpack.config.mjs';

const buildConfig = merge(webpackConfig, {
  entry: './src/bundle/build-entry.js',
  mode: 'production',
  output: {
    library: {
      type: 'umd',
      export: 'default',
    },
    filename: 'resume.js',
  },
  target: 'node',
});

const HEAD = 
`<!doctype html>
<html>
  <head>
    <title>Matthew Varble's Resume</title>
    <link href="./main.css" rel="stylesheet">
  </head>
  <body class="letter">
    <div>`;

const TAIL =
`
    </div>
  </body>
</html>`;

webpack(buildConfig, (err, stats) => {
  // quit if error
  if (err || stats.hasError) {
    console.error('BUILD ERROR');
    return;
  }

  // create the write stream
  const outputPath = path.join(buildConfig.output.path, 'index.html');
  const fsStream = fs.createWriteStream(outputPath);

  // pipe the resume stream to the write stream
  createResumeStream().then(stream => {
    stream.pipe(fsStream);
  });
});

async function createResumeStream() {
  const outputPath = path.resolve(process.cwd(), 'output', 'resume.js');
  const resumeElm = (await import(outputPath)).default;
  const combinedStream = CombinedStream.create();
  combinedStream.append(stringToUtf8Stream(HEAD));
  combinedStream.append(renderToStaticNodeStream(resumeElm));
  combinedStream.append(stringToUtf8Stream(TAIL));
  return combinedStream;
}

function stringToUtf8Stream(string) {
  return new Readable({
    read() { 
      this.push(Buffer.from(string, 'utf8'));
      this.push(null);
    }
  });
}
