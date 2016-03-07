var champions_obj = require('../data/champions.json')['data'];

var list = '',
	c_arr = [];

for (var key in champions_obj) {
	list = list + '<div style="padding-bottom:10px;" class="col-lg-1 col-sm-2 col-xs-3" ><img id='+ key +' class="champ_img" style="border-radius:4px;box-shadow: 4px 4px 4px #ccc;" src="https://ddragon.leagueoflegends.com/cdn/6.2.1/img/champion/'+ key +'.png" /></div>';
	c_arr.push({id: key, text: key});
}

exports.index = function (req, res) {
	res.render('index', { 'list': list, 'champs_obj': champions_obj, 'champ_obj': c_arr });
};

exports.champ_overview = function (req, res) {
	res.render('champ_overview', {'champ_obj': c_arr});
};

exports.combat_type = function (req, res) {
	var filter_champs = '';
	for (var key in champions_obj) {
		if (champions_obj[key].tags.indexOf(req.params.id) > -1){
			filter_champs = filter_champs + '<div style="padding-bottom:10px;" class="col-lg-1 col-sm-2 col-xs-3" ><img id='+ key +' class="champ_img" style="border-radius:4px;box-shadow: 4px 4px 4px #ccc;" src="https://ddragon.leagueoflegends.com/cdn/6.2.1/img/champion/'+ key +'.png" /></div>';
		}
	};
	res.send(filter_champs);
};