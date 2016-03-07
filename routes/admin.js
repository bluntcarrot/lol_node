var request = require('request'),
	fs = require('fs');

exports.load_champ_data = function (req, res) {
	
	fs.readFile('./DO_NOT_UPLOAD_api_key.txt', 'utf8', function (err, key) {
		if (err) throw err;
	
		request({
			url: 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion',
			qs: {champData: 'image,info,passive,stats,tags', api_key: key}
		})
		.pipe(
			fs.createWriteStream('./data/champions.json'),
			res.send('Finished.')
		);
	});
	
};