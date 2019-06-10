webpackHotUpdate(3,{

/***/ "./components/Jumbo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/paulbeffa/projects/keynextblog/components/Jumbo.js";

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();



var Jumbo = function Jumbo(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { "class": "jumbotron p-3 mt-5 p-md-5 text-white rounded bg-dark h-500", __source: {
                fileName: _jsxFileName,
                lineNumber: 5
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { "class": "col-md-6 px-0", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 6
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "h1",
                { "class": "display-4 font-italic", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 7
                    }
                },
                props.title
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                { "class": "lead my-3", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8
                    }
                },
                props.lead
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                { "class": "lead mb-0", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 9
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "a",
                    { href: props.link, "class": "text-white font-weight-bold", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 9
                        }
                    },
                    props.linkText
                )
            )
        )
    );
};

var _default = Jumbo;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Jumbo, "Jumbo", "/Users/paulbeffa/projects/keynextblog/components/Jumbo.js");
    reactHotLoader.register(_default, "default", "/Users/paulbeffa/projects/keynextblog/components/Jumbo.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.de673f8660cbbff0998c.hot-update.js.map