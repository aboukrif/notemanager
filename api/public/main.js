(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/notes-list/notes-list.component */ "./src/app/pages/notes-list/notes-list.component.ts");
/* harmony import */ var _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/main-layout/main-layout.component */ "./src/app/pages/main-layout/main-layout.component.ts");
/* harmony import */ var _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/note-details/note-details.component */ "./src/app/pages/note-details/note-details.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");








var routes = [
    { path: '', component: _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_4__["MainLayoutComponent"], children: [
            { path: '', component: _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_3__["NotesListComponent"] },
            { path: 'new', component: _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_5__["NoteDetailsComponent"] },
            { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
            { path: 'signup', component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] },
            { path: ':id', component: _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_5__["NoteDetailsComponent"] }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'notes-frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_web_request_intereceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/web-request.intereceptor */ "./src/app/shared/web-request.intereceptor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/notes-list/notes-list.component */ "./src/app/pages/notes-list/notes-list.component.ts");
/* harmony import */ var _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/main-layout/main-layout.component */ "./src/app/pages/main-layout/main-layout.component.ts");
/* harmony import */ var _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./note-card/note-card.component */ "./src/app/note-card/note-card.component.ts");
/* harmony import */ var _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/note-details/note-details.component */ "./src/app/pages/note-details/note-details.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _pages_notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_9__["NotesListComponent"],
                _pages_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_10__["MainLayoutComponent"],
                _note_card_note_card_component__WEBPACK_IMPORTED_MODULE_11__["NoteCardComponent"],
                _pages_note_details_note_details_component__WEBPACK_IMPORTED_MODULE_12__["NoteDetailsComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _shared_web_request_intereceptor__WEBPACK_IMPORTED_MODULE_5__["WebRequestInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/note-card/note-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/note-card/note-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #container class=\"note-card-container\">\n\n  <a [routerLink]=\"link\">\n    <div class=\"note-card-content\">\n      <h1 class=\"note-card-title\">{{ title }}</h1>\n      \n      <div #bodyText class=\"note-card-body\">\n        <p>{{ body }}</p>\n  \n        <div #truncator class=\"fade-out-truncation\"></div>\n      </div>\n    </div>\n  </a>\n  \n\n  <div class=\"x-button\" (click)=\"onXButtonClick()\"></div>\n  \n</div>"

/***/ }),

