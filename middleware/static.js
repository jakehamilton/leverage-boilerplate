const { Middleware } = require('leverage-js')
const express = require('express')
const path = require('path')

const files = path.resolve(__dirname, '..', 'static')

class M extends Middleware {
    constructor () {
        super()

        this.config = {
            type: 'http',
            http: {
                express: () => ['/static', express.static(files)]
            }
        }
    }
}

module.exports = new M()
