"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 4710:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-tab-bar {\n  --border: none;\n  --background: #423c5a80;\n  margin: 16px 20px;\n  border-radius: 12px;\n  -webkit-backdrop-filter: blur(33px);\n          backdrop-filter: blur(33px);\n  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  animation: fadeInBottom 0.5s;\n}\n\n@keyframes fadeInBottom {\n  0% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSwwQ0FBQTtFQUdBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBRUEsNEJBQUE7QUFGSjs7QUFLQTtFQUNJO0lBQ0csVUFBQTtJQUNBLDJCQUFBO0VBRkw7RUFJRTtJQUNHLFVBQUE7SUFDQSx3QkFBQTtFQUZMO0FBQ0YiLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJhciB7XHJcbiAgICAtLWJvcmRlcjogbm9uZTtcclxuICAgIC0tYmFja2dyb3VuZDogIzQyM2M1YTgwO1xyXG4gICAgbWFyZ2luOiAxNnB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMzcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggcmdiKDAgMCAwIC8gMzAlKTtcclxuXHJcbiAgICAvLyBUcmFuc2x1Y2VudCBwb3NpdGlvbmluZyBlZmZlY3RcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuXHJcbiAgICBhbmltYXRpb246IGZhZGVJbkJvdHRvbSAuNXM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluQm90dG9tIHtcclxuICAgIDAlIHtcclxuICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 5230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\r\n  <ion-tab-bar [translucent]=\"true\" slot=\"bottom\">\r\n\r\n    <ion-tab-button tab=\"tab1\">\r\n      <ion-icon src=\"../../assets/book.svg\"></ion-icon>\r\n      <ion-label>Start</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab2\">\r\n      <ion-icon src=\"../../assets/audio.svg\"></ion-icon>\r\n      <ion-label>Audio</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab3\">\r\n      <ion-icon src=\"../../assets/ai.svg\"></ion-icon>\r\n      <ion-label>AI</ion-label>\r\n    </ion-tab-button>\r\n\r\n  <!--<ion-tab-button tab=\"tab4\">\r\n      <ion-icon src=\"../../assets/audio.svg\"></ion-icon>\r\n      <ion-label>Audio</ion-label>\r\n    </ion-tab-button>-->\r\n\r\n  </ion-tab-bar>\r\n</ion-tabs>";

/***/ }),

/***/ 530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3903);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'tab1',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab1/tab1.module */ 2168)).then(m => m.Tab1PageModule)
            },
            {
                path: 'tab2',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab4_tab4_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab4/tab4.module */ 2486)).then(m => m.Tab4PageModule)
            },
            {
                path: 'tab3',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab3_tab3_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab3/tab3.module */ 3746)).then(m => m.Tab3PageModule)
            },
            {
                path: 'tab4',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab2_tab2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab2/tab2.module */ 4608)).then(m => m.Tab2PageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 5564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 8259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8750);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 6410);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 5230);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 4710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 8259);




let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage.ctorParameters = () => [];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map