var path = require('path')

module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 2 Chrome versions'],
    }),
  ]
}
