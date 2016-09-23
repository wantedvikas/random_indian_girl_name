'use strict';
var uniqueRandomArray = require('unique-random-array');
var indiangirl = require('./girls.json');

exports.all = indiangirl;
exports.random = uniqueRandomArray(indiangirl);