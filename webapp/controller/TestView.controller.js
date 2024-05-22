sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast'
], (Controller, MessageToast) => {
    'use strict';
    
    return Controller.extend("ui5.tooling.controller.TestView",{
        testPush(){
            MessageToast.show("Test")
        }
    })
});