sap.ui.define([
    'sap/ui/core/mvc/Controller'
], (Controller) => {
    'use strict';
    
    return Controller.extend("ui5.tooling.controller.Overview",{
        showAddInvoice(oEvent){
            const oRouter = this.getOwnerComponent().getRouter()
            oRouter.navTo("addInvoice")
        }
    })
});