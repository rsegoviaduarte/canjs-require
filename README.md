canjs-require
=============

## Canjs with require.js example.

## Learning CanJS

The [CanJS website](http://canjs.com) is a great resource for getting started.

Here is another example, which is the one that I took as guide to build mine. [TodoMVC Canjs](http://todomvc.com/architecture-examples/canjs/).

## Require Implementation.

For this example, what I did is require at the config file, this way:

```javascript
  paths: {
    jquery: "//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min",
    can: "libs/can"
  },
  shim: {
    can: {
        deps: [
          'jquery'
        ],
        exports: 'can'
    }
  }
```

## Canjs features.

This is a small example that i did, basically to play with these features of canjs.

* Routing
* Canjs fixture
* Live Binding

