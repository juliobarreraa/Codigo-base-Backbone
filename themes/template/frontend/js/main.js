// themes/template/frontend/js/main.js

/**
 * @description Punto de entrada de la aplicación
 * @name {frontend/main.js:[name]}
 * @author juliobarreraa@gmail.com
 * @version 1.0
 * @copyright Todos los derechos reservador @codebit
 */

/**
 * Objeto global
 * @type {object}
 */
var app = app || {};

require.config({
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['jquery', 'underscore', 'text'],
			exports: 'Backbone'
		},
		jquery: {
			exports: 'jQuery'
		},
		bootstrap: {
			deps: ['jquery'],
		},
		appView: {
			deps: ['backbone'],
		}
	},
	paths: {
		jquery: '../../../../js/lib/jquery',
		underscore: '../../../../js/lib/underscore',
		backbone: '../../../../js/lib/backbone',
		less: '../../../../js/lib/less',
		bootstrap: '../../../../js/lib/bootstrap',
		appView: 'views/mainView',
		text: '../../../../js/lib/text'
	}
});

define([
	'appView',
	'bootstrap'
], function() {
	new app.main.view();
});