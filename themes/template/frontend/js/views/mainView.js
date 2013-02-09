// themes/template/frontend/js/views/mainView.js

/**
 * @description Vista aplicación, carga de plantillas básicas.
 * @name {frontend/mainView.js:[name]}
 * @author juliobarreraa@gmail.com
 * @version 1.0
 * @copyright Todos los derechos reservados @codebit
 */

/**
 * Objeto global
 * @type {object}
 */
var app = app || {};

/**
 * Vista principal
 * @type {object}
 */
app.main = app.main || {};

require.config({
	shim: {
		appModel: {
			deps: ['backbone'],
			exports: 'appModel'
		}
	},
	paths: {
		appModel: 'models/mainModel',
	}
});

//this object
var self;

define([
	'appModel',
	'text!templates/_header.html'
], function(appModel, tmplHeader) {
	app.main.view = Backbone.View.extend({
		template: _.template( tmplHeader ),
		initialize: function()
		{
			self = this;

			//Load Model
			self.model = new app.main.model();

			self.model.set( 'title', 'Hola' );
			self.render();

			console.info("Load view main");
		},
		render: function()
		{
			jQuery('#todo').html(self.template(self.model.toJSON()));
		}
	});

	return app;
});