sap.ui.define([] , function() {
    "use strict";

    return {
        getSplitText: function (sValue){
            if(sValue) {
                return sValue.split(" ")[0]
            }
            return " ";
        },

        getStausOfUser: function(sValue, bValue){
            console.log(sValue)
            if(bValue === false & sValue !== undefined){
                // return "Active"
                return sValue.split(" ")[0]
            }
            return "Inactive"
        }

    }
})