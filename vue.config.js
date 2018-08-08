const path = require('path');

module.exports = {
  lintOnSave: false,
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // mutate config for production...
            //config.resolve.alias["store"] = path.resolve(__dirname, 'src/store.js')
        } else {
            // mutate for development...
            config.resolve.alias["./store"] = path.resolve(__dirname, 'src/dummy-store.js')
        }
    }
}