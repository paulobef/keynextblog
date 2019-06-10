webpackHotUpdate(3,{

/***/ "./components/ListItem.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = '/Users/paulbeffa/projects/keynextblog/components/ListItem.js';

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();




var listItem = function listItem(props) {

    var image = "url(" + props.image + ")";

    var cardStyle = {
        width: "100%",
        height: "300px",
        backgroundImage: image,
        backgroundSize: "100%",
        backgroundPosition: "center"
    };
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
        { href: '/post/' + props.slug, __source: {
                fileName: _jsxFileName,
                lineNumber: 16
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'card col-sm-6 p-3 border-0  ', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'card-img-top', style: cardStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'footer mt-3', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h2',
                    { className: 'card-title', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    },
                    props.title
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'card-text', dangerouslySetInnerHTML: { __html: props.content }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                })
            )
        )
    );
};

var _default = listItem;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(listItem, 'listItem', '/Users/paulbeffa/projects/keynextblog/components/ListItem.js');
    reactHotLoader.register(_default, 'default', '/Users/paulbeffa/projects/keynextblog/components/ListItem.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.284a93a1c0ce387f25ef.hot-update.js.map