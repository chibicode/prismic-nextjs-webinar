module.exports = {
  experimental: {
    optionalCatchAll: true,
    redirects() {
      return [
        {
          source: '/',
          permanent: true,
          destination: '/home'
        }
      ]
    }
  }
}
