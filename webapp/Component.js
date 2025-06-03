sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/dd/project2/model/models",
    "sap/dd/project2/model/data"
], (UIComponent, models, data) => {
    "use strict";

    return UIComponent.extend("sap.dd.project2.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            //set data model globally
            data.getDataModel().then((oTodoModel) => {
                this.setModel(oTodoModel, "jsonPlaceDataModel") //earlier oUserModel
            })

            // enable routing
            this.getRouter().initialize();
        }
    });
});