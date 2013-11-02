canjs-require
=============

## Canjs with require.js example.

## Learning CanJS

The [CanJS website](http://canjs.com) is a great resource for getting started.

Here is another example, which is the one that I took as guide to build mine. [TodoMVC Canjs](http://todomvc.com/architecture-examples/canjs/).

## Requiere Implementation.

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

The available modules are

- `can/construct` - Inheritable constructor functions
  - `can/construct/super` - Call super methods
  - `can/construct/proxy` - Proxy construct methods
- `can/observe` - Observable key-value bindings
  - `can/observe/attributes` - Attribute conversion and model associations
  - `can/observe/backup` - Backup and restore Observe states
  - `can/observe/validations` - Validate observes
- `can/control` - Declarative event bindings
  - `can/control/plugin` - Turns Controls into jQuery plugins
  - `can/control/route` - Declarative route bindings
- `can/view` - Template loading, caching, rendering
  - `can/view/ejs` - Live binding embedded JavaScript
  - `can/view/mustache` - Live binding Mustache / Handlebars templates
  - `can/view/modifiers` - Adds view rendering abilities to jQuery modifiers (like `.html`, `.append` etc.)
- `can/route` - Back button and bookmarking support

## Canjs features.

This is a small example that i did, basically to play with these features of canjs.

* Routing
* Canjs fixture
* Live Binding

