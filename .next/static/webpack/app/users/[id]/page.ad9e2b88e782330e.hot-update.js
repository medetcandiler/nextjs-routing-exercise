"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/users/[id]/page",{

/***/ "(app-client)/./app/users/[id]/page.jsx":
/*!*********************************!*\
  !*** ./app/users/[id]/page.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_getUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/getUser */ \"(app-client)/./lib/getUser.jsx\");\n/* harmony import */ var _lib_getUserPosts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/getUserPosts */ \"(app-client)/./lib/getUserPosts.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction page(param) {\n    let { params  } = param;\n    var _user_address, _user_address1, _user_address2;\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        wait(1000).then(()=>{\n            const fetchingUser = async ()=>{\n                try {\n                    const userData = await (0,_lib_getUser__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(params.id);\n                    const postData = await (0,_lib_getUserPosts__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(params.id);\n                    setUser(userData);\n                    setPosts(postData);\n                    setIsLoading(false);\n                } catch (err) {\n                    setIsLoading(false);\n                }\n            };\n            fetchingUser();\n        });\n    }, []);\n    const wait = async (duration)=>{\n        return new Promise((resolve)=>setTimeout(resolve, duration));\n    };\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"loader\"\n        }, void 0, false, {\n            fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-10 flex flex-col items-center text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-5xl font-bold text-slate-400\",\n                children: [\n                    \"Meet our team member \",\n                    user.name,\n                    \"!\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-bold text-xl text-slate-400\",\n                        children: \"Username:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 12\n                    }, this),\n                    \" \",\n                    user.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-bold text-xl text-slate-400\",\n                        children: \"Email:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 10\n                    }, this),\n                    user.email\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-bold text-xl text-slate-400\",\n                        children: \"Address:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this),\n                    \" \",\n                    \"City: \".concat((_user_address = user.address) === null || _user_address === void 0 ? void 0 : _user_address.city, \". Street: \").concat((_user_address1 = user.address) === null || _user_address1 === void 0 ? void 0 : _user_address1.street, \". Suite: \").concat((_user_address2 = user.address) === null || _user_address2 === void 0 ? void 0 : _user_address2.suite, \".\")\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"btn-outlined\",\n                target: \"_blank\",\n                href: \"https://\".concat(user.website),\n                children: [\n                    \"Visit \",\n                    user.name,\n                    \" website!\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-4xl font-bold text-slate-400 mb-5\",\n                children: [\n                    \"All the \",\n                    user.name,\n                    \"'s posts\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                className: \"space-y-6\",\n                children: posts === null || posts === void 0 ? void 0 : posts.map((post)=>{\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-2xl underline\",\n                                children: [\n                                    post.title[0].toUpperCase(),\n                                    post === null || post === void 0 ? void 0 : post.title.slice(1, post === null || post === void 0 ? void 0 : post.title.length)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"italic\",\n                                children: post.body\n                            }, void 0, false, {\n                                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, post.id, true, {\n                        fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: \"btn\",\n                href: \"/users\",\n                children: \"Go back to users\"\n            }, void 0, false, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: \"btn\",\n                href: \"/\",\n                children: \"Go back to home page\"\n            }, void 0, false, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"XLFVZ4VFkGzOhJ+KTjOh1dn1C9s=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3VzZXJzL1tpZF0vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMyQztBQUNkO0FBQ087QUFDUztBQUU3QyxTQUFTSyxLQUFLLEtBQVU7UUFBVixFQUFFQyxPQUFNLEVBQUUsR0FBVjtRQXdDeUVDLGVBQStCQSxnQkFBZ0NBOztJQXZDcEosTUFBTSxDQUFFQyxXQUFXQyxhQUFjLEdBQUdULCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBRU8sTUFBTUcsUUFBUyxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBRVcsT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUE7SUFFbkNDLGdEQUFTQSxDQUFDO1FBQ1JZLEtBQUssTUFBTUMsS0FDVDtZQUNFLE1BQU1DLGVBQWU7Z0JBQ25CLElBQUc7b0JBQ0QsTUFBTUMsV0FBVyxNQUFNYix3REFBT0EsQ0FBQ0csT0FBT1c7b0JBQ3RDLE1BQU1DLFdBQVcsTUFBTWQsNkRBQVlBLENBQUNFLE9BQU9XO29CQUMzQ1AsUUFBUU07b0JBQ1JKLFNBQVNNO29CQUNUVCxhQUFhO2dCQUNmLEVBQUUsT0FBTVUsS0FBSztvQkFDWFYsYUFBYTtnQkFDZjtZQUNGO1lBQ0FNO1FBQ0Y7SUFHSixHQUFFLEVBQUU7SUFFSixNQUFNRixPQUFPLE9BQU9PO1FBQ2xCLE9BQU8sSUFBSUMsUUFBUUMsQ0FBQUEsVUFBV0MsV0FBV0QsU0FBU0Y7SUFDcEQ7SUFFQSxJQUFHWixXQUFXLHFCQUNaLDhEQUFDZ0I7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7Ozs7Ozs7Ozs7SUFHbkIscUJBQ0UsOERBQUNEO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTs7b0JBQW9DO29CQUFzQmxCLEtBQUtvQjtvQkFBSzs7Ozs7OzswQkFDbEYsOERBQUNDOzs7OzswQkFDRCw4REFBQ0M7O29CQUFHO2tDQUFDLDhEQUFDQzt3QkFBS0wsV0FBVTtrQ0FBbUM7Ozs7OztvQkFBZ0I7b0JBQUVsQixLQUFLb0I7Ozs7Ozs7MEJBQy9FLDhEQUFDSTs7a0NBQUUsOERBQUNEO3dCQUFLTCxXQUFVO2tDQUFtQzs7Ozs7O29CQUFjbEIsS0FBS3lCOzs7Ozs7OzBCQUN6RSw4REFBQ0Q7O29CQUFFO2tDQUFDLDhEQUFDRDt3QkFBS0wsV0FBVTtrQ0FBbUM7Ozs7OztvQkFBZTtvQkFBRyxTQUF1Q2xCLE9BQS9CQSxDQUFBQSxnQkFBQUEsS0FBSzBCLHFCQUFMMUIsMkJBQUFBLEtBQUFBLElBQUFBLGNBQWMyQixNQUFLLGNBQTRDM0IsT0FBaENBLENBQUFBLGlCQUFBQSxLQUFLMEIscUJBQUwxQiw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBYzRCLFFBQU8sYUFBK0IsT0FBcEI1QixDQUFBQSxpQkFBQUEsS0FBSzBCLHFCQUFMMUIsNEJBQUFBLEtBQUFBLElBQUFBLGVBQWM2QixPQUFNOzs7Ozs7OzBCQUNwSyw4REFBQ1I7Ozs7OzBCQUNELDhEQUFDUztnQkFBRVosV0FBVTtnQkFBZWEsUUFBTztnQkFBU0MsTUFBTSxXQUF3QixPQUFiaEMsS0FBS2lDOztvQkFBVztvQkFBT2pDLEtBQUtvQjtvQkFBSzs7Ozs7OzswQkFDOUYsOERBQUNDOzs7OzswQkFBSyw4REFBQ0E7Ozs7OzBCQUNQLDhEQUFDQztnQkFBR0osV0FBVTs7b0JBQXlDO29CQUFTbEIsS0FBS29CO29CQUFLOzs7Ozs7OzBCQUMxRSw4REFBQ2M7Z0JBQUdoQixXQUFVOzBCQUNiZCxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU8rQixJQUFJQyxDQUFBQTtrQ0FDVixxRUFBQ0M7d0JBQUduQixXQUFVOzswQ0FDWiw4REFBQ0k7Z0NBQUdKLFdBQVU7O29DQUFzQmtCLEtBQUtFLEtBQUssQ0FBQyxFQUFFLENBQUNDO29DQUFlSCxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1FLE1BQU1FLE1BQU0sR0FBR0osaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNRSxNQUFNRzs7Ozs7OzswQ0FDbEcsOERBQUNqQjtnQ0FBRU4sV0FBVTswQ0FBVWtCLEtBQUtNOzs7Ozs7O3VCQUZrQk4sS0FBSzFCOzs7Ozs7Ozs7OzswQkFNdkQsOERBQUNXOzs7OzswQkFDRCw4REFBQzFCLGtEQUFJQTtnQkFBQ3VCLFdBQVU7Z0JBQU1jLE1BQUs7MEJBQVM7Ozs7OzswQkFDcEMsOERBQUNYOzs7OzswQkFDRCw4REFBQzFCLGtEQUFJQTtnQkFBQ3VCLFdBQVU7Z0JBQU1jLE1BQUs7MEJBQUk7Ozs7OzswQkFDL0IsOERBQUNYOzs7Ozs7Ozs7OztBQUdQO0dBNURTdkI7QUE4RFQsK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3VzZXJzL1tpZF0vcGFnZS5qc3g/OWViZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgZ2V0VXNlciBmcm9tICdAL2xpYi9nZXRVc2VyJztcbmltcG9ydCBnZXRVc2VyUG9zdHMgZnJvbSAnQC9saWIvZ2V0VXNlclBvc3RzJ1xuXG5mdW5jdGlvbiBwYWdlKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgWyBpc0xvYWRpbmcsIHNldElzTG9hZGluZyBdID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgWyB1c2VyLCBzZXRVc2VyIF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFsgcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3YWl0KDEwMDApLnRoZW4oXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoaW5nVXNlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IGdldFVzZXIocGFyYW1zLmlkKTtcbiAgICAgICAgICAgIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgZ2V0VXNlclBvc3RzKHBhcmFtcy5pZCk7XG4gICAgICAgICAgICBzZXRVc2VyKHVzZXJEYXRhKTtcbiAgICAgICAgICAgIHNldFBvc3RzKHBvc3REYXRhKTtcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hpbmdVc2VyKCk7XG4gICAgICB9XG4gICAgKVxuXG4gIH0sW10pXG5cbiAgY29uc3Qgd2FpdCA9IGFzeW5jIChkdXJhdGlvbikgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgZHVyYXRpb24pKVxuICB9XG5cbiAgaWYoaXNMb2FkaW5nKSByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2FkZXInPjwvZGl2PlxuICAgIDwvZGl2PlxuICApXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBteC1hdXRvIHB4LTEwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyJz5cbiAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LXNsYXRlLTQwMCc+TWVldCBvdXIgdGVhbSBtZW1iZXIge3VzZXIubmFtZX0hPC9oMT5cbiAgICAgIDxiciAvPlxuICAgICAgPGgzPiA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LXhsIHRleHQtc2xhdGUtNDAwJz5Vc2VybmFtZTo8L3NwYW4+IHt1c2VyLm5hbWV9PC9oMz5cbiAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQteGwgdGV4dC1zbGF0ZS00MDAnPkVtYWlsOjwvc3Bhbj57dXNlci5lbWFpbH08L3A+XG4gICAgICA8cD4gPHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC14bCB0ZXh0LXNsYXRlLTQwMCc+QWRkcmVzczo8L3NwYW4+IHtgQ2l0eTogJHt1c2VyLmFkZHJlc3M/LmNpdHl9LiBTdHJlZXQ6ICR7dXNlci5hZGRyZXNzPy5zdHJlZXR9LiBTdWl0ZTogJHt1c2VyLmFkZHJlc3M/LnN1aXRlfS5gfTwvcD5cbiAgICAgIDxiciAvPlxuICAgICAgPGEgY2xhc3NOYW1lPSdidG4tb3V0bGluZWQnIHRhcmdldD0nX2JsYW5rJyBocmVmPXtgaHR0cHM6Ly8ke3VzZXIud2Vic2l0ZX1gfT5WaXNpdCB7dXNlci5uYW1lfSB3ZWJzaXRlITwvYT5cbiAgICAgIDxiciAvPjxiciAvPlxuICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC00eGwgZm9udC1ib2xkIHRleHQtc2xhdGUtNDAwIG1iLTUnPkFsbCB0aGUge3VzZXIubmFtZX0ncyBwb3N0czwvaDM+XG4gICAgICA8b2wgY2xhc3NOYW1lPSdzcGFjZS15LTYnPlxuICAgICAge3Bvc3RzPy5tYXAocG9zdCA9PiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyJyBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtMnhsIHVuZGVybGluZSc+e3Bvc3QudGl0bGVbMF0udG9VcHBlckNhc2UoKX17cG9zdD8udGl0bGUuc2xpY2UoMSwgcG9zdD8udGl0bGUubGVuZ3RoKX08L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0naXRhbGljJz57cG9zdC5ib2R5fTwvcD5cbiAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L29sPlxuICAgICAgPGJyIC8+XG4gICAgICA8TGluayBjbGFzc05hbWU9J2J0bicgaHJlZj0nL3VzZXJzJz5HbyBiYWNrIHRvIHVzZXJzPC9MaW5rPlxuICAgICAgPGJyIC8+XG4gICAgICA8TGluayBjbGFzc05hbWU9J2J0bicgaHJlZj0nLyc+R28gYmFjayB0byBob21lIHBhZ2U8L0xpbms+XG4gICAgICA8YnIgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMaW5rIiwiZ2V0VXNlciIsImdldFVzZXJQb3N0cyIsInBhZ2UiLCJwYXJhbXMiLCJ1c2VyIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic2V0VXNlciIsInBvc3RzIiwic2V0UG9zdHMiLCJ3YWl0IiwidGhlbiIsImZldGNoaW5nVXNlciIsInVzZXJEYXRhIiwiaWQiLCJwb3N0RGF0YSIsImVyciIsImR1cmF0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJuYW1lIiwiYnIiLCJoMyIsInNwYW4iLCJwIiwiZW1haWwiLCJhZGRyZXNzIiwiY2l0eSIsInN0cmVldCIsInN1aXRlIiwiYSIsInRhcmdldCIsImhyZWYiLCJ3ZWJzaXRlIiwib2wiLCJtYXAiLCJwb3N0IiwibGkiLCJ0aXRsZSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJsZW5ndGgiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/users/[id]/page.jsx\n"));

/***/ })

});