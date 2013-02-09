// themes/template/frontend/js/views/mainModel.js

/**
 * @description Modelo de la vista principal
 * @name {frontend/mainModel.js:[name]}
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

define([
], function() {
	app.main.model = Backbone.Model.extend({
		defaults: {
			title: 'Hello world',
			subtitle: '',
			amount: 0.00,
		},
		initialize: function()
		{
			console.info( 'initialize model' );
			
			this.on('change:title', function() {
				console.info( 'Title change' );
			});
		}
	});
});