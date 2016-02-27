var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

app.set('view engine', 'ejs');
	
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** Routes **/
var Champions = require("./routes/champions"),
	Admin = require("./routes/admin");
	
app.get('/', Champions.index);
// use GET request on first click of champ image, load related data
app.get('/champ_overview', Champions.champ_overview);
app.get('/admin/load_champions_data', Admin.load_champ_data);


app.listen( process.env.PORT || 3000, console.log('connected to port :3000') );