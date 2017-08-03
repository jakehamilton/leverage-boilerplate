/*
 * Dependencies
 */
const path = require('path')
const { manager } = require('leverage-js')
const http = require('leverage-plugin-http')

/*
 * Get static path to files
 */
const services = path.resolve(__dirname, 'services')
const components = path.resolve(__dirname, 'components')
const middleware = path.resolve(__dirname, 'middleware')

/*
 * Add components, services, etc
 */
manager.add(components)
manager.service(services)
manager.middleware(middleware)

/*
 * Add http plugin
 */
manager.plugin(http)

/*
 * Tell http server to listen on a port
 */
http.listen(process.env.PORT || 3000)
