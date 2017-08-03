/*
 * Dependencies
 */
const path = require('path')
const { manager } = require('leverage')

/*
 * Get static path to files
 */
const services = path.resolve(__dirname, 'services')
const components = path.resolve(__dirname, 'components')

/*
 * Add components, services, etc
 */
manager.add(components)
manager.service(services)

/*
 * Add a plugin and configure it here
 * ex.
 *
 * const http = require('leverage-plugin-http')
 *
 * manager.plugin(http)
 *
 * http.listen(3000)
 */

