sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/Text'
], (Controller,Text) => {
    'use strict';
    
    return Controller.extend(
        "ui5.tooling.view.App",{
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