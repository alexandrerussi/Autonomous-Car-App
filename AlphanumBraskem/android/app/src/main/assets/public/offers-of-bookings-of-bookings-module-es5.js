(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-of-bookings-of-bookings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/places/offers/of-bookings/of-bookings.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/places/offers/of-bookings/of-bookings.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/places/tabs/offers\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Offer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button margin color=\"primary\" [routerLink]=\"\">Edit</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/places/offers/of-bookings/of-bookings.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/places/offers/of-bookings/of-bookings.module.ts ***!
  \*****************************************************************/
/*! exports provided: OfBookingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfBookingsPageModule", function() { return OfBookingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _of_bookings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./of-bookings.page */ "./src/app/places/offers/of-bookings/of-bookings.page.ts");







var routes = [
    {
        path: '',
        component: _of_bookings_page__WEBPACK_IMPORTED_MODULE_6__["OfBookingsPage"]
    }
];
var OfBookingsPageModule = /** @class */ (function () {
    function OfBookingsPageModule() {
    }
    OfBookingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_of_bookings_page__WEBPACK_IMPORTED_MODULE_6__["OfBookingsPage"]]
        })
    ], OfBookingsPageModule);
    return OfBookingsPageModule;
}());



/***/ }),

/***/ "./src/app/places/offers/of-bookings/of-bookings.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/places/offers/of-bookings/of-bookings.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYWNlcy9vZmZlcnMvb2YtYm9va2luZ3Mvb2YtYm9va2luZ3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/places/offers/of-bookings/of-bookings.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/places/offers/of-bookings/of-bookings.page.ts ***!
  \***************************************************************/
/*! exports provided: OfBookingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfBookingsPage", function() { return OfBookingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../places.service */ "./src/app/places/places.service.ts");





var OfBookingsPage = /** @class */ (function () {
    function OfBookingsPage(router, navCtrl, placesService) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.placesService = placesService;
    }
    OfBookingsPage.prototype.ngOnInit = function () {
        // this.router.paramMap.subscribe(paramMap => {
        //   if (!paramMap.has('placeId')) {
        //     this.navCtrl.navigateBack('/places/tabs/offers');
        //     return;
        //   }
        //   this.place = this.placesService.getPlace(paramMap.get('placeId'))
        // });
    };
    OfBookingsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _places_service__WEBPACK_IMPORTED_MODULE_4__["PlacesService"] }
    ]; };
    OfBookingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-of-bookings',
            template: __webpack_require__(/*! raw-loader!./of-bookings.page.html */ "./node_modules/raw-loader/index.js!./src/app/places/offers/of-bookings/of-bookings.page.html"),
            styles: [__webpack_require__(/*! ./of-bookings.page.scss */ "./src/app/places/offers/of-bookings/of-bookings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _places_service__WEBPACK_IMPORTED_MODULE_4__["PlacesService"]])
    ], OfBookingsPage);
    return OfBookingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=offers-of-bookings-of-bookings-module-es5.js.map