const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.path = require.resolve('path-browserify');
    }

    return config;
  },
  resolve: {
    fallback: {
      "html-webpack-plugin": require.resolve("html-webpack-plugin")
    }
  }
};