const { Service } = require('leverage-js')

class S extends Service {
    constructor () {
        super()

        this.config = {
            name: 'bus'
        }

        this._count = 0
    }

    get count () {
        return ++this._count
    }
}

module.exports = new S()
