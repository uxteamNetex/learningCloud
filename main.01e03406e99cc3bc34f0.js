(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\proyectos\learningCloud-mock-app\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_card_basic_card_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/card-basic/card-basic.component */ "kr1r");
/* harmony import */ var _directives_card_image_fallback_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/card-image-fallback.directive */ "YY0R");




function HomeComponent_div_0_ntx_card_basic_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ntx-card-basic", 6);
} if (rf & 2) {
    const sprint_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("background", sprint_r3.background);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", sprint_r3.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", sprint_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("progress", sprint_r3.progress);
} }
const _c0 = function (a0) { return { "collapsed": a0 }; };
function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_0_Template_span_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggleClass($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_0_ntx_card_basic_6_Template, 1, 4, "ntx-card-basic", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stage_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, stage_r1.collapsed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stage_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", stage_r1.sprints);
} }
class HomeComponent {
    constructor() {
        this.stages = [
            {
                name: 'Stage 1',
                collapsed: true,
                sprints: [
                    {
                        background: 'https://images.unsplash.com/photo-1567631643547-67a2dd59f266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjkxfHxmYXNoaW9uJTIwcmV0YWlsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                        title: 'This is a one line card title',
                        label: 'Lorem',
                        progress: '35'
                    },
                    {
                        background: 'https://images.unsplash.com/photo-1503342452485-86b7f54527ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGZhc2hpb24lMjByZXRhaWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                        title: 'This is a one line card title',
                        label: 'tempora',
                        progress: '0'
                    },
                    {
                        background: 'https://images.unsplash.com/photo-1507215210622-539686c4bfaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                        title: 'This is a one line card title',
                        label: 'ipsum',
                        progress: '46'
                    },
                    {
                        background: 'https://images.unsplash.com/photo-1615387000571-bdcfe92eb67c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjAwfHxmYXNoaW9uJTIwcmV0YWlsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                        title: 'This is a multiline card title lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolores accusamus repudiandae sit ea suscipit quaerat tempora iusto error dolore exercitationem eaque quas, et earum temporibus doloribus impedit, enim perferendis',
                        label: 'exercitationem',
                        progress: '89'
                    }
                ]
            },
            {
                name: 'Stage 2',
                collapsed: false,
                sprints: [
                    {
                        background: 'https://images.unsplash.com/photo-1608228088998-57828365d486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZhc2hpb258ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                        title: 'This is a one line card title',
                        label: 'Lorem',
                        progress: '35'
                    },
                    {
                        background: 'https://images.unsplash.com/photo-1541941702428-22609a10cb9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUwfHxmYXNoaW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                        title: 'This is a one line card title',
                        label: 'tempora',
                        progress: '0'
                    },
                    {
                        background: 'https://images.unsplash.com/photo-1572251328767-e59f06f13ba1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUxfHxmYXNoaW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                        title: 'This is a one line card title',
                        label: 'ipsum',
                        progress: '46'
                    },
                    {
                        background: 'https://images.unsplash.com/photo-1444097315577-49429a8b6224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzExfHxmYXNoaW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                        title: 'This is a multiline card title lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolores accusamus repudiandae sit ea suscipit quaerat tempora iusto error dolore exercitationem eaque quas, et earum temporibus doloribus impedit, enim perferendis',
                        label: 'exercitationem',
                        progress: '89'
                    },
                    {
                        background: 'https://images.unsplash.com/photo-1481399124169-87493351c8a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzc5fHxmYXNoaW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                        title: 'This is a one line card title',
                        label: 'exercitationem',
                        progress: '89'
                    },
                    {
                        background: 'https://images.unsplash.com/photo-1536593998369-f0d25ed0fb1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDcyfHxmYXNoaW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                        title: 'This is a one line card title',
                        label: 'exercitationem',
                        progress: '89'
                    }
                ]
            }
        ];
    }
    ngOnInit() {
    }
    toggleClass(event) {
        let collapsableContainer = event.target.parentNode.parentNode;
        collapsableContainer.classList.toggle('collapsed');
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ntx-home"]], decls: 1, vars: 1, consts: [["class", "collapsable", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "collapsable", 3, "ngClass"], [1, "collapsable__heading"], [1, "material-icons-outlined", 3, "click"], [1, "collapsable__body"], ["ntxCardImageFallback", "background", 3, "background", "label", "title", "progress", 4, "ngFor", "ngForOf"], ["ntxCardImageFallback", "background", 3, "background", "label", "title", "progress"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 7, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _components_card_basic_card_basic_component__WEBPACK_IMPORTED_MODULE_2__["CardBasicComponent"], _directives_card_image_fallback_directive__WEBPACK_IMPORTED_MODULE_3__["CardImageFallbackDirective"]], styles: ["@charset \"UTF-8\";\n.collapsable[_ngcontent-%COMP%] {\n  width: 336px;\n  margin: 48px auto 0;\n}\n.collapsable[_ngcontent-%COMP%]   .collapsable__heading[_ngcontent-%COMP%] {\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.collapsable[_ngcontent-%COMP%]   .collapsable__heading[_ngcontent-%COMP%]   span.material-icons-outlined[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.collapsable[_ngcontent-%COMP%]   .collapsable__heading[_ngcontent-%COMP%]   span.material-icons-outlined[_ngcontent-%COMP%]:after {\n  content: \"\uE5CF\";\n}\n.collapsable[_ngcontent-%COMP%]   .collapsable__heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  margin-left: 20px;\n}\n.collapsable[_ngcontent-%COMP%]   .collapsable__body[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, calc(50% - 16px));\n  grid-auto-rows: 100px;\n  grid-row-gap: 24px;\n  grid-column-gap: 16px;\n  margin: 0 auto;\n}\n.collapsable[_ngcontent-%COMP%]   .collapsable__body[_ngcontent-%COMP%]    > .card-award[_ngcontent-%COMP%] {\n  border: 2px solid white !important;\n  width: 100%;\n  height: 100%;\n}\n@media (min-width: 1023px) {\n  .collapsable[_ngcontent-%COMP%] {\n    width: 864px;\n  }\n  .collapsable[_ngcontent-%COMP%]   .collapsable__body[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, calc(20% - 16px));\n  }\n}\n@media (min-width: 1024px) {\n  .collapsable[_ngcontent-%COMP%] {\n    width: 952px;\n  }\n  .collapsable[_ngcontent-%COMP%]   .collapsable__body[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, calc(50% - 16px));\n    grid-auto-rows: 292px;\n  }\n}\n@media (min-width: 1920px) {\n  .collapsable[_ngcontent-%COMP%] {\n    width: 1436px;\n  }\n  .collapsable[_ngcontent-%COMP%]   .collapsable__body[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, calc(33% - 16px));\n  }\n}\n.collapsable.collapsed[_ngcontent-%COMP%]   .collapsable__heading[_ngcontent-%COMP%]   span.material-icons-outlined[_ngcontent-%COMP%]::after {\n  content: \"\uE5CE\";\n}\n.collapsable.collapsed[_ngcontent-%COMP%]   .collapsable__body[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQjtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBVUEsbUJBQUE7QUFQUjtBQUZRO0VBQ0ksZUFBQTtBQUlaO0FBSFk7RUFDSSxZQUFBO0FBS2hCO0FBRlE7RUFDSSxpQkFBQTtBQUlaO0FBQUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlEQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQUVSO0FBRFE7RUFDSSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBR1o7QUFBSTtFQWhDSjtJQWlDUSxZQUFBO0VBR047RUFGTTtJQUNJLHlEQUFBO0VBSVY7QUFDRjtBQUZJO0VBdENKO0lBdUNRLFlBQUE7RUFLTjtFQUpNO0lBQ0kseURBQUE7SUFDQSxxQkFBQTtFQU1WO0FBQ0Y7QUFKSTtFQTdDSjtJQThDUSxhQUFBO0VBT047RUFOTTtJQUNJLHlEQUFBO0VBUVY7QUFDRjtBQUxRO0VBQ0ksWUFBQTtBQU9aO0FBTFE7RUFDSSxhQUFBO0FBT1oiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb2xsYXBzYWJsZSB7XG4gIHdpZHRoOiAzMzZweDtcbiAgbWFyZ2luOiA0OHB4IGF1dG8gMDtcbn1cbi5jb2xsYXBzYWJsZSAuY29sbGFwc2FibGVfX2hlYWRpbmcge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4uY29sbGFwc2FibGUgLmNvbGxhcHNhYmxlX19oZWFkaW5nIHNwYW4ubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29sbGFwc2FibGUgLmNvbGxhcHNhYmxlX19oZWFkaW5nIHNwYW4ubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIu6Xj1wiO1xufVxuLmNvbGxhcHNhYmxlIC5jb2xsYXBzYWJsZV9faGVhZGluZyBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmNvbGxhcHNhYmxlIC5jb2xsYXBzYWJsZV9fYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgY2FsYyg1MCUgLSAxNnB4KSk7XG4gIGdyaWQtYXV0by1yb3dzOiAxMDBweDtcbiAgZ3JpZC1yb3ctZ2FwOiAyNHB4O1xuICBncmlkLWNvbHVtbi1nYXA6IDE2cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNvbGxhcHNhYmxlIC5jb2xsYXBzYWJsZV9fYm9keSA+IC5jYXJkLWF3YXJkIHtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDIzcHgpIHtcbiAgLmNvbGxhcHNhYmxlIHtcbiAgICB3aWR0aDogODY0cHg7XG4gIH1cbiAgLmNvbGxhcHNhYmxlIC5jb2xsYXBzYWJsZV9fYm9keSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIGNhbGMoMjAlIC0gMTZweCkpO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC5jb2xsYXBzYWJsZSB7XG4gICAgd2lkdGg6IDk1MnB4O1xuICB9XG4gIC5jb2xsYXBzYWJsZSAuY29sbGFwc2FibGVfX2JvZHkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBjYWxjKDUwJSAtIDE2cHgpKTtcbiAgICBncmlkLWF1dG8tcm93czogMjkycHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgLmNvbGxhcHNhYmxlIHtcbiAgICB3aWR0aDogMTQzNnB4O1xuICB9XG4gIC5jb2xsYXBzYWJsZSAuY29sbGFwc2FibGVfX2JvZHkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBjYWxjKDMzJSAtIDE2cHgpKTtcbiAgfVxufVxuLmNvbGxhcHNhYmxlLmNvbGxhcHNlZCAuY29sbGFwc2FibGVfX2hlYWRpbmcgc3Bhbi5tYXRlcmlhbC1pY29ucy1vdXRsaW5lZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIu6XjlwiO1xufVxuLmNvbGxhcHNhYmxlLmNvbGxhcHNlZCAuY29sbGFwc2FibGVfX2JvZHkge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "B4E7":
/*!*********************************************************************************!*\
  !*** ./src/app/components/card-basic-skeleton/card-basic-skeleton.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CardBasicSkeletonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBasicSkeletonComponent", function() { return CardBasicSkeletonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CardBasicSkeletonComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardBasicSkeletonComponent.ɵfac = function CardBasicSkeletonComponent_Factory(t) { return new (t || CardBasicSkeletonComponent)(); };
CardBasicSkeletonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardBasicSkeletonComponent, selectors: [["ntx-card-basic-skeleton"]], decls: 3, vars: 0, consts: [[1, "card-basic-skeleton"], [1, "card-basic-skeleton__title"], [1, "card-basic-skeleton__progress"]], template: function CardBasicSkeletonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card-basic-skeleton[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 100px;\n  background-color: #1A1A1A;\n  border-radius: 6px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  align-items: center;\n}\n.card-basic-skeleton__title[_ngcontent-%COMP%], .card-basic-skeleton__progress[_ngcontent-%COMP%] {\n  background-color: #313131;\n  height: 6px;\n  width: 100%;\n  border-radius: 3px;\n}\n.card-basic-skeleton__progress[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  width: 75%;\n}\n@media (min-width: 1024px) {\n  .card-basic-skeleton[_ngcontent-%COMP%] {\n    width: 468px;\n    height: 292px;\n    border-radius: 12px;\n    padding: 40px;\n  }\n  .card-basic-skeleton__title[_ngcontent-%COMP%], .card-basic-skeleton__progress[_ngcontent-%COMP%] {\n    height: 16px;\n    border-radius: 8px;\n  }\n  .card-basic-skeleton__progress[_ngcontent-%COMP%] {\n    margin-top: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJkLWJhc2ljLXNrZWxldG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUFJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRVI7QUFBSTtFQUNJLGVBQUE7RUFDQSxVQUFBO0FBRVI7QUFBSTtFQXBCSjtJQXFCUSxZQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtFQUdOO0VBRk07SUFDSSxZQUFBO0lBQ0Esa0JBQUE7RUFJVjtFQUZNO0lBQ0ksZ0JBQUE7RUFJVjtBQUNGIiwiZmlsZSI6ImNhcmQtYmFzaWMtc2tlbGV0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1iYXNpYy1za2VsZXRvbiB7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFBMUExQTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICZfX3RpdGxlLCZfX3Byb2dyZXNzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzMTMxO1xyXG4gICAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIH1cclxuICAgICZfX3Byb2dyZXNzIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICB3aWR0aDogNDY4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyOTJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICAgICAgJl9fdGl0bGUsJl9fcHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9fcHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "JFIp":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["ntx-home-page"]], decls: 1, vars: 0, consts: [[1, "bg-container"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".bg-container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 62.5vw;\n  box-sizing: border-box;\n  background: url('lc02_1x.bf157dbe0bc302dcf8a7.jpg');\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBRUEsbURBQUE7RUFDQSxzQkFBQTtBQUFKIiwiZmlsZSI6ImhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiA2Mi41dnc7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLy8gYm9yZGVyOiA1cHggc29saWQgcmVkO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbGMwMl8xeC5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pages_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/search-page/search-page.component */ "sdyP");


class AppComponent {
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ntx-search-page");
    } }, directives: [_pages_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_1__["SearchPageComponent"]], styles: ["html[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\nhtml[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  color: white;\n}\nbody[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  background-color: #000;\n}\n.layout[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n.layout[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1;\n  width: 100%;\n}\n.layout[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%], .layout[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.layout[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  overflow-y: auto;\n}\n.layout[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 480px;\n  overflow-y: hidden;\n  position: relative;\n  display: inline-block;\n}\n@media (min-width: 1024px) {\n  .layout[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%] {\n    height: 62.5vw;\n  }\n}\n.layout[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top;\n}\n.layout[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, black 100%);\n  \n}\n.layout[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  top: 248px;\n  min-height: calc(100% - 248px);\n  padding: 0 24px;\n}\n@media (min-width: 1024px) {\n  .layout[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    top: 30vw;\n    min-height: calc(100% - 35vw);\n  }\n}\n.layout[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 36px;\n  font-weight: bold;\n  margin: 0;\n}\n@media (min-width: 1024px) {\n  .layout[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 600px;\n    font-size: 64px;\n    line-height: 72px;\n  }\n}\n@media (min-width: 1280px) {\n  .layout[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1920px) {\n  .layout[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 1024px;\n  }\n}\n.layout[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .carrousel-group[_ngcontent-%COMP%]   .carrousel[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.layout[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .carrousel-group[_ngcontent-%COMP%]   .carrousel[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 16px;\n  display: inline-block;\n}\n.layout[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .carrousel-group[_ngcontent-%COMP%]   .carrousel[_ngcontent-%COMP%]   .carrousel__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: hidden;\n  gap: 16px;\n  margin-right: -24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBS0ksaUNBQUE7QUFQSjtBQUdJO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0FBRFI7QUFNQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQWhCWTtBQWFoQjtBQU1BO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFISjtBQUlJO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRlI7QUFJSTtFQUNJLFdBQUE7QUFGUjtBQUlJO0VBQ0ksT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGUjtBQUdRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFLQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFMWjtBQURZO0VBSEo7SUFJUSxjQUFBO0VBSWQ7QUFDRjtBQUNZO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNoQjtBQUNZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUFRLE1BQUE7RUFDUixXQUFBO0VBQVksWUFBQTtFQUNaLHFCQUFBO0VBQ0EsNkVBQUE7RUFBcUYsUUFBQTtBQUlyRztBQURRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQUdaO0FBRlk7RUFOSjtJQU9RLFNBQUE7SUFDQSw2QkFBQTtFQUtkO0FBQ0Y7QUFGZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFJcEI7QUFIb0I7RUFMSjtJQU1RLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VBTXRCO0FBQ0Y7QUFMb0I7RUFWSjtJQVdRLGdCQUFBO0VBUXRCO0FBQ0Y7QUFQb0I7RUFiSjtJQWNRLGlCQUFBO0VBVXRCO0FBQ0Y7QUFOZ0I7RUFDSSxtQkFBQTtBQVFwQjtBQVBvQjtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBU3hCO0FBUG9CO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFTeEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJvZHktYmctY29sb3I6ICMwMDA7XHJcbiRuYXZiYXItYmctY29sb3I6IHRyYW5zcGFyZW50O1xyXG4kZm9vdGVyLWJnLWNvbG9yOiByZWQ7XHJcblxyXG5odG1sIHtcclxuICAgICoge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWJnLWNvbG9yO1xyXG59XHJcblxyXG4ubGF5b3V0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAud3JhcHBlciwgLmZvb3RlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgLmNvdmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDgwcHg7XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNjIuNXZ3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGJvcmRlcjogNXB4IHNvbGlkIGxpZ2h0cGluaztcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogdG9wO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6Jyc7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6MDsgdG9wOjA7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSxyZ2IoMCwgMCwgMCkgMTAwJSk7IC8qIFczQyAqL1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdG9wOiAyNDhweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gMjQ4cHgpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMzB2dztcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDM1dncpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGJvcmRlcjogNXB4IHNvbGlkIGNhZGV0Ymx1ZTtcclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDcycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3NjhweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMjRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNhcnJvdXNlbC1ncm91cCB7IFxyXG4gICAgICAgICAgICAgICAgLmNhcnJvdXNlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2Fycm91c2VsX193cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiAxNnB4OyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0yNHB4OyBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "YY0R":
/*!*************************************************************!*\
  !*** ./src/app/directives/card-image-fallback.directive.ts ***!
  \*************************************************************/
/*! exports provided: CardImageFallbackDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImageFallbackDirective", function() { return CardImageFallbackDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CardImageFallbackDirective {
    constructor(eRef) {
        this.eRef = eRef;
    }
    loadFallbackOnError() {
        const element = this.eRef.nativeElement;
        element.src = this.cardImageFallback || 'https://via.placeholder.com/160x100/cccccc/bbb';
    }
}
CardImageFallbackDirective.ɵfac = function CardImageFallbackDirective_Factory(t) { return new (t || CardImageFallbackDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
CardImageFallbackDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CardImageFallbackDirective, selectors: [["", "ntxCardImageFallback", ""]], hostBindings: function CardImageFallbackDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function CardImageFallbackDirective_error_HostBindingHandler() { return ctx.loadFallbackOnError(); });
    } }, inputs: { cardImageFallback: "cardImageFallback" } });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _directives_card_image_fallback_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/card-image-fallback.directive */ "YY0R");
