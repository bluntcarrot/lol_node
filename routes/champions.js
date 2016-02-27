var champions_obj = require('../model/champions_data.json')['data'];

exports.index = function (req, res){
	var list = '',
		c_arr = [],
		c_obj = {'c_arr':c_arr};
	
	for( var key in champions_obj ){
		list = list + '<div style="padding-bottom:10px;" class="col-lg-1 col-sm-2 col-xs-3" ><img id='+ key +' class="champ_img" style="border-radius:4px;box-shadow: 4px 4px 4px #ccc;" src="http://ddragon.leagueoflegends.com/cdn/6.2.1/img/champion/'+ key +'.png" /></div>';
		c_arr.push({id: key, text: key});
	}
	
	res.render('index', { 'list': list, 'champs_obj': champions_obj, 'champ_obj': c_obj });
};

exports.champ_overview = function (req, res){
	res.send('test');
};