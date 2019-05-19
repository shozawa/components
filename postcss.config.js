module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-apply': {},
    'postcss-preset-env': {
      features: { 'nesting-rules': true },
    },
  },
};
