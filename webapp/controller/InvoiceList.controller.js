sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast'
], (Controller, MessageToast) => {
    'use strict';
    
    return Controller.extend("ui5.tooling.controller.InvoiceList",{
        fetchDetails(oEvent){
            const oItem = oEvent.getSource()
            const oRouter = this.getOwnerComponent().getRouter()
            oRouter.navTo("detail",{
                invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
            })
        }
    })
});