const { Component } = require('leverage-js')

class C extends Component {
    constructor () {
        super()

        this.config = {
            type: 'http',
            http: {
                path: '/',
                method: 'get'
            },
            dependencies: {
                services: ['bus']
            }
        }
    }

    http (req, res) {
        const { count } = this.services.bus

        res.send(`
            You've visited this page ${count} times
        `)
    }
}

module.exports = new C()
