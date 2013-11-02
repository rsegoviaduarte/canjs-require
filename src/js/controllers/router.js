define(['jquery','can','js/controllers/gunsBoard','js/controllers/editGuns','js/models/gunsModel'],function($,can,GunsBoard,EditBoard,Gun){
	var routing = can.Control({
		init: function() {
			var gboard = GunsBoard,
				element,
				store;

			store = can.fixture.store(10, function(i) {
				i += 1;
				return {
					id : i,
					desc : 'Glock 17',
					year: '2002',
					model: '34554',
					status: 2
				};
			});

			can.fixture('GET /guns', store.findAll);
			can.fixture('GET /guns/{id}', store.findOne);
			can.fixture('POST /guns', function(request,response){
				store.create(request,function(response){
					can.trigger(gboard, 'refresh',response.id);
				});
			});
			can.fixture('PUT /guns/{id}', store.update);
			can.fixture('DELETE /guns/{id}', store.destroy);

			can.route('guns/:id');

			element = $('#list');
			gboard = new GunsBoard(element);

			this.editor = new EditBoard($('#edit'));
			$('#edit').hide();

			can.route.ready(true);
		},

		'route': function(){
			$('#edit').hide();
		},

		'guns/:id route': function(data) {
			if(data.id) {
				var editor = this.editor;
				Gun.findOne({id: data.id},function(gun) {
					editor.loadGun(gun);
					editor.element.show();
				});
			}
			else {
				$('#edit').hide();
			}
		}
	});

	return routing;
});