sap.ui.define([
    'sap/ui/core/mvc/Controller'
], (Controller) => {
    'use strict';
    
    return Controller.extend("ui5.tooling.controller.Detail",{
        onInit(){
            const oRouter = this.getOwnerComponent().getRouter()
            oRouter.getRoute("detail").attachPatternMatched(this.loadInvoice,this)
        },

        loadInvoice(oEvent){
            this.getView().bindElement({
                path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
                model: "invoice"
            })
        }
    })
});