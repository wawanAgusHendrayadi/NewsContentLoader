webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./pages/commonAction/index.js":
/*!*************************************!*\
  !*** ./pages/commonAction/index.js ***!
  \*************************************/
/*! exports provided: loadingAction, doneLoadingAction, FailedAction, setData, setTotalArticles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingAction", function() { return loadingAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doneLoadingAction", function() { return doneLoadingAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailedAction", function() { return FailedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setData", function() { return setData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTotalArticles", function() { return setTotalArticles; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../const */ "./pages/const/index.js");

var loadingAction = function loadingAction() {
  return {
    type: _const__WEBPACK_IMPORTED_MODULE_0__["default"].START_LOADING
  };
};
var doneLoadingAction = function doneLoadingAction() {
  return {
    type: _const__WEBPACK_IMPORTED_MODULE_0__["default"].DONE_LOADING
  };
};
var FailedAction = function FailedAction(message) {
  return {
    type: _const__WEBPACK_IMPORTED_MODULE_0__["default"].ACTION_FAILED,
    message: message
  };
};
var setData = function setData(payload) {
  return {
    type: _const__WEBPACK_IMPORTED_MODULE_0__["default"].SET_ARTICLES,
    payload: payload
  };
};
var setTotalArticles = function setTotalArticles(payload) {
  return {
    type: _const__WEBPACK_IMPORTED_MODULE_0__["default"].SET_TOTAL_ARTICLES,
    payload: payload
  };
};

/***/ })

})
//# sourceMappingURL=home.js.2899aadccc6e299b2647.hot-update.js.map