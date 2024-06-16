sap.ui.define([
    'sap/ui/core/mvc/Controller'
], (Controller) => {
    'use strict';
    
    return Controller.extend("ui5.tooling.controller.AddInvoice",{
        saveInvoice(){
            var model = this.getView().getModel("invoice")
            var productName = this.getView().byId("productName")
            model.getData().Invoices.push({"ProductName": productName.getValue(),
            "Quantity": 21,
            "ExtendedPrice": 87.2,
            "InvoiceDate": "2015-04-01T00:00:00",
            "InvoiceNumber": "A"})
            model.updateBindings()
            var oRouter = this.getOwnerComponent().getRouter()
            oRouter.navTo("overview")
        }
    })
});