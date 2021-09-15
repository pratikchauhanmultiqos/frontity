webpackHotUpdate("my-first-frontity-project",{

/***/ "./packages/mars-theme/src/index.js":
/*!******************************************!*\
  !*** ./packages/mars-theme/src/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ \"./packages/mars-theme/src/components/index.js\");\n/* harmony import */ var _frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/html2react/processors/image */ \"./node_modules/@frontity/html2react/processors/image.tsx\");\n/* harmony import */ var _frontity_html2react_processors_iframe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontity/html2react/processors/iframe */ \"./node_modules/@frontity/html2react/processors/iframe.tsx\");\n/* harmony import */ var _frontity_html2react_processors_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @frontity/html2react/processors/link */ \"./node_modules/@frontity/html2react/processors/link.tsx\");\nconst marsTheme={name:\"@frontity/mars-theme\",roots:{/**\n     * In Frontity, any package can add React components to the site.\n     * We use roots for that, scoped to the `theme` namespace.\n     */theme:_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"]},state:{/**\n     * State is where the packages store their default settings and other\n     * relevant state. It is scoped to the `theme` namespace.\n     */theme:{autoPrefetch:\"in-view\",menu:[],isMobileMenuOpen:false,featured:{showOnList:false,showOnPost:false}}},/**\n   * Actions are functions that modify the state or deal with other parts of\n   * Frontity like libraries.\n   */actions:{theme:{toggleMobileMenu:({state})=>{state.theme.isMobileMenuOpen=!state.theme.isMobileMenuOpen;},closeMobileMenu:({state})=>{state.theme.isMobileMenuOpen=false;},beforeSSR:async({state,actions})=>{if(state.router.link===\"/\"){// Stop the server-side rendering (SSR) until this is ready.\nawait actions.source.fetch(\"/home\");}}}},libraries:{html2react:{/**\n       * Add a processor to `html2react` so it processes the `<img>` tags\n       * and internal link inside the content HTML.\n       * You can add your own processors too.\n       */processors:[_frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"],_frontity_html2react_processors_iframe__WEBPACK_IMPORTED_MODULE_3__[\"default\"],_frontity_html2react_processors_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"]]}}};/* harmony default export */ __webpack_exports__[\"default\"] = (marsTheme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9pbmRleC5qcz8xOGE2Il0sIm5hbWVzIjpbIm1hcnNUaGVtZSIsIm5hbWUiLCJyb290cyIsInRoZW1lIiwiVGhlbWUiLCJzdGF0ZSIsImF1dG9QcmVmZXRjaCIsIm1lbnUiLCJpc01vYmlsZU1lbnVPcGVuIiwiZmVhdHVyZWQiLCJzaG93T25MaXN0Iiwic2hvd09uUG9zdCIsImFjdGlvbnMiLCJ0b2dnbGVNb2JpbGVNZW51IiwiY2xvc2VNb2JpbGVNZW51IiwiYmVmb3JlU1NSIiwicm91dGVyIiwibGluayIsInNvdXJjZSIsImZldGNoIiwibGlicmFyaWVzIiwiaHRtbDJyZWFjdCIsInByb2Nlc3NvcnMiLCJpbWFnZSIsImlmcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU1BLEtBQU1BLFVBQVMsQ0FBRyxDQUNoQkMsSUFBSSxDQUFFLHNCQURVLENBRWhCQyxLQUFLLENBQUUsQ0FDTDtBQUNKO0FBQ0E7QUFDQSxPQUNJQyxLQUFLLENBQUVDLG1EQUxGLENBRlMsQ0FTaEJDLEtBQUssQ0FBRSxDQUNMO0FBQ0o7QUFDQTtBQUNBLE9BQ0lGLEtBQUssQ0FBRSxDQUNMRyxZQUFZLENBQUUsU0FEVCxDQUVMQyxJQUFJLENBQUUsRUFGRCxDQUdMQyxnQkFBZ0IsQ0FBRSxLQUhiLENBSUxDLFFBQVEsQ0FBRSxDQUNSQyxVQUFVLENBQUUsS0FESixDQUVSQyxVQUFVLENBQUUsS0FGSixDQUpMLENBTEYsQ0FUUyxDQXlCaEI7QUFDRjtBQUNBO0FBQ0EsS0FDRUMsT0FBTyxDQUFFLENBQ1BULEtBQUssQ0FBRSxDQUNMVSxnQkFBZ0IsQ0FBRSxDQUFDLENBQUVSLEtBQUYsQ0FBRCxHQUFlLENBQy9CQSxLQUFLLENBQUNGLEtBQU4sQ0FBWUssZ0JBQVosQ0FBK0IsQ0FBQ0gsS0FBSyxDQUFDRixLQUFOLENBQVlLLGdCQUE1QyxDQUNELENBSEksQ0FJTE0sZUFBZSxDQUFFLENBQUMsQ0FBRVQsS0FBRixDQUFELEdBQWUsQ0FDOUJBLEtBQUssQ0FBQ0YsS0FBTixDQUFZSyxnQkFBWixDQUErQixLQUEvQixDQUNELENBTkksQ0FPTE8sU0FBUyxDQUFFLE1BQU8sQ0FBRVYsS0FBRixDQUFTTyxPQUFULENBQVAsR0FBOEIsQ0FDdkMsR0FBSVAsS0FBSyxDQUFDVyxNQUFOLENBQWFDLElBQWIsR0FBc0IsR0FBMUIsQ0FBK0IsQ0FDN0I7QUFDQSxLQUFNTCxRQUFPLENBQUNNLE1BQVIsQ0FBZUMsS0FBZixDQUFxQixPQUFyQixDQUFOLENBQ0QsQ0FDRixDQVpJLENBREEsQ0E3Qk8sQ0E2Q2hCQyxTQUFTLENBQUUsQ0FDVEMsVUFBVSxDQUFFLENBQ1Y7QUFDTjtBQUNBO0FBQ0E7QUFDQSxTQUNNQyxVQUFVLENBQUUsQ0FBQ0MsNkVBQUQsQ0FBUUMsOEVBQVIsQ0FBZ0JQLDRFQUFoQixDQU5GLENBREgsQ0E3Q0ssQ0FBbEIsQ0F5RGVqQix3RUFBZiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRoZW1lIGZyb20gXCIuL2NvbXBvbmVudHNcIjtcbmltcG9ydCBpbWFnZSBmcm9tIFwiQGZyb250aXR5L2h0bWwycmVhY3QvcHJvY2Vzc29ycy9pbWFnZVwiO1xuaW1wb3J0IGlmcmFtZSBmcm9tIFwiQGZyb250aXR5L2h0bWwycmVhY3QvcHJvY2Vzc29ycy9pZnJhbWVcIjtcbmltcG9ydCBsaW5rIGZyb20gXCJAZnJvbnRpdHkvaHRtbDJyZWFjdC9wcm9jZXNzb3JzL2xpbmtcIjtcblxuXG5jb25zdCBtYXJzVGhlbWUgPSB7XG4gIG5hbWU6IFwiQGZyb250aXR5L21hcnMtdGhlbWVcIixcbiAgcm9vdHM6IHtcbiAgICAvKipcbiAgICAgKiBJbiBGcm9udGl0eSwgYW55IHBhY2thZ2UgY2FuIGFkZCBSZWFjdCBjb21wb25lbnRzIHRvIHRoZSBzaXRlLlxuICAgICAqIFdlIHVzZSByb290cyBmb3IgdGhhdCwgc2NvcGVkIHRvIHRoZSBgdGhlbWVgIG5hbWVzcGFjZS5cbiAgICAgKi9cbiAgICB0aGVtZTogVGhlbWUsXG4gIH0sXG4gIHN0YXRlOiB7XG4gICAgLyoqXG4gICAgICogU3RhdGUgaXMgd2hlcmUgdGhlIHBhY2thZ2VzIHN0b3JlIHRoZWlyIGRlZmF1bHQgc2V0dGluZ3MgYW5kIG90aGVyXG4gICAgICogcmVsZXZhbnQgc3RhdGUuIEl0IGlzIHNjb3BlZCB0byB0aGUgYHRoZW1lYCBuYW1lc3BhY2UuXG4gICAgICovXG4gICAgdGhlbWU6IHtcbiAgICAgIGF1dG9QcmVmZXRjaDogXCJpbi12aWV3XCIsXG4gICAgICBtZW51OiBbXSxcbiAgICAgIGlzTW9iaWxlTWVudU9wZW46IGZhbHNlLFxuICAgICAgZmVhdHVyZWQ6IHtcbiAgICAgICAgc2hvd09uTGlzdDogZmFsc2UsXG4gICAgICAgIHNob3dPblBvc3Q6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIC8qKlxuICAgKiBBY3Rpb25zIGFyZSBmdW5jdGlvbnMgdGhhdCBtb2RpZnkgdGhlIHN0YXRlIG9yIGRlYWwgd2l0aCBvdGhlciBwYXJ0cyBvZlxuICAgKiBGcm9udGl0eSBsaWtlIGxpYnJhcmllcy5cbiAgICovXG4gIGFjdGlvbnM6IHtcbiAgICB0aGVtZToge1xuICAgICAgdG9nZ2xlTW9iaWxlTWVudTogKHsgc3RhdGUgfSkgPT4ge1xuICAgICAgICBzdGF0ZS50aGVtZS5pc01vYmlsZU1lbnVPcGVuID0gIXN0YXRlLnRoZW1lLmlzTW9iaWxlTWVudU9wZW47XG4gICAgICB9LFxuICAgICAgY2xvc2VNb2JpbGVNZW51OiAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgICAgIHN0YXRlLnRoZW1lLmlzTW9iaWxlTWVudU9wZW4gPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBiZWZvcmVTU1I6IGFzeW5jICh7IHN0YXRlLCBhY3Rpb25zIH0pID0+IHtcbiAgICAgICAgaWYgKHN0YXRlLnJvdXRlci5saW5rID09PSBcIi9cIikge1xuICAgICAgICAgIC8vIFN0b3AgdGhlIHNlcnZlci1zaWRlIHJlbmRlcmluZyAoU1NSKSB1bnRpbCB0aGlzIGlzIHJlYWR5LlxuICAgICAgICAgIGF3YWl0IGFjdGlvbnMuc291cmNlLmZldGNoKFwiL2hvbWVcIik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgbGlicmFyaWVzOiB7XG4gICAgaHRtbDJyZWFjdDoge1xuICAgICAgLyoqXG4gICAgICAgKiBBZGQgYSBwcm9jZXNzb3IgdG8gYGh0bWwycmVhY3RgIHNvIGl0IHByb2Nlc3NlcyB0aGUgYDxpbWc+YCB0YWdzXG4gICAgICAgKiBhbmQgaW50ZXJuYWwgbGluayBpbnNpZGUgdGhlIGNvbnRlbnQgSFRNTC5cbiAgICAgICAqIFlvdSBjYW4gYWRkIHlvdXIgb3duIHByb2Nlc3NvcnMgdG9vLlxuICAgICAgICovXG4gICAgICBwcm9jZXNzb3JzOiBbaW1hZ2UsIGlmcmFtZSwgbGlua10sXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hcnNUaGVtZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/index.js\n");

/***/ })

})