/***/ "./src/app/note-card/note-card.component.scss":
/*!****************************************************!*\
  !*** ./src/app/note-card/note-card.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\n/* GLOBAL STYLES */\nhtml, body {\n  height: 100%;\n  font-size: 18px !important;\n  overflow: hidden !important; }\n.main-section {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  align-items: center; }\n.main-container-box {\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n  overflow: hidden;\n  box-shadow: 0px 8px 25px 7px rgba(0, 0, 0, 0.08);\n  width: 420px; }\n.main-container-box .form-container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    background: white;\n    padding: 50px;\n    overflow-y: auto; }\n.main-container-box .alternate-bar {\n    display: flex;\n    flex-direction: row;\n    padding: 20px 50px;\n    align-items: center;\n    background: #3d4a51; }\n.main-container-box .alternate-bar h2 {\n      font-size: 18px;\n      color: #fafdff;\n      flex-grow: 1; }\n.main-container-box .alternate-bar button {\n      color: white;\n      border-color: #f5f5f5;\n      background-color: transparent; }\n.main-container-box .alternate-bar button:hover {\n        border-color: #8E61E6;\n        background-color: #8E61E6; }\n.note-card-container {\n  position: relative;\n  background: white;\n  border-radius: 5px;\n  box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.068);\n  transition: box-shadow 0.2s ease-out; }\n.note-card-container:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.068); }\n.note-card-container:hover .x-button {\n      opacity: 1;\n      -webkit-transform: scale(1);\n              transform: scale(1);\n      transition-delay: 0.35s; }\n.note-card-container .note-card-content {\n    padding: 25px; }\n.note-card-container .note-card-content .note-card-title {\n      font-size: 22px;\n      font-weight: bold;\n      color: #8E61E6; }\n.note-card-container .note-card-content .note-card-body {\n      position: relative;\n      color: #555;\n      max-height: 80px;\n      overflow: hidden; }\n.note-card-container .note-card-content .note-card-body .fade-out-truncation {\n        position: absolute;\n        pointer-events: none;\n        bottom: 0;\n        height: 50%;\n        width: 100%;\n        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 50%, white 100%); }\n.x-button {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  height: 34px;\n  width: 34px;\n  background-color: #fff3f3;\n  background-image: url('delete_icon.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n  border-radius: 4px;\n  transition: opacity 0.2s ease-out, -webkit-transform 0.2s ease-out;\n  transition: opacity 0.2s ease-out, transform 0.2s ease-out;\n  transition: opacity 0.2s ease-out, transform 0.2s ease-out, -webkit-transform 0.2s ease-out;\n  opacity: 0;\n  -webkit-transform: scale(0.35);\n          transform: scale(0.35); }\n.x-button:hover {\n    background-color: #ffe9e9; }\n.x-button:active {\n    background-color: #ffdfdf; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZS1jYXJkL0M6XFxVc2Vyc1xcYm91YXNcXERvY3VtZW50c1xcUHJvamV0XFxub3RlbWFuYWdlclxcZnJvbnRlbmQvc3JjXFxtYWluLXN0eWxlcy5zY3NzIiwic3JjL2FwcC9ub3RlLWNhcmQvQzpcXFVzZXJzXFxib3Vhc1xcRG9jdW1lbnRzXFxQcm9qZXRcXG5vdGVtYW5hZ2VyXFxmcm9udGVuZC9zcmNcXGFwcFxcbm90ZS1jYXJkXFxub3RlLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EscUVBQVk7QUErQlosa0JBQUE7QUFFQTtFQUNJLFlBQVk7RUFHWiwwQkFBMEI7RUFFMUIsMkJBQTJCLEVBQUE7QUFHL0I7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFHWix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7QUFHdkI7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBRXRCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFFaEIsZ0RBQXVDO0VBQ3ZDLFlBQVksRUFBQTtBQVJoQjtJQVdRLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGlCQUFpQjtJQUVqQixhQUFhO0lBQ2IsZ0JBQWdCLEVBQUE7QUFqQnhCO0lBcUJRLGFBQWE7SUFDYixtQkFBbUI7SUFFbkIsa0JBQWtCO0lBRWxCLG1CQUFtQjtJQUVuQixtQkF0RU0sRUFBQTtBQTBDZDtNQStCWSxlQUFlO01BQ2YsY0FBeUI7TUFDekIsWUFBWSxFQUFBO0FBakN4QjtNQXFDWSxZQUFZO01BQ1oscUJBQXFCO01BQ3JCLDZCQUE2QixFQUFBO0FBdkN6QztRQTBDZ0IscUJBM0ZBO1FBNEZBLHlCQTVGQSxFQUFBO0FDTmhCO0VBQ0ksa0JBQWtCO0VBRWxCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFFbEIsaURBQXVDO0VBQ3ZDLG9DQUFvQyxFQUFBO0FBUHhDO0lBV1EsZUFBZTtJQUNmLGdEQUFzQyxFQUFBO0FBWjlDO01BZVksVUFBVTtNQUNWLDJCQUFtQjtjQUFuQixtQkFBbUI7TUFFbkIsdUJBQXVCLEVBQUE7QUFsQm5DO0lBdUJRLGFBQWEsRUFBQTtBQXZCckI7TUEwQlksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixjRHRCSSxFQUFBO0FDTmhCO01BZ0NZLGtCQUFrQjtNQUVsQixXQUFXO01BR1gsZ0JBQWdCO01BQ2hCLGdCQUFnQixFQUFBO0FBdEM1QjtRQXlDZ0Isa0JBQWtCO1FBRWxCLG9CQUFvQjtRQUVwQixTQUFTO1FBRVQsV0FBVztRQUNYLFdBQVc7UUFDWCwyR0FBMkYsRUFBQTtBQU0zRztFQUNJLGtCQUFrQjtFQUdsQixTQUFTO0VBR1QsV0FBVztFQUVYLFlBQVk7RUFDWixXQUFXO0VBRVgseUJEekRlO0VDMERmLHdDQUFxRDtFQUNyRCw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBRTNCLGtCQUFrQjtFQUVsQixrRUFBMEQ7RUFBMUQsMERBQTBEO0VBQTFELDJGQUEwRDtFQUcxRCxVQUFVO0VBQ1YsOEJBQXNCO1VBQXRCLHNCQUFzQixFQUFBO0FBdkIxQjtJQTBCUSx5QkFBd0MsRUFBQTtBQTFCaEQ7SUErQlEseUJBQXdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ub3RlLWNhcmQvbm90ZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2hhbmdpbmcgYnVsbWEgdmFyaWFibGVzIGFuZCBhZGRpbmcgZ2xvYmFsIHN0eWxlc1xuXG5AY2hhcnNldCBcInV0Zi04XCI7XG5cbi8vIEltcG9ydCBhIEdvb2dsZSBGb250XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwJyk7XG5cbi8vIFNldCB5b3VyIGJyYW5kIGNvbG9yc1xuJHB1cnBsZTogIzhFNjFFNjtcbiRwaW5rOiAjNUUzODlBO1xuJGJsdWU6ICNDMkE0RkM7XG5cbiRsaWdodC1yZWQ6ICNmZmYzZjM7XG5cbiRsaWdodDogI2ZhZmNmZjtcbiRkYXJrOiAjM2Q0YTUxO1xuXG4kZ3JlZW46ICM4RTYxRTY7XG5cblxuLy8gVXBkYXRlIEJ1bG1hJ3MgZ2xvYmFsIHZhcmlhYmxlc1xuJGZhbWlseS1zYW5zLXNlcmlmOiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuJHByaW1hcnk6ICRwdXJwbGU7XG4kbGluazogJGJsdWU7XG5cbi8vIFVwZGF0ZSBzb21lIG9mIEJ1bG1hJ3MgY29tcG9uZW50IHZhcmlhYmxlc1xuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0O1xuJGNvbnRyb2wtYm9yZGVyLXdpZHRoOiAycHg7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNWZhO1xuJGlucHV0LXNoYWRvdzogbm9uZTtcblxuXG5cblxuXG4vKiBHTE9CQUwgU1RZTEVTICovXG5cbmh0bWwsIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC8vIFNldCB0aGUgZGVmYXVsdCBmb250IHNpemUgdG8gMThweFxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4ubWFpbi1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLy8gQ2VudGVyIHRoZSBjaGlsZHJlbiBlbGVtZW50c1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tYWluLWNvbnRhaW5lci1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAyNXB4IDdweCByZ2JhKGJsYWNrLCAwLjA4KTtcbiAgICB3aWR0aDogNDIwcHg7XG5cbiAgICAuZm9ybS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuXG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxuXG4gICAgLmFsdGVybmF0ZS1iYXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgICAgIHBhZGRpbmc6IDIwcHggNTBweDtcblxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGJhY2tncm91bmQ6ICRkYXJrO1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjUwLCAyNTMsIDI1NSk7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0ICcuLi8uLi9tYWluLXN0eWxlcy5zY3NzJztcblxuLm5vdGUtY2FyZC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTVweCAycHggcmdiYShibGFjaywgMC4wNjgpO1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycyBlYXNlLW91dDtcblxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggNHB4IHJnYmEoYmxhY2ssIDAuMDY4KTtcblxuICAgICAgICAueC1idXR0b24ge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG5cbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMzVzO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5ub3RlLWNhcmQtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICAgIFxuICAgICAgICAubm90ZS1jYXJkLXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6ICRwdXJwbGU7XG4gICAgICAgIH1cblxuICAgICAgICAubm90ZS1jYXJkLWJvZHkge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICBjb2xvcjogIzU1NTtcblxuICAgICAgICAgICAgLy8gVGhlIG1heGltdW0gaGVpZ2h0IGJlZm9yZSBpdCBpcyB0cnVuY2F0ZWRcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgICAgICAuZmFkZS1vdXQtdHJ1bmNhdGlvbiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSh3aGl0ZSwgMCkgMCUsIHJnYmEod2hpdGUsIDAuOCkgNTAlLCB3aGl0ZSAxMDAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLngtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAvLyAxMnB4IGZyb20gdGhlIHRvcFxuICAgIHRvcDogMTJweDtcblxuICAgIC8vIDEycHggZnJvbSB0aGUgcmlnaHQgc2lkZVxuICAgIHJpZ2h0OiAxMnB4O1xuXG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIHdpZHRoOiAzNHB4O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LXJlZDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9kZWxldGVfaWNvbi5zdmcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XG5cbiAgICAvLyB0aGUgYnV0dG9uIGlzIGhpZGRlbiBieSBkZWZhdWx0XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMzUpO1xuXG4gICAgJjpob3ZlciB7IFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGxpZ2h0LXJlZCwgMiUpO1xuICAgIH1cblxuICAgIC8vIG9uIGNsaWNrXG4gICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGxpZ2h0LXJlZCwgNCUpO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/note-card/note-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/note-card/note-card.component.ts ***!
  \**************************************************/
/*! exports provided: NoteCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteCardComponent", function() { return NoteCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NoteCardComponent = /** @class */ (function () {
    function NoteCardComponent(renderer) {
        this.renderer = renderer;
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NoteCardComponent.prototype.ngOnInit = function () {
        // work out if there is a text overflow and if not, then hide the truncator
        var style = window.getComputedStyle(this.bodyText.nativeElement, null);
        var viewableHeight = parseInt(style.getPropertyValue("height"), 10);
        if (this.bodyText.nativeElement.scrollHeight > viewableHeight) {
            // if there is a text overflow, show the fade out truncator
            this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
        }
        else {
            // else (there is a text overflow), hide the fade out truncator
            this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
        }
    };
    NoteCardComponent.prototype.onXButtonClick = function () {
        this.deleteEvent.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NoteCardComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NoteCardComponent.prototype, "body", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NoteCardComponent.prototype, "link", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('delete'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NoteCardComponent.prototype, "deleteEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('truncator'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NoteCardComponent.prototype, "truncator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bodyText'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NoteCardComponent.prototype, "bodyText", void 0);
    NoteCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-note-card',
            template: __webpack_require__(/*! ./note-card.component.html */ "./src/app/note-card/note-card.component.html"),
            styles: [__webpack_require__(/*! ./note-card.component.scss */ "./src/app/note-card/note-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], NoteCardComponent);
    return NoteCardComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-section\">\n\n  <div class=\"main-container-box\">\n\n    <div class=\"form-container\">\n\n      <h1 class=\"title\">Log in</h1>\n\n      <form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\">\n\n        <div class=\"field\">\n          <label class=\"label\">Email</label>\n          <div class=\"control\">\n            <input\n              type=\"email\"\n              required\n              minlength=\"5\"\n              email\n              class=\"input\"\n              name=\"email\"\n              [ngModel]=\"email\"\n              placeholder=\"e.g. alexsmith@gmail.com\">\n          </div>\n        </div>\n\n        <div class=\"field\">\n          <label class=\"label\">Password</label>\n          <div class=\"control\">\n            <input\n              type=\"password\"\n              required\n              minlength=\"8\"\n              class=\"input\"\n              name=\"password\"\n              [ngModel]=\"password\"\n              placeholder=\"enter a strong password\">\n          </div>\n        </div>\n\n        <div class=\"field\">\n          <div class=\"control\">\n            <button type=\"submit\" style=\"margin-top: 28px\" [disabled]=\"!loginForm.valid\" class=\"button is-primary has-text-white is-fullwidth\">Log in</button>\n          </div>\n        </div>\n        \n      </form>\n    </div>\n    \n    <div class=\"alternate-bar\">\n      <h2>Don't have an account?</h2>\n      <button class=\"button\" routerLink=\"/signup\">Sign up</button>\n    </div>\n    \n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        this.authService.login(form.value.email, form.value.password).subscribe(function () {
            _this.router.navigateByUrl("/");
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/main-layout/main-layout.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/main-layout/main-layout.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-box\">\n\n  <div class=\"top-bar\">\n    <h1>Note Manager</h1>\n  </div>\n\n\n  <div class=\"page-content\">\n    <router-outlet></router-outlet>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/main-layout/main-layout.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/main-layout/main-layout.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\n/* GLOBAL STYLES */\nhtml, body {\n  height: 100%;\n  font-size: 18px !important;\n  overflow: hidden !important; }\n.main-section {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  align-items: center; }\n.main-container-box {\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n  overflow: hidden;\n  box-shadow: 0px 8px 25px 7px rgba(0, 0, 0, 0.08);\n  width: 420px; }\n.main-container-box .form-container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    background: white;\n    padding: 50px;\n    overflow-y: auto; }\n.main-container-box .alternate-bar {\n    display: flex;\n    flex-direction: row;\n    padding: 20px 50px;\n    align-items: center;\n    background: #3d4a51; }\n.main-container-box .alternate-bar h2 {\n      font-size: 18px;\n      color: #fafdff;\n      flex-grow: 1; }\n.main-container-box .alternate-bar button {\n      color: white;\n      border-color: #f5f5f5;\n      background-color: transparent; }\n.main-container-box .alternate-bar button:hover {\n        border-color: #8E61E6;\n        background-color: #8E61E6; }\n.layout-box {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden; }\n.layout-box .page-content {\n    flex-grow: 1;\n    overflow-y: scroll; }\n.top-bar {\n  width: 100%;\n  height: 68px;\n  background: linear-gradient(to right, #5E389A, #C2A4FC);\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  align-items: center; }\n.top-bar h1 {\n    color: white;\n    font-size: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi1sYXlvdXQvQzpcXFVzZXJzXFxib3Vhc1xcRG9jdW1lbnRzXFxQcm9qZXRcXG5vdGVtYW5hZ2VyXFxmcm9udGVuZC9zcmNcXG1haW4tc3R5bGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21haW4tbGF5b3V0L0M6XFxVc2Vyc1xcYm91YXNcXERvY3VtZW50c1xcUHJvamV0XFxub3RlbWFuYWdlclxcZnJvbnRlbmQvc3JjXFxhcHBcXHBhZ2VzXFxtYWluLWxheW91dFxcbWFpbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EscUVBQVk7QUErQlosa0JBQUE7QUFFQTtFQUNJLFlBQVk7RUFHWiwwQkFBMEI7RUFFMUIsMkJBQTJCLEVBQUE7QUFHL0I7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFHWix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7QUFHdkI7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBRXRCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFFaEIsZ0RBQXVDO0VBQ3ZDLFlBQVksRUFBQTtBQVJoQjtJQVdRLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGlCQUFpQjtJQUVqQixhQUFhO0lBQ2IsZ0JBQWdCLEVBQUE7QUFqQnhCO0lBcUJRLGFBQWE7SUFDYixtQkFBbUI7SUFFbkIsa0JBQWtCO0lBRWxCLG1CQUFtQjtJQUVuQixtQkF0RU0sRUFBQTtBQTBDZDtNQStCWSxlQUFlO01BQ2YsY0FBeUI7TUFDekIsWUFBWSxFQUFBO0FBakN4QjtNQXFDWSxZQUFZO01BQ1oscUJBQXFCO01BQ3JCLDZCQUE2QixFQUFBO0FBdkN6QztRQTBDZ0IscUJBM0ZBO1FBNEZBLHlCQTVGQSxFQUFBO0FDTmhCO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBRVosZ0JBQWdCLEVBQUE7QUFMcEI7SUFRUSxZQUFZO0lBQ1osa0JBQWtCLEVBQUE7QUFJMUI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVEQUFtRDtFQUVuRCxnREFBdUM7RUFFdkMsYUFBYTtFQUNiLGNBQWM7RUFHZCx1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7QUFadkI7SUFlUSxZQUFZO0lBQ1osZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDaGFuZ2luZyBidWxtYSB2YXJpYWJsZXMgYW5kIGFkZGluZyBnbG9iYWwgc3R5bGVzXG5cbkBjaGFyc2V0IFwidXRmLThcIjtcblxuLy8gSW1wb3J0IGEgR29vZ2xlIEZvbnRcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDAnKTtcblxuLy8gU2V0IHlvdXIgYnJhbmQgY29sb3JzXG4kcHVycGxlOiAjOEU2MUU2O1xuJHBpbms6ICM1RTM4OUE7XG4kYmx1ZTogI0MyQTRGQztcblxuJGxpZ2h0LXJlZDogI2ZmZjNmMztcblxuJGxpZ2h0OiAjZmFmY2ZmO1xuJGRhcms6ICMzZDRhNTE7XG5cbiRncmVlbjogIzhFNjFFNjtcblxuXG4vLyBVcGRhdGUgQnVsbWEncyBnbG9iYWwgdmFyaWFibGVzXG4kZmFtaWx5LXNhbnMtc2VyaWY6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XG4kcHJpbWFyeTogJHB1cnBsZTtcbiRsaW5rOiAkYmx1ZTtcblxuLy8gVXBkYXRlIHNvbWUgb2YgQnVsbWEncyBjb21wb25lbnQgdmFyaWFibGVzXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQ7XG4kY29udHJvbC1ib3JkZXItd2lkdGg6IDJweDtcbiRpbnB1dC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuJGlucHV0LWJhY2tncm91bmQtY29sb3I6ICNmM2Y1ZmE7XG4kaW5wdXQtc2hhZG93OiBub25lO1xuXG5cblxuXG5cbi8qIEdMT0JBTCBTVFlMRVMgKi9cblxuaHRtbCwgYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSB0byAxOHB4XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG5cbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAvLyBDZW50ZXIgdGhlIGNoaWxkcmVuIGVsZW1lbnRzXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1haW4tY29udGFpbmVyLWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDI1cHggN3B4IHJnYmEoYmxhY2ssIDAuMDgpO1xuICAgIHdpZHRoOiA0MjBweDtcblxuICAgIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG5cbiAgICAuYWx0ZXJuYXRlLWJhciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgcGFkZGluZzogMjBweCA1MHB4O1xuXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgYmFja2dyb3VuZDogJGRhcms7XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgY29sb3I6IHJnYigyNTAsIDI1MywgMjU1KTtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNmNWY1ZjU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uL21haW4tc3R5bGVzLnNjc3MnO1xuXG4ubGF5b3V0LWJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAucGFnZS1jb250ZW50IHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgfVxufVxuXG4udG9wLWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2OHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHBpbmssICRibHVlKTtcblxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYShibGFjaywgMC4xNSk7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtc2hyaW5rOiAwOyAvLyB0byBwcmV2ZW50IHRoZSB0b3AgYmFyIGZyb20gc2hyaW5raW5nXG5cbiAgICAvLyBDZW50ZXIgY2hpbGQgZWxlbWVudCAodGhlIGhlYWRpbmcpXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGgxIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/main-layout/main-layout.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/main-layout/main-layout.component.ts ***!
  \************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainLayoutComponent = /** @class */ (function () {
    function MainLayoutComponent() {
    }
    MainLayoutComponent.prototype.ngOnInit = function () {
    };
    MainLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-layout',
            template: __webpack_require__(/*! ./main-layout.component.html */ "./src/app/pages/main-layout/main-layout.component.html"),
            styles: [__webpack_require__(/*! ./main-layout.component.scss */ "./src/app/pages/main-layout/main-layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainLayoutComponent);
    return MainLayoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/note-details/note-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/note-details/note-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n\n  <form #noteForm=\"ngForm\" (ngSubmit)=\"onSubmit(noteForm)\">\n\n    <div class=\"field\">\n      <label class=\"label\">Title</label>\n      <div class=\"control\">\n        <input type=\"text\" name=\"title\" [ngModel]=\"note.title\" required class=\"input\">\n      </div>\n    </div>\n\n    <br>\n\n    <div class=\"field\">\n      <label class=\"label\">Body</label>\n      <div class=\"control\">\n        <textarea class=\"textarea\" name=\"body\" [ngModel]=\"note.body\"></textarea>\n      </div>\n    </div>\n\n    <div class=\"field is-grouped is-pulled-right\">\n      <div class=\"control\">\n        <button class=\"button is-text\" type=\"button\" (click)=\"cancel()\">Cancel</button>\n      </div>\n      <div class=\"control\">\n        <button class=\"button is-success\" type=\"submit\" [disabled]=\"!noteForm.valid\">Save</button>\n      </div>\n    </div>\n\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/note-details/note-details.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/note-details/note-details.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  max-width: 500px;\n  margin: auto;\n  margin-top: 50px; }\n\ninput.ng-invalid.ng-touched, textarea.ng-invalid.ng-touched {\n  border-color: red; }\n\ninput.ng-invalid.ng-touched:focus, textarea.ng-invalid.ng-touched:focus {\n    box-shadow: 0px 0px 0px 2px rgba(255, 0, 0, 0.1); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90ZS1kZXRhaWxzL0M6XFxVc2Vyc1xcYm91YXNcXERvY3VtZW50c1xcUHJvamV0XFxub3RlbWFuYWdlclxcZnJvbnRlbmQvc3JjXFxhcHBcXHBhZ2VzXFxub3RlLWRldGFpbHNcXG5vdGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUVoQixZQUFZO0VBRVosZ0JBQWdCLEVBQUE7O0FBR3BCO0VBR1EsaUJBQWlCLEVBQUE7O0FBSHpCO0lBTVksZ0RBQW9DLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ub3RlLWRldGFpbHMvbm90ZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuXG4gICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuaW5wdXQsIHRleHRhcmVhIHtcblxuICAgICYubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XG5cbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAycHggcmdiYShyZWQsIDAuMSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/note-details/note-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/note-details/note-details.component.ts ***!
  \**************************************************************/
/*! exports provided: NoteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteDetailsComponent", function() { return NoteDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_note_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/note.model */ "./src/app/shared/note.model.ts");
/* harmony import */ var src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/notes.service */ "./src/app/shared/notes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NoteDetailsComponent = /** @class */ (function () {
    function NoteDetailsComponent(notesService, router, route) {
        this.notesService = notesService;
        this.router = router;
        this.route = route;
    }
    NoteDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // we want find out if we are creating a new note or editing an existing one
        this.route.params.subscribe(function (params) {
            _this.note = new src_app_shared_note_model__WEBPACK_IMPORTED_MODULE_2__["Note"]();
            if (params.id) {
                _this.notesService.get(params.id).subscribe(function (note) {
                    _this.note = note;
                });
                _this.new = false;
            }
            else {
                _this.new = true;
            }
        });
    };
    NoteDetailsComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (this.new) {
            // we should save the note
            this.notesService.add(form.value).subscribe(function (newNote) {
                _this.router.navigateByUrl('/');
            });
        }
        else {
            this.note.title = form.value.title;
            this.note.body = form.value.body;
            this.notesService.update(this.note).subscribe(function () {
                // this code will run once the note has been updated
                _this.router.navigateByUrl('/');
            });
        }
    };
    NoteDetailsComponent.prototype.cancel = function () {
        this.router.navigateByUrl('/');
    };
    NoteDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-note-details',
            template: __webpack_require__(/*! ./note-details.component.html */ "./src/app/pages/note-details/note-details.component.html"),
            styles: [__webpack_require__(/*! ./note-details.component.scss */ "./src/app/pages/note-details/note-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_3__["NotesService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], NoteDetailsComponent);
    return NoteDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/notes-list/notes-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/notes-list/notes-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n\n  <div class=\"search-bar-container\">\n    <div class=\"field\">\n      <p class=\"control has-icons-left\">\n        <input #filterInput class=\"input\" type=\"text\" (keyup)=\"filter($event.target.value)\" placeholder=\"Filter\">\n        <span class=\"icon is-small is-left\">\n          <i class=\"fas fa-search\"></i>\n        </span>\n      </p>\n    </div>\n\n  </div>\n\n\n  <div class=\"notes-list\" [@listAnim]>\n    <app-note-card\n      *ngFor=\"let note of filteredNotes;\"\n      [link]=\"note._id\"\n      [@itemAnim]\n      (delete)=\"deleteNote(note)\"\n      [title]=\" note.title\"\n      [body]=\"note.body\"></app-note-card>\n  </div>\n\n  <button class=\"button floating-add-button is-primary\" routerLink=\"new\">+ Add</button>\n  <button class=\"button floating-logout-button is-danger has-text-white \" (click)=\"onLogoutButtonClicked()\">Log out</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/pages/notes-list/notes-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/notes-list/notes-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Nunito:400,700\");\n/* GLOBAL STYLES */\nhtml, body {\n  height: 100%;\n  font-size: 18px !important;\n  overflow: hidden !important; }\n.main-section {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  align-items: center; }\n.main-container-box {\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n  overflow: hidden;\n  box-shadow: 0px 8px 25px 7px rgba(0, 0, 0, 0.08);\n  width: 420px; }\n.main-container-box .form-container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    background: white;\n    padding: 50px;\n    overflow-y: auto; }\n.main-container-box .alternate-bar {\n    display: flex;\n    flex-direction: row;\n    padding: 20px 50px;\n    align-items: center;\n    background: #3d4a51; }\n.main-container-box .alternate-bar h2 {\n      font-size: 18px;\n      color: #fafdff;\n      flex-grow: 1; }\n.main-container-box .alternate-bar button {\n      color: white;\n      border-color: #f5f5f5;\n      background-color: transparent; }\n.main-container-box .alternate-bar button:hover {\n        border-color: #8E61E6;\n        background-color: #8E61E6; }\n.main-container {\n  display: flex;\n  flex-direction: column;\n  max-width: 500px;\n  margin: auto;\n  padding-top: 50px; }\n.notes-list {\n  margin-top: 35px;\n  margin-bottom: 70px; }\napp-note-card {\n  display: block;\n  margin-bottom: 25px; }\n.floating-add-button {\n  position: fixed;\n  bottom: 0;\n  width: 500px;\n  border-radius: 0;\n  box-shadow: 0px 0px 15px 5px rgba(142, 97, 230, 0.2);\n  height: 68px;\n  font-size: 24px; }\n.floating-logout-button {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 100px;\n  border-radius: 0;\n  box-shadow: 0px 0px 15px 5px rgba(142, 97, 230, 0.2);\n  height: 40px;\n  font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90ZXMtbGlzdC9DOlxcVXNlcnNcXGJvdWFzXFxEb2N1bWVudHNcXFByb2pldFxcbm90ZW1hbmFnZXJcXGZyb250ZW5kL3NyY1xcbWFpbi1zdHlsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvbm90ZXMtbGlzdC9DOlxcVXNlcnNcXGJvdWFzXFxEb2N1bWVudHNcXFByb2pldFxcbm90ZW1hbmFnZXJcXGZyb250ZW5kL3NyY1xcYXBwXFxwYWdlc1xcbm90ZXMtbGlzdFxcbm90ZXMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxxRUFBWTtBQStCWixrQkFBQTtBQUVBO0VBQ0ksWUFBWTtFQUdaLDBCQUEwQjtFQUUxQiwyQkFBMkIsRUFBQTtBQUcvQjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUdaLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtBQUd2QjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFFdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUVoQixnREFBdUM7RUFDdkMsWUFBWSxFQUFBO0FBUmhCO0lBV1EsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBRWpCLGFBQWE7SUFDYixnQkFBZ0IsRUFBQTtBQWpCeEI7SUFxQlEsYUFBYTtJQUNiLG1CQUFtQjtJQUVuQixrQkFBa0I7SUFFbEIsbUJBQW1CO0lBRW5CLG1CQXRFTSxFQUFBO0FBMENkO01BK0JZLGVBQWU7TUFDZixjQUF5QjtNQUN6QixZQUFZLEVBQUE7QUFqQ3hCO01BcUNZLFlBQVk7TUFDWixxQkFBcUI7TUFDckIsNkJBQTZCLEVBQUE7QUF2Q3pDO1FBMENnQixxQkEzRkE7UUE0RkEseUJBNUZBLEVBQUE7QUNOaEI7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBRXRCLGdCQUFnQjtFQUVoQixZQUFZO0VBRVosaUJBQWlCLEVBQUE7QUFJckI7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7QUFHdkI7RUFDSSxjQUFjO0VBQ2QsbUJBQW1CLEVBQUE7QUFHdkI7RUFDSSxlQUFlO0VBQ2YsU0FBUztFQUNULFlBQVk7RUFDWixnQkFBZ0I7RUFFaEIsb0REdEJZO0VDd0JaLFlBQVk7RUFDWixlQUFlLEVBQUE7QUFHbkI7RUFDSSxlQUFlO0VBQ2YsU0FBUztFQUNULFFBQU87RUFDUCxZQUFZO0VBQ1osZ0JBQWdCO0VBRWhCLG9ERG5DWTtFQ3FDWixZQUFZO0VBQ1osZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm90ZXMtbGlzdC9ub3Rlcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2hhbmdpbmcgYnVsbWEgdmFyaWFibGVzIGFuZCBhZGRpbmcgZ2xvYmFsIHN0eWxlc1xuXG5AY2hhcnNldCBcInV0Zi04XCI7XG5cbi8vIEltcG9ydCBhIEdvb2dsZSBGb250XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwJyk7XG5cbi8vIFNldCB5b3VyIGJyYW5kIGNvbG9yc1xuJHB1cnBsZTogIzhFNjFFNjtcbiRwaW5rOiAjNUUzODlBO1xuJGJsdWU6ICNDMkE0RkM7XG5cbiRsaWdodC1yZWQ6ICNmZmYzZjM7XG5cbiRsaWdodDogI2ZhZmNmZjtcbiRkYXJrOiAjM2Q0YTUxO1xuXG4kZ3JlZW46ICM4RTYxRTY7XG5cblxuLy8gVXBkYXRlIEJ1bG1hJ3MgZ2xvYmFsIHZhcmlhYmxlc1xuJGZhbWlseS1zYW5zLXNlcmlmOiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuJHByaW1hcnk6ICRwdXJwbGU7XG4kbGluazogJGJsdWU7XG5cbi8vIFVwZGF0ZSBzb21lIG9mIEJ1bG1hJ3MgY29tcG9uZW50IHZhcmlhYmxlc1xuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0O1xuJGNvbnRyb2wtYm9yZGVyLXdpZHRoOiAycHg7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiRpbnB1dC1iYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNWZhO1xuJGlucHV0LXNoYWRvdzogbm9uZTtcblxuXG5cblxuXG4vKiBHTE9CQUwgU1RZTEVTICovXG5cbmh0bWwsIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC8vIFNldCB0aGUgZGVmYXVsdCBmb250IHNpemUgdG8gMThweFxuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4ubWFpbi1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLy8gQ2VudGVyIHRoZSBjaGlsZHJlbiBlbGVtZW50c1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tYWluLWNvbnRhaW5lci1ib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAyNXB4IDdweCByZ2JhKGJsYWNrLCAwLjA4KTtcbiAgICB3aWR0aDogNDIwcHg7XG5cbiAgICAuZm9ybS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuXG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxuXG4gICAgLmFsdGVybmF0ZS1iYXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgICAgIHBhZGRpbmc6IDIwcHggNTBweDtcblxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIGJhY2tncm91bmQ6ICRkYXJrO1xuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjUwLCAyNTMsIDI1NSk7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi9tYWluLXN0eWxlcy5zY3NzJztcblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuXG4gICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG5cbn1cblxuLm5vdGVzLWxpc3Qge1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbn1cblxuYXBwLW5vdGUtY2FyZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmZsb2F0aW5nLWFkZC1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggNXB4IHJnYmEoJHB1cnBsZSwgMC4yKTtcblxuICAgIGhlaWdodDogNjhweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5mbG9hdGluZy1sb2dvdXQtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OjA7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggNXB4IHJnYmEoJHB1cnBsZSwgMC4yKTtcblxuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/notes-list/notes-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/notes-list/notes-list.component.ts ***!
  \**********************************************************/
/*! exports provided: NotesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesListComponent", function() { return NotesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/notes.service */ "./src/app/shared/notes.service.ts");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");






var NotesListComponent = /** @class */ (function () {
    function NotesListComponent(notesService, route, router, authService) {
        this.notesService = notesService;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.notes = new Array();
        this.filteredNotes = new Array();
    }
    NotesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // we want to retrieve all notes from NotesService
        this.notesService.getAll().subscribe(function (notes) {
            _this.notes = notes;
            console.log(_this.notes);
            _this.filter('');
        });
    };
    NotesListComponent.prototype.deleteNote = function (note) {
        var _this = this;
        this.notesService.delete(note._id).subscribe(function (removedNoteDoc) {
            // remove the note from the notes array
            _this.notes.splice(_this.notes.indexOf(note), 1);
            _this.filter(_this.filterInputElRef.nativeElement.value);
        });
    };
    NotesListComponent.prototype.filter = function (query) {
        var _this = this;
        query = query.toLowerCase().trim();
        var allResults = new Array();
        // split up the search query into individual words
        var terms = query.split(' '); // split on spaces
        // remove duplicate search terms
        terms = this.removeDuplicates(terms);
        // compile all relevant results into the allResults array
        terms.forEach(function (term) {
            var results = _this.relevantNotes(term);
            // append results to the allResults array
            allResults = allResults.concat(results);
        });
        // allResults will include duplicate notes
        // because a particular note can be the result of many search terms
        // but we don't want to show the same note multiple times on the UI
        // so we first must remove the duplicates
        var uniqueResults = this.removeDuplicates(allResults);
        this.filteredNotes = uniqueResults;
        // now sort by relevancy
        this.sortByRelevancy(allResults);
    };
    NotesListComponent.prototype.removeDuplicates = function (arr) {
        var uniqueResults = new Set();
        // loop through the input array and add the items to the set
        arr.forEach(function (e) { return uniqueResults.add(e); });
        return Array.from(uniqueResults);
    };
    NotesListComponent.prototype.relevantNotes = function (query) {
        query = query.toLowerCase().trim();
        var relevantNotes = this.notes.filter(function (note) {
            if (note.title && note.title.toLowerCase().includes(query)) {
                return true;
            }
            if (note.body && note.body.toLowerCase().includes(query)) {
                return true;
            }
            return false;
        });
        return relevantNotes;
    };
    NotesListComponent.prototype.sortByRelevancy = function (searchResults) {
        // This method will calculate the relevancy of a note based on the number of times it appears in
        // the search results
        var noteCountObj = {}; // format - key:value => NoteId:number (note object id : count)
        searchResults.forEach(function (note) {
            if (noteCountObj[note._id]) {
                noteCountObj[note._id] += 1;
            }
            else {
                noteCountObj[note._id] = 1;
            }
        });
        this.filteredNotes = this.filteredNotes.sort(function (a, b) {
            var aCount = noteCountObj[a._id];
            var bCount = noteCountObj[b._id];
            return bCount - aCount;
        });
    };
    NotesListComponent.prototype.onLogoutButtonClicked = function () {
        this.authService.logout();
        console.log("Logout successully !");
        this.router.navigate(['/login']);
        /*this.authService.logout().subscribe((res : any) => {
          console.log("Logout successully !");
          this.router.navigate(['']);
        });*/
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filterInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NotesListComponent.prototype, "filterInputElRef", void 0);
    NotesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notes-list',
            template: __webpack_require__(/*! ./notes-list.component.html */ "./src/app/pages/notes-list/notes-list.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('itemAnim', [
                    // ENTRY ANIMATION
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('void => *', [
                        // Initial state
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                            height: 0,
                            opacity: 0,
                            transform: 'scale(0.85)',
                            'margin-bottom': 0,
                            // we have to 'expand' out the padding properties
                            paddingTop: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingRight: 0,
                        }),
                        // we first want to animate the spacing (which includes height and margin)
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('50ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                            height: '*',
                            'margin-bottom': '*',
                            paddingTop: '*',
                            paddingBottom: '*',
                            paddingLeft: '*',
                            paddingRight: '*',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(68)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => void', [
                        // first scale up
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(50, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                            transform: 'scale(1.05)'
                        })),
                        // then scale down back to normal size while beginning to fade out
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(50, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                            transform: 'scale(1)',
                            opacity: 0.75
                        })),
                        // scale down and fade out completely
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('120ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                            transform: 'scale(0.68)',
                            opacity: 0,
                        })),
                        // then animate the spacing (which includes height, margin and padding)
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('150ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                            height: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            paddingRight: 0,
                            paddingLeft: 0,
                            'margin-bottom': '0',
                        }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('listAnim', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
                                opacity: 0,
                                height: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["stagger"])(100, [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('0.2s ease')
                            ])
                        ], {
                            optional: true
                        })
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./notes-list.component.scss */ "./src/app/pages/notes-list/notes-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_notes_service__WEBPACK_IMPORTED_MODULE_2__["NotesService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], NotesListComponent);
    return NotesListComponent;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-section\">\n\n  <div class=\"main-container-box\">\n\n    <div class=\"form-container\">\n\n      <h1 class=\"title\">Sign up</h1>\n\n      <form #signupForm=\"ngForm\" (ngSubmit)=\"signup(signupForm)\">\n\n        <div class=\"field\">\n          <label class=\"label\">Name</label>\n          <div class=\"control\">\n            <input\n              type=\"text\"\n              required\n              minlength=\"3\"\n              class=\"input\"\n              name=\"name\"\n              [ngModel]=\"user.name\"\n              placeholder=\"e.g. Alex Smith\">\n          </div>\n        </div>\n\n        <div class=\"field\">\n          <label class=\"label\">Email</label>\n          <div class=\"control\">\n            <input\n              type=\"email\"\n              required\n              minlength=\"5\"\n              email\n              class=\"input\"\n              name=\"email\"\n              [ngModel]=\"user.email\"\n              placeholder=\"e.g. alexsmith@gmail.com\">\n          </div>\n        </div>\n\n        <div class=\"field\">\n          <label class=\"label\">Password</label>\n          <div class=\"control\">\n            <input\n              type=\"password\"\n              required\n              minlength=\"8\"\n              class=\"input\"\n              name=\"password\"\n              [ngModel]=\"password\"\n              placeholder=\"enter your password\">\n          </div>\n        </div>\n\n        <div class=\"field\">\n          <div class=\"control\">\n            <button type=\"submit\" style=\"margin-top: 28px\" [disabled]=\"!signupForm.valid\" class=\"button is-primary has-text-white is-fullwidth\">\n              Sign up\n            </button>\n          </div>\n        </div>\n\n      </form>\n    </div>\n\n    <div class=\"alternate-bar\">\n      <h2>Already have an account?</h2>\n      <button class=\"button\" routerLink=\"/login\">Log in</button>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/signup/signup.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/user.model */ "./src/app/shared/user.model.ts");
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.user = new src_app_shared_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
    };
    SignupComponent.prototype.signup = function (form) {
        var _this = this;
        this.authService.signup(form.value.name, form.value.email, form.value.password).subscribe(function () {
            _this.authService.login(form.value.email, form.value.password).subscribe(function () {
                _this.router.navigateByUrl("/");
            });
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/pages/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/pages/signup/signup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/shared/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-request.service */ "./src/app/shared/web-request.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var AuthService = /** @class */ (function () {
    function AuthService(webReqService, http) {
        this.webReqService = webReqService;
        this.http = http;
    }
    AuthService.prototype.login = function (email, password) {
        return this.http.post(this.webReqService.ROOT_URI + "/users/login", {
            email: email,
            password: password
        }, {
            observe: 'response'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            // the auth tokens will be in the header of this response
            console.log(res.headers);
            localStorage.setItem('accessToken', res.headers.get('x-access-token'));
            localStorage.setItem('refreshToken', res.headers.get('x-refresh-token'));
            localStorage.setItem('userId', res.body._id);
            console.log("Sucessfully logged in");
        }));
    };
    AuthService.prototype.signup = function (name, email, password) {
        return this.http.post(this.webReqService.ROOT_URI + "/users", {
            name: name,
            email: email,
            password: password
        }, {
            observe: 'response'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            console.log("Signed up successfully");
        }));
    };
    AuthService.prototype.logout = function () {
        this.removeSession();
    };
    AuthService.prototype.removeSession = function () {
        localStorage.removeItem('userId');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    };
    AuthService.prototype.getAccessToken = function () {
        return localStorage.getItem('accessToken');
    };
    AuthService.prototype.getRefreshToken = function () {
        return localStorage.getItem('refreshToken');
    };
    AuthService.prototype.getUserId = function () {
        return localStorage.getItem('userId');
    };
    AuthService.prototype.removeStorageItems = function () {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userId');
    };
    AuthService.prototype.getNewAccessToken = function () {
        var refreshToken = this.getRefreshToken();
        var userId = this.getUserId();
        if (refreshToken && userId) {
            return this.http.get(this.webReqService.ROOT_URI + "/users/me/access-token", {
                headers: {
                    'x-refresh-token': refreshToken,
                    '_id': userId
                },
                observe: 'response'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
                localStorage.setItem('accessToken', res.headers.get('x-access-token'));
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(new Error('Refresh token and/or User Id is null or undefined'));
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_web_request_service__WEBPACK_IMPORTED_MODULE_2__["WebRequestService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/note.model.ts":
/*!**************************************!*\
  !*** ./src/app/shared/note.model.ts ***!
  \**************************************/
/*! exports provided: Note */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Note", function() { return Note; });
var Note = /** @class */ (function () {
    function Note() {
    }
    return Note;
}());



/***/ }),

/***/ "./src/app/shared/notes.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/notes.service.ts ***!
  \*****************************************/
/*! exports provided: NotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesService", function() { return NotesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-request.service */ "./src/app/shared/web-request.service.ts");



var NotesService = /** @class */ (function () {
    function NotesService(webReqService) {
        this.webReqService = webReqService;
    }
    NotesService.prototype.getAll = function () {
        return this.webReqService.get('/notes');
    };
    NotesService.prototype.get = function (id) {
        return this.webReqService.get('/notes/' + id);
    };
    NotesService.prototype.add = function (note) {
        // this method will add a note to the notes array
        return this.webReqService.post('/notes', note);
    };
    NotesService.prototype.update = function (note) {
        console.log(note);
        return this.webReqService.patch('/notes/' + note._id, note);
    };
    NotesService.prototype.delete = function (id) {
        return this.webReqService.delete('/notes/' + id);
    };
    NotesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_web_request_service__WEBPACK_IMPORTED_MODULE_2__["WebRequestService"]])
    ], NotesService);
    return NotesService;
}());



