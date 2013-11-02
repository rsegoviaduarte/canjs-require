define(['can'],function(can){

	/*To use within json file*/
	/*var gun = can.Model.extend({
	  findAll: 'GET /canjs_example/data/guns.json',
	  findOne: 'GET /canjs_example/data/{id}.json',
	  create:  'POST /canjs_example/data/guns.json',
	  update:  'PUT /canjs_example/data/{id}.json',
	  destroy: 'DELETE /canjs_example/data/{id}.json' 
	},{});*/

	var gun = can.Model.extend({
		findAll : 'GET /guns',
		findOne : 'GET /guns/{id}',
		create  : 'POST /guns',
		update  : 'PUT /guns/{id}',
		destroy : 'DELETE /guns/{id}'
	}, {});

	return gun;
});