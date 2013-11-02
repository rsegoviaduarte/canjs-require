define(['jquery','can','js/models/gunsModel'],function($,can,gunsModel){
	var guns = can.Control({
		init: function(){
			var el = this.element,
				gunsOberver;

			gunsOberver = new can.Observe({
				guns:[]
			});

			gunsModel.findAll({}, function(response){
				gunsOberver.attr('guns',response);
				el.html(can.view('js/views/list.ejs',gunsOberver));
			});

			can.bind.call(this, 'refresh', function(ev,id){
	  			gunsModel.findAll({}, function(response){
					gunsOberver.attr('guns',response);
					can.route.attr('id',id);
				});
	  		});
		},

		'.delete click': function(el, ev) {
	    	el.parent().data('gun').destroy();
	  	},

	    '.description click': function(el, ev) {
	    	can.route.attr('id', el.parent().data('gun').id);
  		}
	});

	return guns;
});