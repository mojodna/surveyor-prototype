var aliases = require('node-libs-browser');

aliases = Object.keys(aliases).reduce((obj, k) => {
  if (aliases[k] != null) {
    obj[k] = aliases[k]
  }

  return obj;
}, {});

// not included in node-libs-browser
// TODO we probably want a native implementation of this that _actually_ uses
// the filesystem
aliases.fs = 'browserify-fs';

module.exports = ({ platform }, defaults) => ({
  entry: `./index.${platform}.js`,
  resolve: {
    ...defaults.resolve,
    alias: aliases
  }
});
