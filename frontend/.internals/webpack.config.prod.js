const webpack = require('webpack');
const Koji = require('koji-tools');


// change these values for your production domains
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      BACKEND_URL: JSON.stringify(process.env.JIRO_BACKEND_URL || `http://localhost:${Koji.config.develop.backend.port || '3000'}`),
      FRONTEND_URL: JSON.stringify(process.env.JIRO_FRONTEND_URL || `http://localhost:${Koji.config.develop.backend.port || '4200'}`),
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
  node: {
    global: true,
    process: true,
  }
}

