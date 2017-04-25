var aliases = require('node-libs-browser');

aliases = Object.keys(aliases).reduce((obj, k) => {
  if (aliases[k] != null) {
    obj[k] = aliases[k]
  }

  return obj;
}, {});

module.exports = ({ platform }, defaults) => ({
  entry: `./index.${platform}.js`,
  resolve: {
    ...defaults.resolve,
    alias: aliases
  }
});
