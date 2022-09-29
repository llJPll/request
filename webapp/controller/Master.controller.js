sap.ui.define([
    "sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"sap/base/Log",
    "sap/ui/model/json/JSONModel",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (MessageToast, Controller, Device, Log,JSONModel) {
        "use strict";
        var that;
        var oView;
        return Controller.extend("ns.indra.orderrequest.controller.Master", {
            onInit: function () {
                that = this;
                oView = that.getView();
                var aOrdenes = [
                    {
                        documento: "45000916354",
                        proveedor:"Administrador de negocios",
                        fecha:"25/07/2016",
                        importe: "78395.49",
                        currency: "PEN",
                        usuario:"Oper Canales"
                    },
                    {
                        documento: "45000916354",
                        proveedor:"Administrador de negocios",
                        fecha:"25/07/2016",
                        importe: "78395.49",
                        currency: "PEN",
                        usuario:"Oper Canales"
                    }
                ]
                var posiciones = [
                    {
                        documento: "45000916354",
                        pos:"10",
                        material:"mat",
                        fecha:"25/07/2016",
                        importe: "78395.49",
                        currency: "PEN",
                        grpArticulos:"Mobiliario de equipos",
                        mesure:"1000",
                        unit:"SRV",
                        descripcion:"CONFIG EQ WIFI DESK/LAP/TV/CONTROL"
                    },
                    {
                        documento: "45000916354",
                        pos:"20",
                        material:"mat",
                        fecha:"25/07/2016",
                        importe: "78395.49",
                        currency: "PEN",
                        grpArticulos:"Mobiliario de equipos",
                        mesure:"1000",
                        unit:"SRV",
                        descripcion:"CONFIG EQ WIFI DESK/LAP/TV/CONTROL"
                    },
                    {
                        documento: "45000916354",
                        pos:"30",
                        material:"mat",
                        fecha:"25/07/2016",
                        importe: "78395.49",
                        currency: "PEN",
                        grpArticulos:"Mobiliario de equipos",
                        mesure:"1000",
                        unit:"SRV",
                        descripcion:"CONFIG EQ WIFI DESK/LAP/TV/CONTROL"
                    },
                    {
                        documento: "45000916354",
                        pos:"30",
                        material:"mat",
                        fecha:"25/07/2016",
                        importe: "78395.49",
                        currency: "PEN",
                        grpArticulos:"Mobiliario de equipos",
                        mesure:"1000",
                        unit:"SRV",
                        descripcion:"CONFIG EQ WIFI DESK/LAP/TV/CONTROL"
                    },
                    {
                        documento: "45000916354",
                        pos:"30",
                        material:"mat",
                        fecha:"25/07/2016",
                        importe: "78395.49",
                        currency: "PEN",
                        grpArticulos:"Mobiliario de equipos",
                        mesure:"1000",
                        unit:"SRV",
                        descripcion:"CONFIG EQ WIFI DESK/LAP/TV/CONTROL"
                    },
                    {
                        documento: "45000916354",
                        pos:"30",
                        material:"mat",
                        fecha:"25/07/2016",
                        importe: "78395.49",
                        currency: "PEN",
                        grpArticulos:"Mobiliario de equipos",
                        mesure:"1000",
                        unit:"SRV",
                        descripcion:"CONFIG EQ WIFI DESK/LAP/TV/CONTROL"
                    },
                    {
                        documento: "45000916354",
                        pos:"30",
                        material:"mat",
                        fecha:"25/07/2016",
                        importe: "78395.49",
                        currency: "PEN",
                        grpArticulos:"Mobiliario de equipos",
                        mesure:"1000",
                        unit:"SRV",
                        descripcion:"CONFIG EQ WIFI DESK/LAP/TV/CONTROL"
                    },
                    {
                        documento: "45000916354",
                        pos:"30",
                        material:"mat",
                        fecha:"25/07/2016",
                        importe: "78395.49",
                        currency: "PEN",
                        grpArticulos:"Mobiliario de equipos",
                        mesure:"1000",
                        unit:"SRV",
                        descripcion:"CONFIG EQ WIFI DESK/LAP/TV/CONTROL"
                    },
                    {
                        documento: "45000916354",
                        pos:"30",
                        material:"mat",
                        fecha:"25/07/2016",
                        importe: "78395.49",
                        currency: "PEN",
                        grpArticulos:"Mobiliario de equipos",
                        mesure:"1000",
                        unit:"SRV",
                        descripcion:"CONFIG EQ WIFI DESK/LAP/TV/CONTROL"
                    },
                    {
                        documento: "45000916354",
                        pos:"30",
                        material:"mat",
                        fecha:"25/07/2016",
                        importe: "78395.49",
                        currency: "PEN",
                        grpArticulos:"Mobiliario de equipos",
                        mesure:"1000",
                        unit:"SRV",
                        descripcion:"CONFIG EQ WIFI DESK/LAP/TV/CONTROL"
                    },
                    {
                        documento: "45000916354",
                        pos:"30",
                        material:"mat",
                        fecha:"25/07/2016",
                        importe: "78395.49",
                        currency: "PEN",
                        grpArticulos:"Mobiliario de equipos",
                        mesure:"1000",
                        unit:"SRV",
                        descripcion:"CONFIG EQ WIFI DESK/LAP/TV/CONTROL"
                    },
                    {
                        documento: "45000916354",
                        pos:"30",
                        material:"mat",
                        fecha:"25/07/2016",
                        importe: "78395.49",
                        currency: "PEN",
                        grpArticulos:"Mobiliario de equipos",
                        mesure:"1000",
                        unit:"SRV",
                        descripcion:"CONFIG EQ WIFI DESK/LAP/TV/CONTROL"
                    },
                    {
                        documento: "45000916354",
                        pos:"30",
                        material:"mat",
                        fecha:"25/07/2016",
                        importe: "78395.49",
                        currency: "PEN",
                        grpArticulos:"Mobiliario de equipos",
                        mesure:"1000",
                        unit:"SRV",
                        descripcion:"CONFIG EQ WIFI DESK/LAP/TV/CONTROL"
                    }
                    
                ]
                var oModelPosiciones = new JSONModel(posiciones);
                oView.byId("idListPosSolpedCel").setModel(oModelPosiciones);
                var oModelOrdenes = new JSONModel(aOrdenes);
                oView.byId("idListOC").setModel(oModelOrdenes);                                
                this.getSplitAppObj().setHomeIcon({
                    'phone': 'phone-icon.png',
                    'tablet': 'tablet-icon.png',
                    'icon': 'desktop.ico'
                });
                
                //validar si esta de cel
                if(Device.system.phone){
                    oView.byId("idOfToolbar2").setVisible(true);
                    oView.byId("idToolSpacer2").setVisible(true);
                    oView.byId("idBtnLibera2r").setVisible(true);
                    oView.byId("btnLibDetail").setVisible(false);
                }else{
                    oView.byId("idOfToolbar2").setVisible(false);
                    oView.byId("idToolSpacer2").setVisible(false);
                    oView.byId("idBtnLibera2r").setVisible(false);
                    oView.byId("btnLibDetail").setVisible(true);
                }
                Device.orientation.attachHandler(this.onOrientationChange, this);
                var aAprobadores = [
                        {
                            "id": "0",
                            "position": 0,
                            "icon": "sap-icon://circle-task-2",
                            "text": "Aprobador 1"
                        },
                        {
                            "id": "1",
                            "position": 1,
                            "icon": "sap-icon://circle-task-2",
                            "text": "Aprobador 2"
                        },
                        {
                            "id": "2",
                            "position": 2,
                            "icon": "sap-icon://circle-task-2",
                            "text": "Aprobador 3"
                        }
                    ]
                    var sDataPath = aAprobadores
                    var oModel = new JSONModel(sDataPath);
                    this.getView().byId("idHboxAprobadores").setModel(oModel);
            },
    
            onExit: function () {
                Device.orientation.detachHandler(this.onOrientationChange, this);
            },
    
            onOrientationChange: function (mParams) {
                var sMsg = "Orientation now is: " + (mParams.landscape ? "Landscape" : "Portrait");
                MessageToast.show(sMsg, { duration: 5000 });
                //validar si esta de cel
                if(Device.system.phone){
                    oView.byId("idOfToolbar2").setVisible(true);
                    oView.byId("idToolSpacer2").setVisible(true);
                    oView.byId("idBtnLibera2r").setVisible(true);
                    oView.byId("btnLibDetail").setVisible(false);
                }else{
                    oView.byId("idOfToolbar2").setVisible(false);
                    oView.byId("idToolSpacer2").setVisible(false);
                    oView.byId("idBtnLibera2r").setVisible(false);
                    oView.byId("btnLibDetail").setVisible(true);
                }
            },
    
            onPressNavToDetail: function () {
                this.getSplitAppObj().to(this.createId("idDetaiSolpedCel"));
            },
            onDetallePos: function () {
                this.getSplitAppObj().to(this.createId("idDetail2SolpedCel"));
            },
            onPressDetailBack: function () {
                this.getSplitAppObj().backDetail();
            },
    
            onPressMasterBack: function () {
                this.getSplitAppObj().to(this.createId("master"));
            },
    
            onPressGoToMaster: function () {
                this.getSplitAppObj().toMaster(this.createId("master2"));
            },
    
            onListItemPress: function (oEvent) {
                var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();
    
                this.getSplitAppObj().toDetail(this.createId(sToPageId));
            },
    
            onPressModeBtn: function (oEvent) {
                var sSplitAppMode = oEvent.getSource().getSelectedButton().getCustomData()[0].getValue();
    
                this.getSplitAppObj().setMode(sSplitAppMode);
                MessageToast.show("Split Container mode is changed to: " + sSplitAppMode, { duration: 5000 });
            },
    
            getSplitAppObj: function () {
                var result = this.byId("idSplitApp");
                if (!result) {
                    Log.info("SplitApp object can't be found");
                }
                return result;
            },
            onPressOC: function(e){
                console.log(e);
                that.onPressNavToDetail();
            },
            onPressHeader: function(){
                
            },
            onLiberar: function(){
               
            }
        });
    });
