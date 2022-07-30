import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import recmaDefaultToNamed from './recma-default-to-named.mjs';
import path from 'node:path';

const babelLoader = {
  loader: 'babel-loader', 
  options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
}

const mdxLoader = {
  loader: '@mdx-js/loader',
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkMath],
    rehypePlugins: [rehypeKatex],
    recmaPlugins: [[recmaDefaultToNamed, { exportName: 'Body' }]],
  },
};

const cssLoader = {
  loader: 'css-loader',
  options: {
    esModule: true,
    modules: {
      auto: true,
      namedExport: true,
    },
  },
};

export default {
  output: { 
    path: path.resolve(process.cwd(), 'output'),
  },
  module: {
    rules: [
      { test: /\.js$/, use: babelLoader },
      { test: /\.mdx?$/, use: [babelLoader, mdxLoader] },
      { test: /\.css?$/, use: [MiniCssExtractPlugin.loader, cssLoader] },
      { 
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, 
        type: 'asset/resource',
        generator: {
          filename: path.join('fonts', '[name][ext]'),
        }
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
        generator: {
          filename: path.join('images', '[name][ext]'),
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[fullhash].css' }),
  ],
  resolve: {
    extensions: ['.js'],
  },
}
