sap.ui.define([
    "sap/m/StandardListItem",
    "sap/m/ObjectListItem"

] , function(StandardListItem, ObjectListItem) {
    "use strict";

    return {
        childItem: function (sId, oContext){
            if(oContext.getProperty("completed")){
                return new ObjectListItem({
                    title: oContext.getProperty("title"),
                    icon: "sap-icon://hr-approval"
                })
            }else{
                return new StandardListItem({
                    title: "{jsonPlaceDataModel>title}",
                    icon: "sap-icon://decline"
                })
            }
        }

    }
})