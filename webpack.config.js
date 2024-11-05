const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import HtmlWebpackPlugin

module.exports = {
  entry: './src/index.js',  // Path to your entry file
  output: {
    path: path.resolve(__dirname, 'dist'), // Directory to output bundled files
    filename: 'bundle.js',                 // Name of the output bundle
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,               // Process JS and JSX files
        exclude: /node_modules/,           // Exclude node_modules
        use: {
          loader: 'babel-loader',          // Use Babel loader to transpile
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],           // Resolve these extensions
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Directory for static files
    },
    compress: true,
    port: 8080,                            // Port for the development server
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'), // Specify your HTML template
    }),
  ],
};