module.exports = {
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000'
  },
  serverRuntimeConfig: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    BASE_URL_CMS: process.env.BASE_URL_CMS || ''
  }
}
