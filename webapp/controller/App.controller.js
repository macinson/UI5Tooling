sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/Text',
    "sap/ui/model/json/JSONModel"
], (Controller,Text, JSONModel) => {
    'use strict';
    
    return Controller.extend(
        "ui5.tooling.view.App",{
            onInit(){
                const oData = {
                    test:{
                        ff: "test"
                    }
                };
                
                const oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
            },
            buttonClicked(){
                alert("Clicked");
            },
            doSth(){
                new Text({
                    text: "XDDD"
                }).placeAt("content");
            }
        }
    );
});