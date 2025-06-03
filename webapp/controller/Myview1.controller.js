sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/dd/project2/model/formatter",
    "sap/dd/project2/model/factory"

], (Controller, JSONModel, formatter, factory) => {
    "use strict";

    return Controller.extend("sap.dd.project2.controller.Myview1", {
        formatter: formatter,

        factory: factory,

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