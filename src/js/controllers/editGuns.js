define(['jquery','can','js/models/gunsModel'],function($,can,gun){
	var editGuns = can.Control({
		loadGun: function(gun){
			this.options.gun = gun;
			this.on();
			this.element.html(can.view('js/views/edit.ejs',{
				gun: this.options.gun
			}));
		},

		'#add click': function(el, ev) {
		   new gun({'desc':$('#gun').val()}).save();
		},

		'#edit click': function(el, ev) {
		   var gunVal = $('#gun').val();
		   if(this.options.gun.attr('desc') !== gunVal){
		   		this.options.gun.attr('desc', gunVal).save();
		   }
		},

	  	'{gun} destroyed': function() {
	    	can.route.removeAttr('id');
	  	}
	});

	return editGuns;
});