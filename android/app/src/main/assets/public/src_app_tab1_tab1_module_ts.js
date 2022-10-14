"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 8165:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.logo {\n  margin-top: 75px;\n  text-align: center;\n  animation: fadein 2s;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.backgorund-image {\n  --background: url('SfondoApp.png') 0 0/100% 100% no-repeat;\n}\n\n.box-it {\n  width: 150px;\n  padding: 1rem;\n  background: #423c5a80;\n  color: rgba(255, 255, 255, 0.8);\n  border-radius: 12px;\n  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);\n  -webkit-backdrop-filter: blur(33px);\n          backdrop-filter: blur(33px);\n  position: absolute;\n  margin-top: 15%;\n  margin-left: 5%;\n  animation: fadeInLeft 1s;\n}\n\n@keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n.box-en {\n  width: 150px;\n  padding: 1rem;\n  background: #423c5a80;\n  color: rgba(255, 255, 255, 0.8);\n  border-radius: 12px;\n  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);\n  -webkit-backdrop-filter: blur(33px);\n          backdrop-filter: blur(33px);\n  position: absolute;\n  margin-left: 56%;\n  margin-top: 70%;\n  animation: fadeInRight 1s;\n}\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBRUEsa0JBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUdBO0VBQ0k7SUFBTyxVQUFBO0VBQ1Q7RUFBRTtJQUFPLFVBQUE7RUFHVDtBQUNGOztBQURBO0VBQ0ksMERBQUE7QUFHSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUVBLHdCQUFBO0FBRUo7O0FBQ0E7RUFDSTtJQUNHLFVBQUE7SUFDQSw0QkFBQTtFQUVMO0VBQUU7SUFDRyxVQUFBO0lBQ0Esd0JBQUE7RUFFTDtBQUNGOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLHlCQUFBO0FBQUo7O0FBR0E7RUFDSTtJQUNHLFVBQUE7SUFDQSwyQkFBQTtFQUFMO0VBRUU7SUFDRyxVQUFBO0lBQ0Esd0JBQUE7RUFBTDtBQUNGIiwiZmlsZSI6InRhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cblxuLmxvZ28ge1xuICAgIG1hcmdpbi10b3A6IDc1cHg7XG4gICAgLy9mb250LXNpemU6IDIxcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFuaW1hdGlvbjogZmFkZWluIDJzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxufVxuXG4uYmFja2dvcnVuZC1pbWFnZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kL1Nmb25kb0FwcC5wbmcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cblxuLmJveC1pdCB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYmFja2dyb3VuZDogIzQyM2M1YTgwOyAvL2NvbG9yZSBzZm9uZG9cbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpOyAvL2NvbG9yZSB0ZXN0b1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7IC8vYm9yZGkgYXJyb3RvbmRhdGlcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCByZ2IoMCAwIDAgLyAzMCUpOyAvL29tYnJhIGJveFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzM3B4KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogMTUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcblxuICAgIGFuaW1hdGlvbjogZmFkZUluTGVmdCAxcztcbn1cblxuQGtleWZyYW1lcyBmYWRlSW5MZWZ0IHtcbiAgICAwJSB7XG4gICAgICAgb3BhY2l0eTogMDtcbiAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG59XG5cbi5ib3gtZW4ge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJhY2tncm91bmQ6ICM0MjNjNWE4MDsgLy9jb2xvcmUgc2ZvbmRvXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTsgLy9jb2xvcmUgdGVzdG9cbiAgICBib3JkZXItcmFkaXVzOiAxMnB4OyAvL2JvcmRpIGFycm90b25kYXRpXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggcmdiKDAgMCAwIC8gMzAlKTsgLy9vbWJyYSBib3hcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMzNweCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiA1NiU7XG4gICAgbWFyZ2luLXRvcDogNzAlO1xuXG4gICAgYW5pbWF0aW9uOiBmYWRlSW5SaWdodCAxcztcbn1cblxuQGtleWZyYW1lcyBmYWRlSW5SaWdodCB7XG4gICAgMCUge1xuICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG59Il19 */";

/***/ }),

/***/ 3852:
/*!************************************************!*\
  !*** ./src/app/tab1/tab1.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"backgorund-image\" [fullscreen]=\"true\">\n\n  <style>\n    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');\n  </style>\n\n  <center>\n    <div class=\"logo\">\n      <img src=\"../../assets/icon/dantroide2.png\" width=\"350\">\n    </div>\n  </center>\n\n  <div class=\"box-it\">\n    <span>Benvenuto nell'app Dantroide</span>\n    <p>\n    <span>Qui puoi controllare il robot Dantroide, clicca sul bottone \"AUDIO\" qui giú per accedere alla sezione pulsanti</span>\n  </div>\n\n  <div class=\"box-en\">\n    <span>Welcome to the Dantroide app</span>\n    <p>\n    <span>Here you can control the Dantroide Robot, click on the \"AUDIO\" button below to go to the button page</span>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3903);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 8259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8750);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 6410);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 6923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 6923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page.html?ngResource */ 3852);
/* harmony import */ var _tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss?ngResource */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 8259);




let Tab1Page = class Tab1Page {
    constructor() { }
};
Tab1Page.ctorParameters = () => [];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab1',
        template: _tab1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map