sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("sap.dd.project2.controller.Myview1", {
        onInit() {
            var oData = {
                "Keyprop": [
                    {
                        "name": "Deepraj",
                        "Age": 26
                    },
                    {
                        "name": "Raju",
                        "Age": 28
                    }
                ]
            };

            var oDataNewModel = new JSONModel(oData);
            this.getView().setModel(oDataNewModel, "dataControllerModel");
        }
    });
});