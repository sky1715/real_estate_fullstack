import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "https://real-estate-fullstack.onrender.com",
    issuerBaseURL: "https://dev-t8xnpagf53h2f0yd.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck