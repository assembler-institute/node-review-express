const { auth } = require('express-oauth2-jwt-bearer')

const jwtCheck = auth({
  audience: 'http://localhost:8080',
  issuerBaseURL: 'https://dev-m05eubr5pf8rjo7m.us.auth0.com/',
  tokenSigningAlg: 'RS256'
})

module.exports = jwtCheck