/***/ }),

/***/ "./src/app/shared/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/shared/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/shared/web-request.intereceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/web-request.intereceptor.ts ***!
  \****************************************************/
/*! exports provided: WebRequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRequestInterceptor", function() { return WebRequestInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var WebRequestInterceptor = /** @class */ (function () {
    function WebRequestInterceptor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    WebRequestInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        request = this.addAuthHeader(request);
        // call next() and handle the response
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log(error);
            if (error.status === 401 && request.url.endsWith('/users/me/access-token')) {
                // this means that we tried to refresh the access token but failed
                // so therefore the refresh token has expired
                console.log("Refresh Token has expired");
                _this.authService.removeStorageItems();
                // redirect the user to /login
                _this.router.navigateByUrl("/login");
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"])();
            }
            if (error.status === 401) {
                // 401 error means we are unauthorized
                // not /users/me/access-token therefore the Access Token has expired
                // We have to try and refresh the Access Token.
                return _this.refreshAccessToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
                    request = _this.addAuthHeader(request);
                    return next.handle(request);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                    console.log("Catching Error");
                    console.log(err);
                    _this.authService.removeStorageItems();
                    _this.router.navigateByUrl('/login');
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["empty"])();
                }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    WebRequestInterceptor.prototype.refreshAccessToken = function () {
        return this.authService.getNewAccessToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            console.log("Access Token Refreshed");
        }));
    };
    WebRequestInterceptor.prototype.addAuthHeader = function (request) {
        // get the access token
        var token = this.authService.getAccessToken();
        if (token) {
            // append the access token to the request header
            return request.clone({
                setHeaders: {
                    'x-access-token': token
                }
            });
        }
        return request;
    };
    WebRequestInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], WebRequestInterceptor);
    return WebRequestInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/web-request.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/web-request.service.ts ***!
  \***********************************************/
/*! exports provided: WebRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRequestService", function() { return WebRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var WebRequestService = /** @class */ (function () {
    function WebRequestService(http) {
        this.http = http;
        this.ROOT_URI = '';
    }
    WebRequestService.prototype.get = function (uri) {
        return this.http.get(this.ROOT_URI + uri);
    };
    WebRequestService.prototype.post = function (uri, payload) {
        return this.http.post(this.ROOT_URI + uri, payload);
    };
    WebRequestService.prototype.patch = function (uri, payload) {
        return this.http.patch(this.ROOT_URI + uri, payload);
    };
    WebRequestService.prototype.delete = function (uri) {
        return this.http.delete(this.ROOT_URI + uri);
    };
    WebRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WebRequestService);
    return WebRequestService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bouas\Documents\Projet\notemanager\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map