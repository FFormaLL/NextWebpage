// Ran into Docker build issues when using preact so disabling for now...
module.exports = {
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    //   if (!dev && !isServer) {
    //     Object.assign(config.resolve.alias, {
    //       react: 'preact/compat',
    //       'react-dom/test-utils': 'preact/test-utils',
    //       'react-dom': 'preact/compat',
    //     })
    //   }
    config.resolve.fallback = { ...config.resolve.fallback, net: false, fs: false };
    return config
  },
  compiler: {
    styledComponents: true
  }
}