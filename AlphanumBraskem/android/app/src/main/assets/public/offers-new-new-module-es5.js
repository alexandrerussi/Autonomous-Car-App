(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-new-new-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/places/offers/new/new.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/places/offers/new/new.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/places/tabs/offers\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>New Offer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/places/offers/new/new.module.ts":
/*!*************************************************!*\
  !*** ./src/app/places/offers/new/new.module.ts ***!
  \*************************************************/
/*! exports provided: NewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPageModule", function() { return NewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new.page */ "./src/app/places/offers/new/new.page.ts");







var routes = [
    {
        path: '',
        component: _new_page__WEBPACK_IMPORTED_MODULE_6__["NewPage"]
    }
];
var NewPageModule = /** @class */ (function () {
    function NewPageModule() {
    }
    NewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_new_page__WEBPACK_IMPORTED_MODULE_6__["NewPage"]]
        })
    ], NewPageModule);
    return NewPageModule;
}());



/***/ }),

/***/ "./src/app/places/offers/new/new.page.scss":
/*!*************************************************!*\
  !*** ./src/app/places/offers/new/new.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvbmV3L25ldy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/places/offers/new/new.page.ts":
/*!***********************************************!*\
  !*** ./src/app/places/offers/new/new.page.ts ***!
  \***********************************************/
/*! exports provided: NewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPage", function() { return NewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewPage = /** @class */ (function () {
    function NewPage() {
    }
    NewPage.prototype.ngOnInit = function () {
    };
    NewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! raw-loader!./new.page.html */ "./node_modules/raw-loader/index.js!./src/app/places/offers/new/new.page.html"),
            styles: [__webpack_require__(/*! ./new.page.scss */ "./src/app/places/offers/new/new.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewPage);
    return NewPage;
}());



/***/ })

}]);
//# sourceMappingURL=offers-new-new-module-es5.js.map