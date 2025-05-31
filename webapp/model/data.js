sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function (JSONModel) {
    "use strict";

    return {
        getDataModel: function(){
            var oDataJson = {
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

            var oModel = new JSONModel(oDataJson);
            return oModel;
        }
    }

});