sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function (JSONModel) {
    "use strict";

    return {
        getDataModel: function(){
            return fetch('https://jsonplaceholder.typicode.com/todos')
            .then((res) => {
                return res.json();
            })
            .then((todos) => {
                var oDataNewModel = new JSONModel(todos);
                return oDataNewModel;
            })
            .catch(() => {
                return new JSONModel();
            })
            // var oModel = new JSONModel(oDataJson);
            // return oModel;
        }
    }

});