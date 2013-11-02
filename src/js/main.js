require.config({

  baseUrl: '/canjs-require/src',

  paths: {
    jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min',
    can: 'libs/can'
  },
  shim: {
    can: {
        deps: [
          'jquery'
        ],
        exports: 'can'
    }
  }
});

require(['js/controllers/router.js'], function(router) {
  var app = new router(window);
});
