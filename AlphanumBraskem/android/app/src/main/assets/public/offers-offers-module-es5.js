(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-offers-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/places/offers/offers.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/places/offers/offers.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>My Offers</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"/places/tabs/offers/new\">\n        <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-grid>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\">\n        <ion-list>\n          <ion-item\n            *ngFor=\"let offer of offers\"\n            [routerLink]=\"['/', 'places', 'tabs', 'offers', offer.id]\"\n          >\n            <ion-thumbnail slot=\"start\">\n              <ion-img [src]=\"offer.imageUrl\"></ion-img>\n            </ion-thumbnail>\n            <ion-label>\n              <h1>{{ offer.title }}</h1>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-grid>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/places/offers/offers.module.ts":
/*!************************************************!*\
  !*** ./src/app/places/offers/offers.module.ts ***!
  \************************************************/
/*! exports provided: OffersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageModule", function() { return OffersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offers.page */ "./src/app/places/offers/offers.page.ts");







var routes = [
    {
        path: '',
        component: _offers_page__WEBPACK_IMPORTED_MODULE_6__["OffersPage"]
    }
];
var OffersPageModule = /** @class */ (function () {
    function OffersPageModule() {
    }
    OffersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_6__["OffersPage"]]
        })
    ], OffersPageModule);
    return OffersPageModule;
}());



/***/ }),

/***/ "./src/app/places/offers/offers.page.scss":
/*!************************************************!*\
  !*** ./src/app/places/offers/offers.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvb2ZmZXJzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/places/offers/offers.page.ts":
/*!**********************************************!*\
  !*** ./src/app/places/offers/offers.page.ts ***!
  \**********************************************/
/*! exports provided: OffersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPage", function() { return OffersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../places.service */ "./src/app/places/places.service.ts");



var OffersPage = /** @class */ (function () {
    function OffersPage(placesService) {
        this.placesService = placesService;
    }
    OffersPage.prototype.ngOnInit = function () {
        this.offers = this.placesService.places;
    };
    OffersPage.ctorParameters = function () { return [
        { type: _places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"] }
    ]; };
    OffersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offers',
            template: __webpack_require__(/*! raw-loader!./offers.page.html */ "./node_modules/raw-loader/index.js!./src/app/places/offers/offers.page.html"),
            styles: [__webpack_require__(/*! ./offers.page.scss */ "./src/app/places/offers/offers.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"]])
    ], OffersPage);
    return OffersPage;
}());



/***/ })

}]);
//# sourceMappingURL=offers-offers-module-es5.js.map