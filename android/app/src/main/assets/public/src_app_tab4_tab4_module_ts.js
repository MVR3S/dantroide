"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab4_tab4_module_ts"],{

/***/ 7432:
/*!************************************************!*\
  !*** ./src/app/tab4/tab4.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/* Optional CSS, this is added for the flashing that happens when toggling between themes */\nion-item {\n  --transition: none;\n}\n.backgorund-image {\n  --background: url('SfondoApp.png') 0 0/100% 100% no-repeat;\n}\nion-button {\n  background: #34323d;\n  color: rgba(255, 255, 255, 0.8);\n  border-radius: 12px;\n  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);\n}\n.bottone {\n  height: 45px;\n  border-radius: 5px;\n  margin-left: 10%;\n  margin-top: 5%;\n  font-weight: bold;\n  font-size: auto;\n  letter-spacing: 1px;\n}\n.stop {\n  height: 45px;\n  border-radius: 5px;\n  margin-top: 5%;\n  font-weight: bold;\n  font-size: 16px;\n  letter-spacing: 1px;\n}\n.connessione {\n  height: 35px;\n  border-radius: 5px;\n  margin-top: 7%;\n  font-weight: bold;\n  font-size: 16px;\n  letter-spacing: 1px;\n  margin-bottom: 20%;\n}\n.scritta-titolo {\n  color: white;\n  margin-top: 10%;\n  font-size: x-large;\n}\n.scritta {\n  color: white;\n  margin-top: 5%;\n  font-size: x-large;\n}\n/*.bottone1{\n  position: relative;\n  height: 35px;\n  border-radius: 5px;\n  margin-left: 10%;\n  margin-top: 3%;\n  font-weight: bold;\n  font-size: 16px;\n  letter-spacing: 1px;\n}\n\n.bottone2{\n  position: relative;\n  height: 35px;\n  border-radius: 5px;\n  margin-left: 10%;\n  margin-top: 0%;\n  font-weight: bold;\n  font-size: 16px;\n  letter-spacing: 1px;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJGQUFBO0FBQ0E7RUFDSSxrQkFBQTtBQUNKO0FBRUE7RUFDSSwwREFBQTtBQUNKO0FBRUU7RUFFRSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQUFKO0FBSUU7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUROO0FBSUk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFETjtBQUlJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFETjtBQUlJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUROO0FBSUk7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRE47QUFJSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQSIsImZpbGUiOiJ0YWI0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE9wdGlvbmFsIENTUywgdGhpcyBpcyBhZGRlZCBmb3IgdGhlIGZsYXNoaW5nIHRoYXQgaGFwcGVucyB3aGVuIHRvZ2dsaW5nIGJldHdlZW4gdGhlbWVzICovXHJcbmlvbi1pdGVtIHtcclxuICAgIC0tdHJhbnNpdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4uYmFja2dvcnVuZC1pbWFnZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2JhY2tncm91bmQvU2ZvbmRvQXBwLnBuZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gIH1cclxuICBcclxuICBpb24tYnV0dG9uIHtcclxuICAgIC8vYmFja2dyb3VuZDogIzQyM2M1YTgwOyAvL2NvbG9yZSBzZm9uZG9cclxuICAgIGJhY2tncm91bmQ6ICMzNDMyM2Q7IC8vY29sb3JlIHNmb25kb1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTsgLy9jb2xvcmUgdGVzdG9cclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7IC8vYm9yZGkgYXJyb3RvbmRhdGlcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHJnYigwIDAgMCAvIDMwJSk7IC8vb21icmEgYm94XHJcbiAgICAvL2JhY2tkcm9wLWZpbHRlcjogYmx1cigzM3B4KTtcclxuICB9XHJcbiAgXHJcbiAgLmJvdHRvbmV7XHJcbiAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogYXV0bztcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3RvcHtcclxuICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb25uZXNzaW9uZXtcclxuICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDclO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNjcml0dGEtdGl0b2xve1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zY3JpdHRhe1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyouYm90dG9uZTF7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3R0b25lMntcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB9Ki9cclxuICBcclxuXHJcbiAgICAiXX0= */";

/***/ }),