/* harmony import */ var _components_card_basic_skeleton_card_basic_skeleton_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/card-basic-skeleton/card-basic-skeleton.component */ "B4E7");
/* harmony import */ var _components_card_basic_card_basic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/card-basic/card-basic.component */ "kr1r");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _pages_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/search-page/search-page.component */ "sdyP");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "JFIp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _components_card_basic_card_basic_component__WEBPACK_IMPORTED_MODULE_4__["CardBasicComponent"],
        _directives_card_image_fallback_directive__WEBPACK_IMPORTED_MODULE_2__["CardImageFallbackDirective"],
        _components_card_basic_skeleton_card_basic_skeleton_component__WEBPACK_IMPORTED_MODULE_3__["CardBasicSkeletonComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _pages_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_8__["SearchPageComponent"],
        _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_9__["HomePageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["ntx-navbar"]], decls: 16, vars: 0, consts: [[1, "ntx-navbar"], [1, "material-icons-outlined"], ["id", "logo", "xmlns", "http://www.w3.org/2000/svg", "width", "55", "height", "40", "viewBox", "0 0 55 40"], ["id", "Trazado_18796", "data-name", "Trazado 18796", "d", "M229.506,117.557a1.917,1.917,0,1,1-1.917-1.917,1.918,1.918,0,0,1,1.917,1.917", "transform", "translate(-191.573 -91.192)", "fill", "#fff"], ["id", "Trazado_18795", "data-name", "Trazado 18795", "d", "M0,0H55V40H0Z", "fill", "none"], ["id", "Trazado_18797", "data-name", "Trazado 18797", "d", "M5.78,53.1v4.28H8V60H5.78v8.2c0,1.084.25,1.528,1.389,1.528A5.546,5.546,0,0,0,8,69.667v2.668a19.588,19.588,0,0,1-2.5.167c-2.862,0-3.557-.778-3.557-3.779V60H0V57.385H1.945V53.1Z", "transform", "translate(2 -39.552)", "fill", "#fff"], ["id", "Trazado_18798", "data-name", "Trazado 18798", "d", "M73.513,80.513v3.668c-.306-.028-.723-.055-1.14-.055a2.583,2.583,0,0,0-2.89,2.64V95.8H65.649V80.846h3.668v2h.055a3.877,3.877,0,0,1,3.446-2.39,5.864,5.864,0,0,1,.695.056", "transform", "translate(-54.312 -63.014)", "fill", "#fff"], ["id", "Trazado_18799", "data-name", "Trazado 18799", "d", "M138.339,84.9v8.226a6.038,6.038,0,0,0,.472,2.668h-3.668a6.168,6.168,0,0,1-.472-1.556h-.055c-.834,1.389-1.7,1.945-3.78,1.945-3.029,0-3.64-2.751-3.64-4.307,0-2.668,1-3.89,4-4.7l1.751-.472c1.25-.333,1.723-.75,1.723-1.806,0-1.251-.584-1.834-1.779-1.834-1.084,0-1.778.639-1.778,1.973v.389h-3.446v-.278c0-3.112,1.806-4.7,5.252-4.7,3.78,0,5.419,1.223,5.419,4.446m-6.03,8.67a2.245,2.245,0,0,0,2.362-2.251V88.266a4.042,4.042,0,0,1-1.306.695l-.834.306a2.093,2.093,0,0,0-1.667,2.223c0,1.334.528,2.084,1.445,2.084", "transform", "translate(-107.104 -63.014)", "fill", "#fff"], ["id", "Rect\u00E1ngulo_10273", "data-name", "Rect\u00E1ngulo 10273", "width", "3.835", "height", "14.951", "transform", "translate(34.098 6)", "fill", "#fff"], ["id", "Trazado_18800", "data-name", "Trazado 18800", "d", "M282.925,84.625V95.8H279.09V85.4c0-1.334-.445-2-1.64-2-1.362,0-2.029.862-2.029,2.39v10h-3.835V80.846h3.668V82.6h.055a4.072,4.072,0,0,1,3.807-2.14c2.612,0,3.807,1.529,3.807,4.168", "transform", "translate(-230.958 -63.014)", "fill", "#fff"], ["id", "Rect\u00E1ngulo_10274", "data-name", "Rect\u00E1ngulo 10274", "width", "49.967", "height", "27.172", "transform", "translate(2 6)", "fill", "none"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "rect", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "rect", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".ntx-navbar[_ngcontent-%COMP%] {\n  background: transparent;\n  display: flex;\n  align-items: center;\n  height: 56px;\n  padding-right: 24px;\n}\n.ntx-navbar[_ngcontent-%COMP%]   span.material-icons-outlined[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 100%;\n  line-height: 56px;\n  text-align: center;\n}\n.ntx-navbar[_ngcontent-%COMP%]   svg#logo[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQUFJO0VBQ0ksT0FBQTtBQUVSIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5udHgtbmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG4gICAgc3Bhbi5tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCB7XHJcbiAgICAgICAgd2lkdGg6IDU2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIHN2ZyNsb2dvIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "kr1r":
/*!***************************************************************!*\
  !*** ./src/app/components/card-basic/card-basic.component.ts ***!
  \***************************************************************/
/*! exports provided: CardBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBasicComponent", function() { return CardBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CardBasicComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardBasicComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CardBasicComponent {
    constructor() {
        this.label = "";
        this.title = "";
        this.background = "https://via.placeholder.com/468x292?text=+";
        this.state = "";
        this.progress = 0;
        this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLoading = false;
        setTimeout(() => {
            this.isLoading = false;
        }, 3000);
    }
    ;
    ngOnInit() { }
    onClickEvent(i) {
        this.clickEvent.emit();
    }
}
CardBasicComponent.ɵfac = function CardBasicComponent_Factory(t) { return new (t || CardBasicComponent)(); };
CardBasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardBasicComponent, selectors: [["ntx-card-basic"]], inputs: { label: "label", title: "title", background: "background", state: "state", progress: "progress" }, outputs: { clickEvent: "clickEvent" }, decls: 14, vars: 8, consts: [[1, "card", 3, "ngClass"], [3, "src"], [1, "card__wrapper"], [1, "card__label"], [1, "card__title"], [1, "card__progress"], [1, "card__state-mark"], ["class", "locked-mark", 4, "ngIf"], ["class", "checked-mark", 4, "ngIf"], [1, "locked-mark"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24"], ["id", "Trazado_18832", "data-name", "Trazado 18832", "d", "M0,0H24V24H0Z", "fill", "none", "opacity", "0.87"], ["id", "Trazado_18833", "data-name", "Trazado 18833", "d", "M18,8H17V6A5,5,0,0,0,7,6V8H6a2.006,2.006,0,0,0-2,2V20a2.006,2.006,0,0,0,2,2H18a2.006,2.006,0,0,0,2-2V10A2.006,2.006,0,0,0,18,8ZM9,6a3,3,0,0,1,6,0V8H9Zm9,14H6V10H18Zm-6-3a2,2,0,1,0-2-2A2.006,2.006,0,0,0,12,17Z", "fill", "#fff"], [1, "checked-mark"], ["id", "Trazado_18810", "data-name", "Trazado 18810", "d", "M0,0H24V24H0Z", "fill", "none"], ["id", "Trazado_18811", "data-name", "Trazado 18811", "d", "M9,16.2,4.8,12,3.4,13.4,9,19,21,7,19.6,5.6Z", "fill", "#fff"]], template: function CardBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CardBasicComponent_div_12_Template, 4, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CardBasicComponent_div_13_Template, 4, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.background, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.progress + "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state === "locked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.state === "checked");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  flex-shrink: 0;\n  color: white;\n  background-color: #1A1A1A;\n  cursor: pointer;\n}\n.card[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 6px 8px 8px 8px;\n  box-sizing: border-box;\n  z-index: 1;\n}\n.card[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%]   .card__label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  font-size: 10px;\n  display: block;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 112px;\n  padding: 2px 4px;\n  text-transform: uppercase;\n  background-color: black;\n  margin-bottom: 16px;\n}\n.card[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%]   .card__label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.card[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%]   .card__title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 6px;\n}\n.card[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%]   .card__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%]   .card__progress[_ngcontent-%COMP%] {\n  height: 4px;\n  background-color: rgba(255, 255, 255, 0.35);\n  border-radius: 2px;\n}\n.card[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%]   .card__progress[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: white;\n  border-radius: 4px;\n}\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.card[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.55) 100%);\n}\n.card[_ngcontent-%COMP%]   .card__state-mark[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 4px;\n  z-index: 1;\n}\n.card.locked[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.card.locked[_ngcontent-%COMP%]::after {\n  background: rgba(0, 0, 0, 0.7);\n}\n.card.locked[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.card.locked[_ngcontent-%COMP%]   .card__progress[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.card[_ngcontent-%COMP%]:not(.locked):hover::after {\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.3) 100%);\n}\n@media (min-width: 1024px) {\n  .card[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%] {\n    padding: 12px 40px 16px 40px;\n  }\n  .card[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%]   .card__label[_ngcontent-%COMP%] {\n    top: 12px;\n    right: 12px;\n    font-size: 12px;\n    max-width: 180px;\n  }\n  .card[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%]   .card__title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .card[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%]   .card__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .card[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%]   .card__progress[_ngcontent-%COMP%] {\n    width: 220px;\n    margin: 0 auto;\n  }\n  .card[_ngcontent-%COMP%]   .card__state-mark[_ngcontent-%COMP%] {\n    top: calc(50% - 36px);\n    right: calc(50% - 36px);\n    width: 72px;\n    height: 72px;\n  }\n  .card[_ngcontent-%COMP%]   .card__state-mark[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 72px;\n    height: 72px;\n  }\n}\n.card.isLoading[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color: #1A1A1A;\n}\n.card.isLoading[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.card.isLoading[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n.card.isLoading[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%]   .card__title[_ngcontent-%COMP%], .card.isLoading[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%]   .card__progress[_ngcontent-%COMP%] {\n  background: #313131;\n}\n.card.isLoading[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%]   .card__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .card.isLoading[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%]   .card__progress[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.card.isLoading[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%]   .card__title[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  height: 8px;\n  margin-bottom: 8px;\n}\n.card.isLoading[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%]   .card__progress[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  height: 8px;\n  width: 75%;\n  margin: 0 auto;\n}\n.card.isLoading[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%]   .card__progress[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.card.isLoading[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%]   .card__label[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.card.isLoading[_ngcontent-%COMP%]::after {\n  background: transparent;\n}\n.card.isLoading[_ngcontent-%COMP%]:hover::after {\n  background: transparent;\n}\n@media (min-width: 1024px) {\n  .card.isLoading[_ngcontent-%COMP%] {\n    border-radius: 12px;\n  }\n  .card.isLoading[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%] {\n    padding-bottom: 40px;\n  }\n  .card.isLoading[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%]   .card__title[_ngcontent-%COMP%] {\n    height: 16px;\n    margin-bottom: 12px;\n  }\n  .card.isLoading[_ngcontent-%COMP%]   .card__wrapper[_ngcontent-%COMP%]   .card__progress[_ngcontent-%COMP%] {\n    height: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJkLWJhc2ljLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBREo7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQUFSO0FBQ1E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ1o7QUFBWTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFaEI7QUFDUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ1o7QUFBWTtFQUNJLFNBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQUVoQjtBQUNRO0VBQ0ksV0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QUFDWjtBQUFZO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFFaEI7QUFHSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFEUjtBQUlJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUFRLE1BQUE7RUFDUixXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkZBQUE7QUFEUjtBQUlJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFGUjtBQUtJO0VBQ0ksZUFBQTtBQUhSO0FBSVE7RUFDSSw4QkFBQTtBQUZaO0FBSVE7RUFDSSxZQUFBO0FBRlo7QUFJUTtFQUNJLGtCQUFBO0FBRlo7QUFPUTtFQUNJLDBGQUFBO0FBTFo7QUFTSTtFQUNJO0lBQ0ksNEJBQUE7RUFQVjtFQVFVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUFOZDtFQVFVO0lBQ0ksZUFBQTtFQU5kO0VBT2M7SUFDSSxrQkFBQTtFQUxsQjtFQVFVO0lBQ0ksWUFBQTtJQUNBLGNBQUE7RUFOZDtFQVNNO0lBQ0kscUJBQUE7SUFDQSx1QkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBUFY7RUFRVTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VBTmQ7QUFDRjtBQVNJO0VBQ0ksa0JBQUE7RUFDQSx5QkE3SVE7QUFzSWhCO0FBUVE7RUFDSSxrQkFBQTtBQU5aO0FBUVE7RUFDSSxvQkFBQTtBQU5aO0FBT1k7RUFJSSxtQkF0SkU7QUE4SWxCO0FBS2dCO0VBQ0ksa0JBQUE7QUFIcEI7QUFPWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBTGhCO0FBT1k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUxoQjtBQU1nQjtFQUNJLGtCQUFBO0FBSnBCO0FBT1k7RUFDSSxrQkFBQTtBQUxoQjtBQVFRO0VBQ0ksdUJBQUE7QUFOWjtBQVNZO0VBQ0ksdUJBQUE7QUFQaEI7QUFVUTtFQXhDSjtJQXlDUSxtQkFBQTtFQVBWO0VBUVU7SUFDSSxvQkFBQTtFQU5kO0VBT2M7SUFDSSxZQUFBO0lBQ0EsbUJBQUE7RUFMbEI7RUFPYztJQUNJLFlBQUE7RUFMbEI7QUFDRiIsImZpbGUiOiJjYXJkLWJhc2ljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNhcmRCZ1NrZWxldG9uOiMxQTFBMUE7XHJcbiR0aXRsZXNCZ1NrZWxldG9uOiMzMTMxMzE7XHJcbi5jYXJke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQTFBMUE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAuY2FyZF9fd3JhcHBlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDhweCA4cHggOHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAuY2FyZF9fbGFiZWwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNnB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTEycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA0cHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmRfX3RpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDsgIFxyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZF9fcHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjM1KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBiYWNrZ3JvdW5kIGltYWdlXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICAgIC8vIGJhY2tncm91bmQgZ3JhZGllbnRcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OicnO1xyXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6MDsgdG9wOjA7XHJcbiAgICAgICAgd2lkdGg6MTAwJTsgXHJcbiAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSxyZ2JhKDAsIDAsIDAsIDAuNTUpIDEwMCUpO1xyXG4gICAgfVxyXG4gICAgLy8gc3RhdGUgbWFya3NcclxuICAgIC5jYXJkX19zdGF0ZS1tYXJrIHtcclxuICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBtYXJnaW46IDRweDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gICAgLy8gc3RhdGUgc3R5bGVzXHJcbiAgICAmLmxvY2tlZCB7XHJcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZF9fd3JhcHBlciB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmRfX3Byb2dyZXNzIHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGhvdmVyIHN0eWxlc1xyXG4gICAgJjpub3QoLmxvY2tlZCk6aG92ZXIge1xyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSxyZ2JhKDAsIDAsIDAsIDAuMykgMTAwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gbWVkaWEgcXVlcmllXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgLmNhcmRfX3dyYXBwZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDQwcHggMTZweCA0MHB4O1xyXG4gICAgICAgICAgICAuY2FyZF9fbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jYXJkX190aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNhcmRfX3Byb2dyZXNzIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkX19zdGF0ZS1tYXJrIHtcclxuICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDM2cHgpO1xyXG4gICAgICAgICAgICByaWdodDogY2FsYyg1MCUgLSAzNnB4KTtcclxuICAgICAgICAgICAgd2lkdGg6IDcycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzJweDtcclxuICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3MnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5pc0xvYWRpbmcge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZEJnU2tlbGV0b247XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FyZF9fd3JhcHBlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAuY2FyZF9fdGl0bGUsLmNhcmRfX3Byb2dyZXNzICB7XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdGl0bGVzQmdTa2VsZXRvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2FyZF9fdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNhcmRfX3Byb2dyZXNzIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2FyZF9fbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7IFxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICAuY2FyZF9fd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgICAgIC5jYXJkX190aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZF9fcHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "sdyP":
/*!************************************************************!*\
  !*** ./src/app/pages/search-page/search-page.component.ts ***!
  \************************************************************/
/*! exports provided: SearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageComponent", function() { return SearchPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_card_basic_card_basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/card-basic/card-basic.component */ "kr1r");
/* harmony import */ var _directives_card_image_fallback_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/card-image-fallback.directive */ "YY0R");




function SearchPageComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ntx-card-basic", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("background", card_r1.background);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", card_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", card_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("progress", card_r1.progress);
} }
class SearchPageComponent {
    constructor() {
        this.cards = [
            {
                background: 'https://images.unsplash.com/photo-1567631643547-67a2dd59f266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjkxfHxmYXNoaW9uJTIwcmV0YWlsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                title: 'This is a one line card title',
                label: 'Lorem',
                progress: '35'
            },
            {
                background: 'https://images.unsplash.com/photo-1503342452485-86b7f54527ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGZhc2hpb24lMjByZXRhaWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                title: 'This is a one line card title',
                label: 'tempora',
                progress: '0'
            },
            {
                background: 'https://images.unsplash.com/photo-1507215210622-539686c4bfaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                title: 'This is a one line card title',
                label: 'ipsum',
                progress: '46'
            },
            {
                background: 'https://images.unsplash.com/photo-1615387000571-bdcfe92eb67c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjAwfHxmYXNoaW9uJTIwcmV0YWlsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                title: 'This is a multiline card title lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolores accusamus repudiandae sit ea suscipit quaerat tempora iusto error dolore exercitationem eaque quas, et earum temporibus doloribus impedit, enim perferendis',
                label: 'exercitationem',
                progress: '89'
            },
            {
                background: 'https://images.unsplash.com/photo-1608228088998-57828365d486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZhc2hpb258ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                title: 'This is a one line card title',
                label: 'Lorem',
                progress: '35'
            },
            {
                background: 'https://images.unsplash.com/photo-1541941702428-22609a10cb9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUwfHxmYXNoaW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                title: 'This is a one line card title',
                label: 'tempora',
                progress: '0'
            },
            {
                background: 'https://images.unsplash.com/photo-1572251328767-e59f06f13ba1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUxfHxmYXNoaW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                title: 'This is a one line card title',
                label: 'ipsum',
                progress: '46'
            },
            {
                background: 'https://images.unsplash.com/photo-1444097315577-49429a8b6224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzExfHxmYXNoaW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                title: 'This is a multiline card title lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dolores accusamus repudiandae sit ea suscipit quaerat tempora iusto error dolore exercitationem eaque quas, et earum temporibus doloribus impedit, enim perferendis',
                label: 'exercitationem',
                progress: '89'
            },
            {
                background: 'https://images.unsplash.com/photo-1481399124169-87493351c8a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzc5fHxmYXNoaW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                title: 'This is a one line card title',
                label: 'exercitationem',
                progress: '89'
            },
            {
                background: 'https://images.unsplash.com/photo-1536593998369-f0d25ed0fb1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDcyfHxmYXNoaW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                title: 'This is a one line card title',
                label: 'exercitationem',
                progress: '89'
            }
        ];
    }
    ngOnInit() {
    }
}
SearchPageComponent.ɵfac = function SearchPageComponent_Factory(t) { return new (t || SearchPageComponent)(); };
SearchPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchPageComponent, selectors: [["ntx-search-page"]], decls: 31, vars: 1, consts: [[1, "search-page"], [1, "header"], [1, "header__icon"], [1, "material-icons-outlined"], [1, "header__label"], [1, "container"], [1, "search-box"], [1, "search-chips"], [1, "chip", "chip-active"], [1, "chip"], [1, "search-label"], [1, "grid-container"], ["class", "cell", 4, "ngFor", "ngForOf"], [1, "cell"], ["ntxCardImageFallback", "background", 3, "background", "label", "title", "progress"]], template: function SearchPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "face");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Human resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "sprints");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "channels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "10 Results found:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SearchPageComponent_div_30_Template, 2, 4, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _components_card_basic_card_basic_component__WEBPACK_IMPORTED_MODULE_2__["CardBasicComponent"], _directives_card_image_fallback_directive__WEBPACK_IMPORTED_MODULE_3__["CardImageFallbackDirective"]], styles: [".header[_ngcontent-%COMP%] {\n  height: 56px;\n  display: flex;\n}\n.header[_ngcontent-%COMP%]   .material-icons-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.header[_ngcontent-%COMP%]   .header__icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n.header[_ngcontent-%COMP%]   .header__label[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  margin: auto;\n}\n.container[_ngcontent-%COMP%] {\n  width: calc(100% - 48px);\n  margin: 0 auto;\n}\n.container[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n  grid-template-columns: 100%;\n}\n@media (min-width: 480px) {\n  .container[_ngcontent-%COMP%] {\n    width: 336px;\n  }\n  .container[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 160px);\n  }\n}\n@media (min-width: 600px) {\n  .container[_ngcontent-%COMP%] {\n    width: 512px;\n  }\n  .container[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 160px);\n  }\n}\n@media (min-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    width: 688px;\n  }\n  .container[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 160px);\n  }\n}\n@media (min-width: 1023px) {\n  .container[_ngcontent-%COMP%] {\n    width: 864px;\n  }\n  .container[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(5, 160px);\n  }\n}\n@media (min-width: 1024px) {\n  .container[_ngcontent-%COMP%] {\n    width: 736px;\n  }\n  .container[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 360px);\n  }\n}\n@media (min-width: 1280px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1112px;\n  }\n  .container[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 360px);\n  }\n}\n@media (min-width: 1920px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1488px;\n  }\n  .container[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 360px);\n  }\n}\n.grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-row-gap: 24px;\n  grid-column-gap: 16px;\n  justify-content: center;\n  margin: 0 auto;\n}\n.grid-container[_ngcontent-%COMP%]   .cell[_ngcontent-%COMP%] {\n  aspect-ratio: 16/10;\n}\n.search-box[_ngcontent-%COMP%] {\n  border-bottom: 1px solid white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0 12px;\n  margin: 60px 0;\n}\n@media (min-width: 1024px) {\n  .search-box[_ngcontent-%COMP%] {\n    margin: 80px 0;\n  }\n}\n.search-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 24px;\n  margin-left: 4px;\n}\n.search-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  margin-right: 16px;\n}\n.search-chips[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 8px 12px;\n  border: 1px solid white;\n  border-radius: 20px;\n  margin-right: 12px;\n  text-transform: uppercase;\n}\n.search-chips[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n}\n.search-chips[_ngcontent-%COMP%]   .chip-active[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #333333;\n}\n.search-label[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 40px 0 24px;\n}\n@media (min-width: 1024px) {\n  .search-label[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWFyY2gtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlJLFlBQUE7RUFDQSxhQUFBO0FBRko7QUFGSTtFQUNJLGVBQUE7QUFJUjtBQUFJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFFUjtBQUFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFFUjtBQUFJO0VBQ0ksT0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUVSO0FBRUE7RUFDSSx3QkFBQTtFQUNBLGNBQUE7QUFDSjtBQUFJO0VBQ0ksMkJBQUE7QUFFUjtBQUFJO0VBTko7SUFPUSxZQUFBO0VBR047RUFGTTtJQUNJLHVDQUFBO0VBSVY7QUFDRjtBQUZJO0VBWko7SUFhUSxZQUFBO0VBS047RUFKTTtJQUNJLHVDQUFBO0VBTVY7QUFDRjtBQUpJO0VBbEJKO0lBbUJRLFlBQUE7RUFPTjtFQU5NO0lBQ0ksdUNBQUE7RUFRVjtBQUNGO0FBTkk7RUF4Qko7SUF5QlEsWUFBQTtFQVNOO0VBUk07SUFDSSx1Q0FBQTtFQVVWO0FBQ0Y7QUFSSTtFQTlCSjtJQStCUSxZQUFBO0VBV047RUFWTTtJQUNJLHVDQUFBO0VBWVY7QUFDRjtBQVZJO0VBcENKO0lBcUNRLGFBQUE7RUFhTjtFQVpNO0lBQ0ksdUNBQUE7RUFjVjtBQUNGO0FBWkk7RUExQ0o7SUEyQ1EsYUFBQTtFQWVOO0VBZE07SUFDSSx1Q0FBQTtFQWdCVjtBQUNGO0FBYkE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQWdCSjtBQWZJO0VBQ0ksbUJBQUE7QUFpQlI7QUFaQTtFQUNJLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFlSjtBQWRJO0VBUEo7SUFRUSxjQUFBO0VBaUJOO0FBQ0Y7QUFoQkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFrQlI7QUFoQkk7RUFDSSxrQkFBQTtBQWtCUjtBQWJJO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBZ0JSO0FBZlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFpQlo7QUFkSTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtBQWdCUjtBQVpBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBZUo7QUFkSTtFQUhKO0lBSVEsZUFBQTtFQWlCTjtBQUNGIiwiZmlsZSI6InNlYXJjaC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICAubWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICA+IGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmhlYWRlcl9faWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgfSAgIFxyXG4gICAgLmhlYWRlcl9fbGFiZWwge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH0gICBcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDhweCk7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIC5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDMzNnB4O1xyXG4gICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDE2MHB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICB3aWR0aDogNTEycHg7XHJcbiAgICAgICAgLmdyaWQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMTYwcHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIHdpZHRoOiA2ODhweDtcclxuICAgICAgICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxNjBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjNweCkge1xyXG4gICAgICAgIHdpZHRoOiA4NjRweDtcclxuICAgICAgICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxNjBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgIHdpZHRoOiA3MzZweDtcclxuICAgICAgICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAzNjBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xyXG4gICAgICAgIHdpZHRoOiAxMTEycHg7XHJcbiAgICAgICAgLmdyaWQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzYwcHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgICAgICB3aWR0aDogMTQ4OHB4O1xyXG4gICAgICAgIC5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDM2MHB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXJvdy1nYXA6IDI0cHg7XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDE2cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgLmNlbGwge1xyXG4gICAgICAgIGFzcGVjdC1yYXRpbzogMTYvMTA7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWJveCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDhweCAwIDEycHg7XHJcbiAgICBtYXJnaW46IDYwcHggMDtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICBtYXJnaW46IDgwcHggMDtcclxuICAgIH1cclxuICAgIHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgfVxyXG4gICAgc3BhbjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtY2hpcHMge1xyXG4gICAgLmNoaXAge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNoaXAtYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIH1cclxufVxyXG5cclxuLnNlYXJjaC1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogNDBweCAwIDI0cHg7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
// { path: '', redirectTo: '/search', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.01e03406e99cc3bc34f0.js.map