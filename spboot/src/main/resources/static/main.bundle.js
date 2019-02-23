webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/addefforts/addefforts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Space out content a bit */\nbody {\n    padding-top: 20px;\n    padding-bottom: 20px;\n  }\n/* Everything but the jumbotron gets side spacing for mobile first views */\n.header,\n  .marketing,\n  .footer {\n    padding-right: 15px;\n    padding-left: 15px;\n  }\n/* Custom page header */\n.header {\n    border-bottom: 1px solid #e5e5e5;\n  }\n/* Make the masthead heading the same height as the navigation */\n.header h3 {\n    padding-bottom: 19px;\n    margin-top: 0;\n    margin-bottom: 0;\n    line-height: 40px;\n  }\n/* Custom page footer */\n.footer {\n    padding-top: 19px;\n    color: #777;\n    border-top: 1px solid #e5e5e5;\n  }\n/* Customize container */\n@media (min-width: 768px) {\n    .container {\n      max-width: 730px;\n    }\n  }\n.container-narrow > hr {\n    margin: 30px 0;\n  }\n/* Main marketing message and sign up button */\n.jumbotron {\n    text-align: center;\n    border-bottom: 1px solid #e5e5e5;\n  }\n.jumbotron .btn {\n    padding: 14px 24px;\n    font-size: 21px;\n  }\n/* Supporting marketing content */\n.marketing {\n    margin: 40px 0;\n  }\n.marketing p + h4 {\n    margin-top: 28px;\n  }\n/* Responsive: Portrait tablets and up */\n@media screen and (min-width: 768px) {\n    /* Remove the padding we set earlier */\n    .header,\n    .marketing,\n    .footer {\n      padding-right: 0;\n      padding-left: 0;\n    }\n    /* Space out the masthead */\n    .header {\n      margin-bottom: 30px;\n    }\n    /* Remove the bottom border on the jumbotron for visual effect */\n    .jumbotron {\n      border-bottom: 0;\n    }\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/addefforts/addefforts.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card card-primary\" >\n    <app-navbar></app-navbar>\n  <div class=\"card-block\" align=\"Center\">\n        <div class=\"container\">\n        <div class=\"col-lg-12 well\">\n\n        <div class=\"row\">\n              <form>\n                <div class=\"col-sm-12\">\n                  <div class=\"row\">\n                      <div class=\"col-sm-6 form-group\">\n                          <label>Client Name</label>\n                          <select  placeholder=\"Select Client Name Here..\" class=\"form-control\"  name=\"client_name\"  [(ngModel)]=\"myClients.client_name\">\n                              <option *ngFor=\"let entry of myClients\">{{entry.client_name}}</option>\n                              </select>\n                      </div>\n                     \n                      <div class=\"col-sm-6 form-group\">\n                        \n                      <div class=\"ui-g ui-fluid\">\n                          <div class=\"ui-g-12\">\n                              <label>Date</label>\n                              <p-calendar placeholder=\"Enter Date Here..\" [(ngModel)]=\"effort.Date\" name=\"Date\" [monthNavigator]=\"true\"  [yearNavigator]=\"true\" yearRange=\"2000:2030\"></p-calendar>\n                          </div>\n                      </div>\n                      </div>\n                  </div>\n                 \n                  \t\t\t\t\t\n                  <div class=\"form-group\">\n                    <label>Description</label>\n                    <textarea placeholder=\"Enter Description Here..\" rows=\"3\" class=\"form-control\"  name=\"description\" [(ngModel)]=\"effort.description\"></textarea>\n                  </div>\t\n                  <div class=\"row\">\n                  <div class=\"col-sm-6 form-group\">\n                      <label>Activity Name</label>\n                      <select  placeholder=\"Select Activity  Here..\" class=\"form-control\"  name=\"activity\"  [(ngModel)]=\"effort.activity\">\n                        <option *ngFor=\"let entry of activities\">{{entry}}</option>\n                        </select>\n                    </div>\n                    <div class=\"col-sm-6 form-group\">\n                        <label>Category</label>\n                        <select  placeholder=\"Select Category  Here..\" class=\"form-control\"  name=\"category\"  [(ngModel)]=\"effort.category\">\n                          <option *ngFor=\"let entry of categories\" >{{entry}}</option>\n                          </select>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-sm-6 form-group\">\n                      <label>Ticket Reference</label>\n                      <input type=\"text\" placeholder=\"Enter ticket refrence Here..\" class=\"form-control\"  name=\"ticket_reference\" [(ngModel)]=\"effort.ticket_reference\">\n                    </div>\t\n                    <div class=\"col-sm-6 form-group\">\n                     \n                      <div class=\"ui-g ui-fluid\">\n                          <div class=\"ui-g-12\">\n                              <label>Efforts in mins</label>\n                       <p-calendar placeholder=\"Enter efforts in minuts Here..\"  name=\"efforts_time\" [timeOnly]=\"true\" [(ngModel)]=\"effort.efforts_min\" ></p-calendar>\n                       </div>\n                      </div>\n                    </div>\t\n                    \t\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Meeting Details</label>\n                    <input type=\"text\" placeholder=\"Enter Meeting Details Here..\" class=\"form-control\"  name=\"customer_meeting_details\" [(ngModel)]=\"effort.customer_meeting_details\">\n                  </div>\t\t\t\t\t\n                  <div class=\"form-group\" align=\"Center\">\n                          <button type=\"button\" class=\"btn btn-lg btn-info\" (click)=\"addEfforts()\">Submit</button>\t\t\n                          <button type=\"button\" class=\"btn btn-lg btn-info\">Reset</button>\t\n                          <button type=\"button\" class=\"btn btn-lg btn-info\">Cancel</button>\t\t\n                          </div>\n                      \n                </div>\n              </form> \n              </div>\n        </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/addefforts/addefforts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddeffortsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_apicall_service__ = __webpack_require__("../../../../../src/app/api/apicall.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddeffortsComponent = /** @class */ (function () {
    function AddeffortsComponent(_apiCall) {
        this._apiCall = _apiCall;
        this.activities = ["Service Request",
            "Incident Request",
            "System Monitoring",
            "Mail Monitoring",
            "Documentation",
            "Internal Meeting",
            "Meeting with Customer",
            "EWA Preparation / Recommendation",
            "Security Audit",
            "Firewall Update",
            "NWDI Migration",
            "Proj - Meeting",
            "Effort Update",
            "Report - Weekly / Monthly",
            "Alert Monitoring / resolution",
            "Solman_setup",
            "MDM Migration",
            "Share point Migration",
            "OS Patch",
            "SAN Migration",
            "Capacity planning",
            "SSO Migration",
            "Others",
            "Basis Table Analysis",
            "MDM interface cleanup",
            "Oracle internal jobs",
            "Sysaux setting audit",
            "Certificate inventory",
            "APO Table cleanup",
            "BOP Shared memory",
            "Japan project",
            "APO Upgrade",
            "System Refresh",
            "APD Time zone",
            "LiveCache Consistancy",
            "OP Mode check",
            "License audit",
            "APO DB Jobs",
            "Fiori-NetWeaver Gateway",
            "BWP Offline backup issue",
            "Solman 7.2 upgrade",
            "SAP Profile check",
            "Loftware implementation",
            "Other project",
            "Router Migration",
            "WCEM Oracle upgrade",
            "STPI Update",
            "ECC DEV Patch Update - PLMWUI",
            "Austria project",
            "BWP Production cutover",
            "Suzhou Production cutover",
            "Database performance",
            "Tableau SSO",
            "B2B extranet for EMEA ",
            "CP0480 - 8 Sales",
            "ERD Diagram",
            "Boomi Interface",
            "CRM Language Install",
            "CP0481",
            "CP0476",
            "EDI Jobs Analysis",
            "Background Job Analysis",
            "GUI 750 project",
            "DVM report Generation"];
        this.categories = [
            "Support Work",
            "Enhancement",
            "Project Work"
        ];
        this.effort = {};
        this.myClients = [];
    }
    AddeffortsComponent.prototype.addEfforts = function () {
        console.log(this.effort);
        this.userName = window.sessionStorage.getItem('username');
        this.effort['consultant_name'] = this.userName;
        this._apiCall.postData('/addefforts/' + this.userName, this.effort)
            .subscribe(function (successResponse) {
            //   var jsonData=JSON.stringify(successResponse);
            if (successResponse['flag'] == "success") {
                alert("Effors addedd successfully");
            }
            else {
                alert(successResponse['message']);
            }
            //alert(jsonData);
            console.log(JSON.stringify(successResponse));
        }, function (errorResponse) { alert(errorResponse); }, function () { console.log("Login Successful"); });
    };
    AddeffortsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._apiCall.getData("/clients/" + this.userName)
            .subscribe(function (successResponse) {
            _this.myClients = successResponse['data'];
            console.log(_this.myClients);
        }, function (errorResonse) { console.log(errorResonse); }, function () { console.log("my effort list finished"); });
    };
    AddeffortsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addefforts',
            template: __webpack_require__("../../../../../src/app/addefforts/addefforts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/addefforts/addefforts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_apicall_service__["a" /* ApiCallService */]])
    ], AddeffortsComponent);
    return AddeffortsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/api/apicall.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiCallService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiCallService = /** @class */ (function () {
    function ApiCallService(_http) {
        this._http = _http;
        this._rootApiURL = "http://localhost:8080/";
    }
    ApiCallService.prototype.getData = function (routeURL) {
        return this._http.get(routeURL);
    };
    ApiCallService.prototype.postData = function (routeURL, jsonRequestBody) {
        return this._http.post(routeURL, jsonRequestBody);
    };
    ApiCallService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ApiCallService);
    return ApiCallService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log("*******************");
        console.log(this._router.url);
        console.log("*******************");
        this.roleName = window.sessionStorage.getItem("rolename");
        console.log(this.roleName);
        // if(this.roleName)
        // {
        //   this._router.navigate(['overview']);
        // }
        // else
        // {
        //   this._router.navigate(['login']);
        // }
        if (!this.roleName)
            this._router.navigate(['login']);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__api_apicall_service__ = __webpack_require__("../../../../../src/app/api/apicall.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__efforttracker_efforttracker_component__ = __webpack_require__("../../../../../src/app/efforttracker/efforttracker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__overview_overview_component__ = __webpack_require__("../../../../../src/app/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__addefforts_addefforts_component__ = __webpack_require__("../../../../../src/app/addefforts/addefforts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__clients_clients_component__ = __webpack_require__("../../../../../src/app/clients/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_calendar__ = __webpack_require__("../../../../primeng/calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_primeng_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_table__ = __webpack_require__("../../../../primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_keyfilter__ = __webpack_require__("../../../../primeng/keyfilter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_keyfilter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_primeng_keyfilter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_primeng_menubar__ = __webpack_require__("../../../../primeng/menubar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_primeng_menubar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_primeng_menubar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_components_common_messageservice__ = __webpack_require__("../../../../primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_primeng_components_common_messageservice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_growl__ = __webpack_require__("../../../../primeng/growl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_growl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_primeng_growl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__overview_overview_guard_service__ = __webpack_require__("../../../../../src/app/overview/overview-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__http_interceptor__ = __webpack_require__("../../../../../src/app/http.interceptor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__efforttracker_efforttracker_component__["a" /* EfforttrackerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__overview_overview_component__["a" /* OverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_10__addefforts_addefforts_component__["a" /* AddeffortsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__clients_clients_component__["a" /* ClientsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__navbar_navbar_component__["a" /* NavbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13_primeng_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_14_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_keyfilter__["KeyFilterModule"],
                __WEBPACK_IMPORTED_MODULE_16_primeng_menubar__["MenubarModule"],
                __WEBPACK_IMPORTED_MODULE_18_primeng_growl__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"].forRoot([
                    { path: 'efforttracker', component: __WEBPACK_IMPORTED_MODULE_8__efforttracker_efforttracker_component__["a" /* EfforttrackerComponent */] },
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
                    { path: 'overview', component: __WEBPACK_IMPORTED_MODULE_9__overview_overview_component__["a" /* OverviewComponent */] },
                    { path: 'addefforts', component: __WEBPACK_IMPORTED_MODULE_10__addefforts_addefforts_component__["a" /* AddeffortsComponent */] },
                    { path: 'myclients', canActivate: [__WEBPACK_IMPORTED_MODULE_19__overview_overview_guard_service__["a" /* OverviewGuardService */]], component: __WEBPACK_IMPORTED_MODULE_11__clients_clients_component__["a" /* ClientsComponent */] },
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__api_apicall_service__["a" /* ApiCallService */], __WEBPACK_IMPORTED_MODULE_19__overview_overview_guard_service__["a" /* OverviewGuardService */], __WEBPACK_IMPORTED_MODULE_17_primeng_components_common_messageservice__["MessageService"], __WEBPACK_IMPORTED_MODULE_20__navbar_navbar_component__["a" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_21__global_service__["a" /* GlobalService */], { provide: __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_22__http_interceptor__["a" /* MyHttpLogInterceptor */], multi: true }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/clients/clients.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "thead{\n    \n    color:  #337AB7;\n}\n.form-group{\n    margin-left: 1%\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/clients/clients.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-primary\" >\n        <app-navbar></app-navbar>\n  <div class=\"card-block\">\n     \n      <form class=\"form-inline\" align=\"Center\" >\n                <div class=\"form-group\">\n                  <input type=\"text\" placeholder=\"Enter Client Name Here..\" class=\"form-control\" name=\"client_name\" [(ngModel)]=\"client.client_name\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" placeholder=\"Enter description Here..\" class=\"form-control\" name=\"description\" [(ngModel)]=\"client.description\">\n                    </div>\n                  <div class=\"form-group\">\n                      <div class=\"ui-g ui-fluid\">\n                          <div class=\"ui-g-12\">\n                              <p-calendar  placeholder=\"Enter Start Date Here..\" name=\"start_date\" [(ngModel)]=\"client.start_date\" [monthNavigator]=\"true\"  [yearNavigator]=\"true\" yearRange=\"2000:2030\"></p-calendar>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <div class=\"ui-g ui-fluid\">\n                          <div class=\"ui-g-12\">\n                              <p-calendar   placeholder=\"Enter End Date Here..\" name=\"start_date\" [(ngModel)]=\"client.end_date\" [monthNavigator]=\"true\"  [yearNavigator]=\"true\" yearRange=\"2000:2030\"></p-calendar>\n                          </div>\n                      </div>\n                     </div>\n                <div class=\"ui-g ui-fluid\">\n                     <div class=\"ui-g-12\">\n                            <div class=\"form-group\">\n                                <button type=\"button\" class=\"btn  btn-info\" (click)=\"addClient()\" >Add Client</button>\t\t\n                            </div>\n                    </div>\n                </div>\n               \n                 \n            </form> \n           \n\n        <p-table #dt [columns]=\"cols\" [value]=\"myClients\" selectionMode=\"multiple\" [(selection)]=\"selectedClients\">\n                <ng-template pTemplate=\"caption\">\n                    <div class=\"ui-helper-clearfix\">\n                        <button type=\"button\" pButton icon=\"fa-file-o\" iconPos=\"left\" label=\"All Data\" (click)=\"dt.exportCSV()\" style=\"float:left\"></button>\n                        <button type=\"button\" pButton icon=\"fa-file\" iconPos=\"left\" label=\"Selection Only\" (click)=\"dt.exportCSV({selectionOnly:true})\" style=\"float:right\"></button>\n                        <button type=\"button\" pButton label=\"Delete Client\" (click)=\"deleteClient()\" ></button>\t\n                    </div>\n                </ng-template>\n                <ng-template pTemplate=\"header\" let-columns>\n                    <tr>\n                        <th *ngFor=\"let col of columns\">\n                            {{col.header}}\n                        </th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n                    <tr [pSelectableRow]=\"rowData\">\n                        <td *ngFor=\"let col of columns\">\n                            {{rowData[col.field]}}\n                        </td>\n                    </tr>\n                </ng-template>\n            </p-table>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/clients/clients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_apicall_service__ = __webpack_require__("../../../../../src/app/api/apicall.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(_apiCall) {
        this._apiCall = _apiCall;
        this.myClients = [];
        this.client = {};
    }
    ClientsComponent.prototype.ngOnInit = function () {
        //assign  field name and header for effort tracker table
        this.cols = [
            { field: 'client_name', header: 'Client Name' },
            { field: 'description', header: 'Description' },
            { field: 'start_date', header: 'Start Date' },
            { field: 'end_date', header: 'End Date' },
            { field: 'created_date', header: 'Created Date' },
            { field: 'last_updated_by', header: 'Last Updated By' },
            { field: 'last_updated_date', header: 'Last Updated by' },
        ];
        this.loadClients();
    };
    ClientsComponent.prototype.loadClients = function () {
        var _this = this;
        this._apiCall.getData("http://localhost:8080/clients/" + this.userName)
            .subscribe(function (successResponse) {
            _this.myClients = successResponse['data'];
            console.log(_this.myClients);
        }, function (errorResonse) { console.log(errorResonse); }, function () { console.log("my effort list finished"); });
    };
    ClientsComponent.prototype.addClient = function () {
        var _this = this;
        var date = new Date().toISOString();
        console.log(this.client);
        this.userName = window.sessionStorage.getItem('username');
        this.client['created_date'] = date;
        this.client['last_updated_by'] = this.userName;
        this.client['last_updated_date'] = date;
        this._apiCall.postData('http://localhost:8080/addclient/' + this.userName, this.client)
            .subscribe(function (successResponse) {
            //   var jsonData=JSON.stringify(successResponse);
            if (successResponse['flag'] == "success") {
                alert("Client addedd successfully");
                _this.ngOnInit();
            }
            else {
                alert(successResponse['message']);
            }
            //alert(jsonData);
            console.log(JSON.stringify(successResponse));
        }, function (errorResponse) { alert(errorResponse); }, function () { console.log("Login Successful"); });
    };
    //delete the selected client
    ClientsComponent.prototype.deleteClient = function () {
        var _this = this;
        if (this.selectedClients.length == 1) {
            this.selectedData = this.selectedClients[0];
            this.jsonData = {
                "_id": this.selectedData["_id"]
            };
            this._apiCall.postData("http://localhost:8080/deleteclient/" + this.userName, this.jsonData)
                .subscribe(function (successResponse) {
                if (successResponse['flag'] == "success") {
                    _this.loadClients();
                    alert("Client deleted successfully");
                }
                else {
                    alert("Failed to delete");
                }
            }, function (errorResonse) { console.log(errorResonse); }, function () { console.log("my effort list finished"); });
        }
        else {
            alert("Please select only one record!");
        }
    };
    ClientsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__("../../../../../src/app/clients/clients.component.html"),
            styles: [__webpack_require__("../../../../../src/app/clients/clients.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_apicall_service__["a" /* ApiCallService */]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/efforttracker/efforttracker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "thead{\n    \n    color:  #337AB7;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/efforttracker/efforttracker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-primary\" >\n        <app-navbar></app-navbar>\n\n    <div class=\"card-block\">\n       <div class=\"row\">\n            \n            <div class=\"col-md-2\">\n                <div class=\"ui-g ui-fluid\">\n                    <div class=\"ui-g-12\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Filter By\" [(ngModel)] = 'filterData'/>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"col-md-2\">\n                 <div class=\"ui-g ui-fluid\">\n                        <div class=\"ui-g-12\">\n                            <select  placeholder=\"Select Filter Category Here..\" class=\"form-control\"  name=\"filterCategory\"  [(ngModel)]=\"filterCategory\">\n                                    <option value=\"consultant_name\">Consultant Name</option>\n                                    <option value=\"activity\">Activity</option>\n                                    <option value=\"category\">Category</option>\n                            </select>\n                        </div>\n                </div>\n             </div>\n             <div class=\"col-md-2\">\n                <div class=\"ui-g ui-fluid\">\n                    <div class=\"ui-g-12\">\n                        <p-calendar [(ngModel)]=\"filterStart\" name=\"filterStart\"  placeholder=\"From Date\" [monthNavigator]=\"true\"  [yearNavigator]=\"true\" yearRange=\"2000:2030\"></p-calendar>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-2\">\n                    <div class=\"ui-g ui-fluid\">\n                        <div class=\"ui-g-12\">\n                            <p-calendar [(ngModel)]=\"filterEnd\" name=\"filterEnd\"  placeholder=\"To Date\" [monthNavigator]=\"true\"  [yearNavigator]=\"true\" yearRange=\"2000:2030\"></p-calendar>\n                        </div>\n                    </div>\n            </div>\n                \n               \n       </div>\n     \n        <p-table #dt [columns]=\"cols\" [value]=\"filteredEfforts\" selectionMode=\"multiple\" [(selection)]=\"selectedEfforts\">\n                <ng-template pTemplate=\"caption\">\n                    <div class=\"ui-helper-clearfix\">\n                        <button type=\"button\" pButton icon=\"fa-file-o\" iconPos=\"left\" label=\"All Data\" (click)=\"dt.exportCSV()\" style=\"float:left\"></button>\n                        <button type=\"button\" pButton icon=\"fa-file\" iconPos=\"left\" label=\"Selection Only\" (click)=\"dt.exportCSV({selectionOnly:true})\" style=\"float:right\"></button>\n                        <button type=\"button\" pButton label=\"Delete Effort\" (click)=\"deleteEffort()\" ></button>\n                    </div>\n                </ng-template>\n                <ng-template pTemplate=\"header\" let-columns>\n                    <tr>\n                        <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                            {{col.header}}\n                            <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n                        </th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n                    <tr [pSelectableRow]=\"rowData\">\n                        <td *ngFor=\"let col of columns\">\n                            {{rowData[col.field]}}\n                        </td>\n                    </tr>\n                </ng-template>\n            </p-table>\n\n    </div>\n </div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/efforttracker/efforttracker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EfforttrackerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_apicall_service__ = __webpack_require__("../../../../../src/app/api/apicall.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EfforttrackerComponent = /** @class */ (function () {
    function EfforttrackerComponent(_apiCall) {
        this._apiCall = _apiCall;
        this.userName = window.sessionStorage.getItem("username");
        this.filteredEfforts = [];
        this.myEfforts = [];
        this.finalFilterData = [];
        this.jsonData = {};
        this.filterCategory = "consultant_name";
    }
    Object.defineProperty(EfforttrackerComponent.prototype, "selectedEfforts", {
        get: function () {
            return this._selectedEfforts;
        },
        set: function (v) {
            this._selectedEfforts = v;
            console.log(this._selectedEfforts);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EfforttrackerComponent.prototype, "filterEnd", {
        get: function () {
            return this._filterEnd;
        },
        set: function (v) {
            this._filterEnd = v;
            if (this._filterStart)
                this.filteredEfforts = this.loadEffortData();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EfforttrackerComponent.prototype, "filterStart", {
        get: function () {
            return this._filterStart;
        },
        set: function (v) {
            this._filterStart = v;
            if (this._filterEnd)
                this.filteredEfforts = this.loadEffortData();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EfforttrackerComponent.prototype, "filterData", {
        get: function () {
            return this._filterData;
        },
        set: function (v) {
            this._filterData = v;
            this.filteredEfforts = this.filterData ? this.performFilter(this.filterData) : this.myEfforts;
        },
        enumerable: true,
        configurable: true
    });
    EfforttrackerComponent.prototype.ngOnInit = function () {
        //assign  field name and header for effort tracker table
        this.cols = [
            { field: 'client_name', header: 'Client Name' },
            { field: 'consultant_name', header: 'Consultant Name' },
            { field: 'Date', header: 'Date' },
            { field: 'customer_meeting_details', header: 'Customer / Meeting - Details' },
            { field: 'activity', header: 'Activity' },
            { field: 'category', header: 'Category' },
            { field: 'description', header: 'Detailed Description' },
            { field: 'ticket_reference', header: 'Ticket Reference' },
            { field: 'efforts_time', header: 'Efforts in Time' }
        ];
    };
    //load the effort data initially
    EfforttrackerComponent.prototype.loadEffortData = function () {
        var _this = this;
        this.jsonData = {
            startDate: this._filterStart,
            endDate: this._filterEnd
        };
        this._apiCall.postData("/myefforts/" + this.userName + "/" + window.sessionStorage.getItem("rolename"), this.jsonData)
            .subscribe(function (successResponse) {
            _this.myEfforts = successResponse['data'];
            console.log(_this.myEfforts);
            return _this.filteredEfforts = _this.myEfforts;
        }, function (errorResonse) { console.log(errorResonse); }, function () { console.log("my effort list finished"); });
    };
    //filter the effort by category with specific value  
    EfforttrackerComponent.prototype.performFilter = function (filterdBy) {
        var _this = this;
        console.log(filterdBy);
        console.log(this.filterCategory);
        filterdBy = filterdBy.toLocaleLowerCase();
        return this.myEfforts.filter(function (effort) {
            return effort[_this.filterCategory].toLocaleLowerCase().indexOf(filterdBy) !== -1;
        });
    };
    //delete the selected efforts
    EfforttrackerComponent.prototype.deleteEffort = function () {
        var _this = this;
        if (this._selectedEfforts.length == 1) {
            this.selectedData = this.selectedEfforts[0];
            this.jsonData = {
                "_id": this.selectedData["_id"]
            };
            this._apiCall.postData("/deleteeffort/" + this.userName, this.jsonData)
                .subscribe(function (successResponse) {
                if (successResponse['flag'] == "success") {
                    _this.filteredEfforts = _this.loadEffortData();
                    alert("Effort deleted successfully");
                }
                else {
                    alert("Failed to delete");
                }
            }, function (errorResonse) { console.log(errorResonse); }, function () { console.log("my effort list finished"); });
        }
        else {
            alert("Please select only one record!");
        }
    };
    EfforttrackerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/efforttracker/efforttracker.component.html"),
            styles: [__webpack_require__("../../../../../src/app/efforttracker/efforttracker.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_apicall_service__["a" /* ApiCallService */]])
    ], EfforttrackerComponent);
    return EfforttrackerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/global.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalService = /** @class */ (function () {
    function GlobalService() {
        this.msgs = [];
    }
    GlobalService.prototype.setMessage = function (newMsgs) {
        this.msgs = newMsgs;
    };
    GlobalService.prototype.getMessage = function () {
        return this.msgs;
    };
    GlobalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "../../../../../src/app/http.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyHttpLogInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MyHttpLogInterceptor = /** @class */ (function () {
    function MyHttpLogInterceptor() {
    }
    MyHttpLogInterceptor.prototype.intercept = function (request, next) {
        return next.handle(request);
    };
    MyHttpLogInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MyHttpLogInterceptor);
    return MyHttpLogInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.form-group {\n\tposition: relative;\n}\ndiv.form-group label {\n\tposition: absolute;\n\ttop: 0;\n\t-webkit-transform: translateY(-50%);\n\t        transform: translateY(-50%);\n\tleft: 10px;\n\n\tpadding: 5px 2px;\n}\ndiv.form-group input {\n\tpadding: 10px 20px;\n\tfont-size: 25px;\n\toutline: 0;\n}\ndiv.form-group {\n\tmargin-top: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\n<div class=\"jumbotron\">\n    <div class=\"row\">\n        <div class=\"form_bg\">\n            <form>\n                 <h2 class=\"text-center\">{{pageTitle}}</h2>\n                <br/>\n                <div class=\"form-group\">\n                    <label>Username</label>\n                    <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"user.username\" >\n                </div>\n                <div class=\"form-group\">\n                    <label>Password</label>\n                    <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\">\n                </div>\n                <br/>\n                <div class=\"align-center\">\n                    <thead>\n                        <tr>\n                                <button type=\"submit\" class=\"btn btn-primary\" id=\"login\" (click)=\"onLogin()\" >Login</button>\n                        </tr>\n                    </thead>\n                    \n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_apicall_service__ = __webpack_require__("../../../../../src/app/api/apicall.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_apiCall, _router, _navbarComponent, _globalService) {
        this._apiCall = _apiCall;
        this._router = _router;
        this._navbarComponent = _navbarComponent;
        this._globalService = _globalService;
        this.msgs = [];
        this.pageTitle = "Login Page";
        this.result = {};
        this.user = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.msgs = this._globalService.msgs;
        this._globalService.msgs = null;
        console.log(this.msgs);
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this._apiCall.postData('/login', this.user)
            .subscribe(function (successResponse) {
            //   var jsonData=JSON.stringify(successResponse);
            if (successResponse['flag']) {
                window.sessionStorage.setItem("username", _this.user['username']);
                window.sessionStorage.setItem("rolename", successResponse['rolename']);
                _this._router.navigate(['overview']);
            }
            else {
                alert("Username or Password is incorrect!");
            }
            //alert(jsonData);
            console.log(JSON.stringify(successResponse));
        }, function (errorResponse) { alert(errorResponse); }, function () { console.log("Login Successful"); });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-login",
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_apicall_service__["a" /* ApiCallService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["a" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_4__global_service__["a" /* GlobalService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<p-menubar [model]=\"items\">\n    <div>\n      <button label=\"Logout\" pButton (click)=\"logOut()\"> <span class=\"glyphicon glyphicon-log-out\"></span></button>\n        <!-- <button pButton label=\"Logout\" icon=\"fa-sign-out\" (click)=\"logOut()\"></button> -->\n      \n    </div>\n</p-menubar>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice__ = __webpack_require__("../../../../primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_service__ = __webpack_require__("../../../../../src/app/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_router, _messageService, _globalService) {
        this._router = _router;
        this._messageService = _messageService;
        this._globalService = _globalService;
        this.msgs = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logOut = function () {
        window.sessionStorage.clear();
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'You have successfully logged out.' });
        this._globalService.msgs = this.msgs;
        this._router.navigate(['login']);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2_primeng_components_common_messageservice__["MessageService"], __WEBPACK_IMPORTED_MODULE_3__global_service__["a" /* GlobalService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/overview/overview-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverviewGuardService = /** @class */ (function () {
    function OverviewGuardService() {
    }
    OverviewGuardService.prototype.canActivate = function () {
        this.roleName = window.sessionStorage.getItem("rolename");
        if (this.roleName != "administrator" && this.roleName != "manager") {
            alert("No access");
            return false;
        }
        else {
            return true;
        }
    };
    OverviewGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], OverviewGuardService);
    return OverviewGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/overview/overview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tile{ \n\theight:180px; \n\twidth:180px; \n\tline-height: 180px;\n\tfloat:left; \n\tmargin:20px 20px 0 0; \n\tpadding:2px; \n\tborder-radius: 12px;\n\n} \n.tileLargo{ \n\twidth:260px; \n} \n.amarelo{\n\tbackground:#DAA520;\n\t } \n.vermelho{\n\tbackground:#CD0000; \n} \n.azul{ \n\tbackground:#4682B4; \n} \n.verde{\n\tbackground-color: #2E8B57; \n} \n.selecionado{\n    background-color: #483D8B;\n} \n.linha{\n\tmargin-left: 110px;\n} \n.titulo\n{\n\tfont-size: 30px;\n\tdisplay: inline-block;\n  vertical-align: middle;\n  line-height: normal; \n} \nspan {\n  display: inline-block;\n  vertical-align: middle;\n  line-height: normal;      \n} \n/* body {\n    background: url('http://i.imgur.com/Eor57Ae.jpg') no-repeat fixed center center;\n    background-size: cover;\n    font-family: Montserrat;\n} */ \nbody{\n\tfont-family: Century; \n\tcolor: #fff; \n\tpadding:20px; \n\tbackground-repeat: no-repeat;\n\t} \n.button {\n  display: inline-block;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 900px;\n  height: 42px;\n  cursor: I-beam;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 0 20px;\n  overflow: hidden;\n  border: none;\n  border-radius:10px;\n  font: normal 20px/normal \"Antic\", Helvetica, sans-serif;\n  color: rgba(140, 140, 140, 1);\n  -webkit-text-decoration: normal;\n          text-decoration: normal;\n  text-overflow: ellipsis;\n  background: rgba(40, 40, 40, 0.4);\n  -webkit-box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.5) inset;\n  box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.5) inset;\n  -webkit-transition: all 502ms cubic-bezier(0.68, -0.75, 0.265, 1.75);\n  transition: all 502ms cubic-bezier(0.68, -0.75, 0.265, 1.75);\n} \n.button:hover {\n  width: 1000px;\n  opacity: 0.82;\n  color: rgba(181, 181, 181, 1);\n  background: rgba(0, 0, 0, 0.4);\n  -webkit-transition: all 500ms cubic-bezier(0.68, -0.75, 0.265, 1.75);\n  transition: all 500ms cubic-bezier(0.68, -0.75, 0.265, 1.75);\n} \n.button:focus {\n  width: 1080px;\n  cursor: default;\n  padding: -13px 20px 0;\n  color: rgba(255, 255, 255, 1);\n  -webkit-transition: all 601ms cubic-bezier(0.68, -0.75, 0.265, 1.75);\n  transition: all 601ms cubic-bezier(0.68, -0.75, 0.265, 1.75);\n} \n.text {\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  border: none;\n  font: normal 25px/1 \"amaranth\", Helvetica, sans-serif;\n  color: #ffffff;\n  text-align: center;\n  text-overflow: ellipsis;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n} \ninput:focus {\n  outline: none;\n}\n\n\n ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"main\" align=\"center\">\n  <br>\n  <input class=\"button\" placeholder=\"Search...\" />\n<div class=\"pagina\"> \n\t<div class=\"linha\">\n\t\t <div class=\"tile amarelo\"> \n\t\t <span class=\"titulo\">Timesheet</span><br/>\n\t\t </div> \n\t\t <div class=\"tile azul\"> \n\t\t <span class=\"titulo\">HCM</span><br/>\n\t\t </div> \n\t\t <div class=\"tile tileLargo vermelho\"> \n\t\t <span class=\"titulo\">Books</span><br/>\n\t\t </div> \n\t\t <div class=\"tile verde\">\n\t\t <span class=\"titulo\">Profile</span><br/> \n\t\t </div>\n\t\t  <div class=\"tile tileLargo amarelo\"> \n\t\t  <span class=\"titulo\">Transport</span><br/>\n\t\t </div> \n\t</div> \n\t<div class=\"linha\"> \n\t\t <div class=\"tile tileLargo amarelo\" [routerLink]=\"['../efforttracker']\"> \n\t\t <span class=\"titulo\" >My Efforts</span><br/>\n\t\t </div>\n\t\t  <div class=\"tile azul\" [routerLink]=\"['../addefforts']\"> \n\t\t  <span class=\"titulo\">Add My Efforts</span><br/>\n\t\t </div> \n\t\t <div class=\"tile verde\" [routerLink]=\"['../myclients']\">\n\t\t <span class=\"titulo\">My Clients</span><br/>\n\t\t </div>\n\t\t <div class=\"tile vermelho\"> \n\t\t <span class=\"titulo\">Tile 9</span><br/>\n\t\t </div>\n\t\t <div class=\"tile tileLargo verde\">\n\t\t <span class=\"titulo\">Tile 10</span><br/>\n\t\t </div>\n\t</div> \n\t<div class=\"linha\"> \n\t\t<div class=\"tile amarelo\"> \n\t\t<span class=\"titulo\">Tile 11</span><br/>\n\t\t</div> \n\t\t<div class=\"tile tileLargo vermelho\"> \n\t\t<span class=\"titulo\">Tile 12</span><br/>\n\t\t</div> \n\t\t<div class=\"tile vermelho\"> \n\t\t<span class=\"titulo\">Tile 13</span><br/>\n\t\t</div> \n\t\t<div class=\"tile tileLargo verde\"> \n\t\t<span class=\"titulo\">Tile 14</span><br/>\n\t\t</div> \n\t\t<div class=\"tile azul\"> \n\t\t<span class=\"titulo\">Tile 15</span><br/>\n\t\t</div> \n\t\t\n \t</div> \n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverviewComponent = /** @class */ (function () {
    function OverviewComponent() {
    }
    OverviewComponent.prototype.ngOnInit = function () {
    };
    OverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__("../../../../../src/app/overview/overview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/overview/overview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map