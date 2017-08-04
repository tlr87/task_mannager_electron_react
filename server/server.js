var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use(cors('*'))

var routes = require('./routes')

server.use('/v1/tasks',routes)

module.exports = server
