var express = require('express');
var app = express();
app.use('/',express.static('./static')).
		use('/images',express.static('./lib')).
		use('/lib',express.static('./images'));
app.listen(8033);
