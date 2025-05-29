/*global QUnit*/

sap.ui.define([
	"sap/dd/project2/controller/Myview1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Myview1 Controller");

	QUnit.test("I should test the Myview1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