/***/ 9184:
/*!************************************************!*\
  !*** ./src/app/tab4/tab4.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"backgorund-image\" [fullscreen]=\"true\">\r\n  <style>\r\n    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');\r\n  </style>\r\n\r\n  <center><p style=\"font-weight: bold\" class=\"scritta-titolo\">Le parole di Dante</p></center>\r\n  <center><p style=\"font-weight: bold\" class=\"scritta\">In collaborazione con l'Accademia della Crusca</p></center>\r\n\r\n  <ion-button id=\"vita\" color=\"#e01802\" class=\"bottone\" style=\"width: 35%; margin-top: 2%\" (click)=\"SendMessage(0)\">ADDUARSI</ion-button>\r\n  <ion-button color=\"#e01802\" class=\"bottone\" style=\"width: 35%; margin-top: 2%\" (click)=\"SendMessage(1)\">INSEMPRARSI</ion-button>\r\n  <ion-button color=\"#e01802\" class=\"bottone\" style=\"width: 35%\" (click)=\"SendMessage(2)\">INMIARSI INTUARSI</ion-button>\r\n  <ion-button color=\"#e01802\" class=\"bottone\" style=\"width: 35%\" (click)=\"SendMessage(3)\">SITIRE</ion-button>\r\n  <ion-button color=\"#e01802\" class=\"bottone\" style=\"width: 35%\" (click)=\"SendMessage(4)\">INDRACARSI</ion-button>\r\n  <ion-button color=\"#e01802\" class=\"bottone\" style=\"width: 35%\" (click)=\"SendMessage(5)\">ADDENTARE</ion-button>\r\n  <ion-button color=\"#e01802\" class=\"bottone\" style=\"width: 35%\" (click)=\"SendMessage(6)\">MUSO</ion-button>\r\n  <ion-button color=\"#e01802\" class=\"bottone\" style=\"width: 35%\" (click)=\"SendMessage(7)\">CIGOLARE</ion-button>\r\n  <ion-button color=\"#e01802\" class=\"bottone\" style=\"width: 35%\" (click)=\"SendMessage(8)\">MENSOLA</ion-button>\r\n  <ion-button color=\"#e01802\" class=\"bottone\" style=\"width: 35%\" (click)=\"SendMessage(9)\">FERTILE</ion-button>\r\n  <ion-button color=\"#e01802\" class=\"bottone\" style=\"width: 35%\" (click)=\"SendMessage(10)\">MUFFA</ion-button>\r\n  <ion-button color=\"#e01802\" class=\"bottone\" style=\"width: 35%\" (click)=\"SendMessage(11)\">ALTO</ion-button>\r\n  <ion-button color=\"#e01802\" class=\"bottone\" style=\"width: 35%\" (click)=\"SendMessage(12)\">BELLO</ion-button>\r\n  <ion-button color=\"#e01802\" class=\"bottone\" style=\"width: 35%\" (click)=\"SendMessage(13)\">BOCCA</ion-button>\r\n  <ion-button color=\"#e01802\" class=\"bottone\" style=\"width: 35%\" (click)=\"SendMessage(14)\">CASA</ion-button>\r\n  <ion-button color=\"#e01802\" class=\"bottone\" style=\"width: 35%\" (click)=\"SendMessage(15)\">RINGHIARE</ion-button>\r\n  <ion-button color=\"#e01802\" class=\"bottone\" style=\"width: 35%\" (click)=\"SendMessage(16)\">SBADIGLIARE</ion-button>\r\n  <ion-button color=\"#e01802\" class=\"bottone\" style=\"width: 35%\" (click)=\"SendMessage(17)\">SPUTARE</ion-button>\r\n  <ion-button color=\"#e01802\" class=\"bottone\" style=\"width: 35%\" (click)=\"SendMessage(18)\">TESCHIO</ion-button>\r\n  <ion-button color=\"#e01802\" class=\"bottone\" style=\"width: 35%\" (click)=\"SendMessage(19)\">UNO</ion-button>\r\n  <ion-button color=\"#e01802\" class=\"bottone\" style=\"width: 35%\" (click)=\"SendMessage(20)\">MILLE</ion-button>\r\n  <ion-button color=\"#e01802\" class=\"bottone\" style=\"width: 35%\" (click)=\"SendMessage(21)\">INMILLARSI</ion-button>\r\n  <ion-button color=\"#e01802\" class=\"bottone\" style=\"width: 35%\" (click)=\"SendMessage(22)\">PUNTO</ion-button>\r\n  <ion-button color=\"#e01802\" class=\"bottone\" style=\"width: 35%\" (click)=\"SendMessage(23)\">CERCHIO</ion-button>\r\n  <ion-button color=\"#e01802\" class=\"bottone\" style=\"width: 35%\" (click)=\"SendMessage(24)\">STELLE</ion-button>\r\n  <center><ion-button color=\"#e01802\" class=\"stop\" style=\"width: 35%\" (click)=\"SendMessage(1000)\">STOP</ion-button></center>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n\r\n\r\n \r\n\r\n\r\n<!--<center><ion-button color=\"#e01802\" class=\"connessione\" style=\"width: 35%; margin-top: 2%\" (click)=\"EstabilishConnection()\">CONNETTITI</ion-button></center>-->\r\n</ion-content>\r\n";

/***/ }),

/***/ 5355:
/*!*********************************************!*\
  !*** ./src/app/tab4/tab4-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageRoutingModule": () => (/* binding */ Tab4PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3903);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 3631);




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page,
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ 2486:
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageModule": () => (/* binding */ Tab4PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 8259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8750);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 6410);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 3631);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab4-routing.module */ 5355);








let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab4PageRoutingModule
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page]
    })
], Tab4PageModule);



/***/ }),

/***/ 3631:
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4Page": () => (/* binding */ Tab4Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _tab4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page.html?ngResource */ 9184);
/* harmony import */ var _tab4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page.scss?ngResource */ 7432);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 8259);
/* harmony import */ var _js_Socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/Socket */ 8657);



// Use matchMedia to check the user preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
toggleDarkTheme(prefersDark.matches);
// Listen for changes to the prefers-color-scheme media query
prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));
// Add or remove the "dark" class based on if the media query matches
function toggleDarkTheme(shouldAdd) {
    document.body.classList.toggle('dark', shouldAdd);
}


let Tab4Page = class Tab4Page {
    constructor() {
        this.player = null;
        this.isplaying = false;
        this.soc = new _js_Socket__WEBPACK_IMPORTED_MODULE_2__.WebSocketClient();
    }
    SendMessage(i) {
        this.soc.SocketMessage(i);
    }
    EstabilishConnection() {
        this.soc.SocketConnection();
    }
};
Tab4Page.ctorParameters = () => [];
Tab4Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab4',
        template: _tab4_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab4_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab4Page);



/***/ })

}]);
//# sourceMappingURL=src_app_tab4_tab4_module_ts.js.map