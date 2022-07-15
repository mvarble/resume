const HtmlWebpackPlugin = (await import('html-webpack-plugin')).default;
const MiniCssExtractPlugin = (await import('mini-css-extract-plugin')).default;
const remarkFrontmatter = (await import('remark-frontmatter')).default;
const remarkMath = (await import('remark-math')).default;
const rehypeKatex = (await import('rehype-katex')).default;
const remarkMdxFrontmatter = (await import('remark-mdx-frontmatter')).default;
const { recmaDefaultToNamed } = await import('./recma-default-to-named.mjs');
const path = await import('node:path');

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
  mode: 'development',
  entry: './src/index.js',
  target: 'web',
  output: { 
    path: path.resolve(process.cwd(), 'output'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      { test: /\.js$/, use: babelLoader },
      { test: /\.mdx?$/, use: [babelLoader, mdxLoader] },
      { test: /\.css?$/, use: [MiniCssExtractPlugin.loader, cssLoader] },
      { 
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, 
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'resume' }), 
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: ['.js'],
  },
}
