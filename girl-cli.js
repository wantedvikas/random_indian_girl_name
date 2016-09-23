'use strict';
const meow = require('meow');
const indiangirl = require('./');

const cli = meow ({
	Help: [
		'Examples''
		'	$ indiangirl',
		'	Aahana',
		'',
		'	$ indiangirl --all',
		'',
		'',
		'',
		'',
		'',
		'Options',
		'	--all Gets all names instead of random'
	]
});

console.log(cli.flags.all ? indiangirl.all.join('\n') : indiangirl.random());