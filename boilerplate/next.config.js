const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production' //variable to say the project is in production

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
