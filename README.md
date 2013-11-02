canjs-require
=============

## Canjs with require.js example.

## Learning CanJS

The [CanJS website](http://canjs.com) is a great resource for getting started.

Here is another example, which is the one that I took as guide to build mine. [TodoMVC Canjs](http://todomvc.com/architecture-examples/canjs/).

## Require Implementation.

CanJS is currently one of the few MVC libraries that fully supports the AMD module concept. Any part of CanJS may be loaded as its own module, which in turn only loads the dependencies actually required.

You can obtain the `can` object by requiring `can/util/library`. This will provide all utility functions and any loaded module. This makes it easier to move existing CanJS applications to RequireJS and use the utility functions.

```javascript
define([
	'can/util/library',
	'can/control',
	'can/view/ejs
'], function (can) {
	can.Control // -> Construct
	can.view    // -> now able to render EJS views
});
```
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

The available modules are

- `libs/can/construct` - Inheritable constructor functions
  - `libs/can/construct/super` - Call super methods
  - `libs/can/construct/proxy` - Proxy construct methods
- `libs/can/observe` - Observable key-value bindings
  - `libs/can/observe/attributes` - Attribute conversion and model associations
  - `libs/can/observe/backup` - Backup and restore Observe states
  - `libs/can/observe/validations` - Validate observes
- `libs/can/control` - Declarative event bindings
  - `libs/can/control/plugin` - Turns Controls into jQuery plugins
  - `libs/can/control/route` - Declarative route bindings
- `libs/can/view` - Template loading, caching, rendering
  - `libs/can/view/ejs` - Live binding embedded JavaScript
  - `libs/can/view/mustache` - Live binding Mustache / Handlebars templates
  - `libs/can/view/modifiers` - Adds view rendering abilities to jQuery modifiers (like `.html`, `.append` etc.)
- `libs/can/route` - Back button and bookmarking support

## Canjs features.

This is a small example that i did, basically to play with these features of canjs.

* Routing
* Canjs fixture
* Live Binding

