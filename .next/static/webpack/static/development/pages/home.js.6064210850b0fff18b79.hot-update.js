webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./pages/Menu/index.js":
/*!*****************************!*\
  !*** ./pages/Menu/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _HocWrappers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../HocWrappers */ "./pages/HocWrappers.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Component */ "./pages/Menu/Component.js");






var mapStateToProps = function mapStateToProps(state) {
  var _state$Content = state.Content,
      page = _state$Content.page,
      pageSize = _state$Content.pageSize,
      totalArticle = _state$Content.totalArticle,
      dataArticles = _state$Content.dataArticles,
      loading = _state$Content.loading;
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    page: page,
    pageSize: pageSize,
    totalArticle: totalArticle,
    dataArticles: dataArticles,
    loading: loading
  });
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps), _HocWrappers__WEBPACK_IMPORTED_MODULE_3__["default"])(_Component__WEBPACK_IMPORTED_MODULE_4__["default"]));

/***/ })

})
//# sourceMappingURL=home.js.6064210850b0fff18b79.hot-update.js.map