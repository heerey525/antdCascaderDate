"use strict"
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/china-division-data.min')
} else {
    module.exports = require('./dist/china-division-data')
}