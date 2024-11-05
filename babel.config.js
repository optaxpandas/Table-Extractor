module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
  ],
  plugins: [
    '@babel/plugin-transform-numeric-separator',
    '@babel/plugin-transform-async-generator-functions',
    '@babel/plugin-transform-optional-catch-binding',
    '@babel/plugin-transform-object-rest-spread',
  ],
};