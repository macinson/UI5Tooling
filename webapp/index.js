sap.ui.define([
    'sap/ui/core/mvc/XMLView'
], (XMLView) => {
    'use strict';
    
    XMLView.create({
        viewName: "ui5.tooling.view.App"
    }).then((view) => {view.placeAt("content")})
});