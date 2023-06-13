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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_getUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/getUser */ \"(app-client)/./lib/getUser.jsx\");\n/* harmony import */ var _lib_getUserPosts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/getUserPosts */ \"(app-client)/./lib/getUserPosts.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction page(param) {\n    let { params  } = param;\n    var _user_address, _user_address1, _user_address2;\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        wait(1000).then(()=>{\n            const fetchingUser = async ()=>{\n                try {\n                    const userData = await (0,_lib_getUser__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(params.id);\n                    const postData = await (0,_lib_getUserPosts__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(params.id);\n                    setUser(userData);\n                    setPosts(postData);\n                    setIsLoading(false);\n                } catch (err) {\n                    setIsLoading(false);\n                }\n            };\n            fetchingUser();\n        });\n    }, []);\n    const wait = async (duration)=>{\n        return new Promise((resolve)=>setTimeout(resolve, duration));\n    };\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"loader\"\n        }, void 0, false, {\n            fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-10 flex flex-col items-center text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-5xl font-bold text-slate-400\",\n                children: [\n                    \"Meet our team member \",\n                    user.name,\n                    \"!\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-bold text-xl text-slate-400\",\n                        children: \"Username:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 12\n                    }, this),\n                    \" \",\n                    user.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-bold text-xl text-slate-400\",\n                        children: \"Email:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 10\n                    }, this),\n                    user.email\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-bold text-xl text-slate-400\",\n                        children: \"Address:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this),\n                    \" \",\n                    \"City: \".concat((_user_address = user.address) === null || _user_address === void 0 ? void 0 : _user_address.city, \". Street: \").concat((_user_address1 = user.address) === null || _user_address1 === void 0 ? void 0 : _user_address1.street, \". Suite: \").concat((_user_address2 = user.address) === null || _user_address2 === void 0 ? void 0 : _user_address2.suite, \".\")\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"btn-outlined\",\n                target: \"_blank\",\n                href: \"https://\".concat(user.website),\n                children: [\n                    \"Visit \",\n                    user.name,\n                    \" website!\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-4xl font-bold text-slate-400 mb-5\",\n                children: [\n                    \"All the \",\n                    user.name,\n                    \"'s posts\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                className: \"space-y-6\",\n                children: posts === null || posts === void 0 ? void 0 : posts.map((post)=>{\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-2xl underline\",\n                                children: [\n                                    post.title[0].toUpperCase(),\n                                    post === null || post === void 0 ? void 0 : post.title.slice(1, post === null || post === void 0 ? void 0 : post.title.length)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"italic w-96\",\n                                children: post.body\n                            }, void 0, false, {\n                                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, post.id, true, {\n                        fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: \"btn\",\n                href: \"/users\",\n                children: \"Go back to users\"\n            }, void 0, false, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: \"btn\",\n                href: \"/\",\n                children: \"Go back to home page\"\n            }, void 0, false, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/meddo/Documents/re-coded/react/playground/next-routing-exercise/app/users/[id]/page.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"XLFVZ4VFkGzOhJ+KTjOh1dn1C9s=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3VzZXJzL1tpZF0vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMyQztBQUNkO0FBQ087QUFDUztBQUU3QyxTQUFTSyxLQUFLLEtBQVU7UUFBVixFQUFFQyxPQUFNLEVBQUUsR0FBVjtRQXdDeUVDLGVBQStCQSxnQkFBZ0NBOztJQXZDcEosTUFBTSxDQUFFQyxXQUFXQyxhQUFjLEdBQUdULCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBRU8sTUFBTUcsUUFBUyxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBRVcsT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUE7SUFFbkNDLGdEQUFTQSxDQUFDO1FBQ1JZLEtBQUssTUFBTUMsS0FDVDtZQUNFLE1BQU1DLGVBQWU7Z0JBQ25CLElBQUc7b0JBQ0QsTUFBTUMsV0FBVyxNQUFNYix3REFBT0EsQ0FBQ0csT0FBT1c7b0JBQ3RDLE1BQU1DLFdBQVcsTUFBTWQsNkRBQVlBLENBQUNFLE9BQU9XO29CQUMzQ1AsUUFBUU07b0JBQ1JKLFNBQVNNO29CQUNUVCxhQUFhO2dCQUNmLEVBQUUsT0FBTVUsS0FBSztvQkFDWFYsYUFBYTtnQkFDZjtZQUNGO1lBQ0FNO1FBQ0Y7SUFHSixHQUFFLEVBQUU7SUFFSixNQUFNRixPQUFPLE9BQU9PO1FBQ2xCLE9BQU8sSUFBSUMsUUFBUUMsQ0FBQUEsVUFBV0MsV0FBV0QsU0FBU0Y7SUFDcEQ7SUFFQSxJQUFHWixXQUFXLHFCQUNaLDhEQUFDZ0I7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7Ozs7Ozs7Ozs7SUFHbkIscUJBQ0UsOERBQUNEO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTs7b0JBQW9DO29CQUFzQmxCLEtBQUtvQjtvQkFBSzs7Ozs7OzswQkFDbEYsOERBQUNDOzs7OzswQkFDRCw4REFBQ0M7O29CQUFHO2tDQUFDLDhEQUFDQzt3QkFBS0wsV0FBVTtrQ0FBbUM7Ozs7OztvQkFBZ0I7b0JBQUVsQixLQUFLb0I7Ozs7Ozs7MEJBQy9FLDhEQUFDSTs7a0NBQUUsOERBQUNEO3dCQUFLTCxXQUFVO2tDQUFtQzs7Ozs7O29CQUFjbEIsS0FBS3lCOzs7Ozs7OzBCQUN6RSw4REFBQ0Q7O29CQUFFO2tDQUFDLDhEQUFDRDt3QkFBS0wsV0FBVTtrQ0FBbUM7Ozs7OztvQkFBZTtvQkFBRyxTQUF1Q2xCLE9BQS9CQSxDQUFBQSxnQkFBQUEsS0FBSzBCLHFCQUFMMUIsMkJBQUFBLEtBQUFBLElBQUFBLGNBQWMyQixNQUFLLGNBQTRDM0IsT0FBaENBLENBQUFBLGlCQUFBQSxLQUFLMEIscUJBQUwxQiw0QkFBQUEsS0FBQUEsSUFBQUEsZUFBYzRCLFFBQU8sYUFBK0IsT0FBcEI1QixDQUFBQSxpQkFBQUEsS0FBSzBCLHFCQUFMMUIsNEJBQUFBLEtBQUFBLElBQUFBLGVBQWM2QixPQUFNOzs7Ozs7OzBCQUNwSyw4REFBQ1I7Ozs7OzBCQUNELDhEQUFDUztnQkFBRVosV0FBVTtnQkFBZWEsUUFBTztnQkFBU0MsTUFBTSxXQUF3QixPQUFiaEMsS0FBS2lDOztvQkFBVztvQkFBT2pDLEtBQUtvQjtvQkFBSzs7Ozs7OzswQkFDOUYsOERBQUNDOzs7OzswQkFBSyw4REFBQ0E7Ozs7OzBCQUNQLDhEQUFDQztnQkFBR0osV0FBVTs7b0JBQXlDO29CQUFTbEIsS0FBS29CO29CQUFLOzs7Ozs7OzBCQUMxRSw4REFBQ2M7Z0JBQUdoQixXQUFVOzBCQUNiZCxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLE1BQU8rQixJQUFJQyxDQUFBQTtrQ0FDVixxRUFBQ0M7d0JBQUduQixXQUFVOzswQ0FDWiw4REFBQ0k7Z0NBQUdKLFdBQVU7O29DQUFzQmtCLEtBQUtFLEtBQUssQ0FBQyxFQUFFLENBQUNDO29DQUFlSCxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1FLE1BQU1FLE1BQU0sR0FBR0osaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNRSxNQUFNRzs7Ozs7OzswQ0FDbEcsOERBQUNqQjtnQ0FBRU4sV0FBVTswQ0FBZWtCLEtBQUtNOzs7Ozs7O3VCQUZhTixLQUFLMUI7Ozs7Ozs7Ozs7OzBCQU12RCw4REFBQ1c7Ozs7OzBCQUNELDhEQUFDMUIsa0RBQUlBO2dCQUFDdUIsV0FBVTtnQkFBTWMsTUFBSzswQkFBUzs7Ozs7OzBCQUNwQyw4REFBQ1g7Ozs7OzBCQUNELDhEQUFDMUIsa0RBQUlBO2dCQUFDdUIsV0FBVTtnQkFBTWMsTUFBSzswQkFBSTs7Ozs7OzBCQUMvQiw4REFBQ1g7Ozs7Ozs7Ozs7O0FBR1A7R0E1RFN2QjtBQThEVCwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdXNlcnMvW2lkXS9wYWdlLmpzeD85ZWJkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBnZXRVc2VyIGZyb20gJ0AvbGliL2dldFVzZXInO1xuaW1wb3J0IGdldFVzZXJQb3N0cyBmcm9tICdAL2xpYi9nZXRVc2VyUG9zdHMnXG5cbmZ1bmN0aW9uIHBhZ2UoeyBwYXJhbXMgfSkge1xuICBjb25zdCBbIGlzTG9hZGluZywgc2V0SXNMb2FkaW5nIF0gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbIHVzZXIsIHNldFVzZXIgXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgWyBwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdhaXQoMTAwMCkudGhlbihcbiAgICAgICgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hpbmdVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgZ2V0VXNlcihwYXJhbXMuaWQpO1xuICAgICAgICAgICAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBnZXRVc2VyUG9zdHMocGFyYW1zLmlkKTtcbiAgICAgICAgICAgIHNldFVzZXIodXNlckRhdGEpO1xuICAgICAgICAgICAgc2V0UG9zdHMocG9zdERhdGEpO1xuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmZXRjaGluZ1VzZXIoKTtcbiAgICAgIH1cbiAgICApXG5cbiAgfSxbXSlcblxuICBjb25zdCB3YWl0ID0gYXN5bmMgKGR1cmF0aW9uKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkdXJhdGlvbikpXG4gIH1cblxuICBpZihpc0xvYWRpbmcpIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xvYWRlcic+PC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIG14LWF1dG8gcHgtMTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXInPlxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC01eGwgZm9udC1ib2xkIHRleHQtc2xhdGUtNDAwJz5NZWV0IG91ciB0ZWFtIG1lbWJlciB7dXNlci5uYW1lfSE8L2gxPlxuICAgICAgPGJyIC8+XG4gICAgICA8aDM+IDxzcGFuIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQteGwgdGV4dC1zbGF0ZS00MDAnPlVzZXJuYW1lOjwvc3Bhbj4ge3VzZXIubmFtZX08L2gzPlxuICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC14bCB0ZXh0LXNsYXRlLTQwMCc+RW1haWw6PC9zcGFuPnt1c2VyLmVtYWlsfTwvcD5cbiAgICAgIDxwPiA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LXhsIHRleHQtc2xhdGUtNDAwJz5BZGRyZXNzOjwvc3Bhbj4ge2BDaXR5OiAke3VzZXIuYWRkcmVzcz8uY2l0eX0uIFN0cmVldDogJHt1c2VyLmFkZHJlc3M/LnN0cmVldH0uIFN1aXRlOiAke3VzZXIuYWRkcmVzcz8uc3VpdGV9LmB9PC9wPlxuICAgICAgPGJyIC8+XG4gICAgICA8YSBjbGFzc05hbWU9J2J0bi1vdXRsaW5lZCcgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9e2BodHRwczovLyR7dXNlci53ZWJzaXRlfWB9PlZpc2l0IHt1c2VyLm5hbWV9IHdlYnNpdGUhPC9hPlxuICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICA8aDMgY2xhc3NOYW1lPSd0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1zbGF0ZS00MDAgbWItNSc+QWxsIHRoZSB7dXNlci5uYW1lfSdzIHBvc3RzPC9oMz5cbiAgICAgIDxvbCBjbGFzc05hbWU9J3NwYWNlLXktNic+XG4gICAgICB7cG9zdHM/Lm1hcChwb3N0ID0+IChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXInIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC0yeGwgdW5kZXJsaW5lJz57cG9zdC50aXRsZVswXS50b1VwcGVyQ2FzZSgpfXtwb3N0Py50aXRsZS5zbGljZSgxLCBwb3N0Py50aXRsZS5sZW5ndGgpfTwvaDM+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdpdGFsaWMgdy05Nic+e3Bvc3QuYm9keX08L3A+XG4gICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC9vbD5cbiAgICAgIDxiciAvPlxuICAgICAgPExpbmsgY2xhc3NOYW1lPSdidG4nIGhyZWY9Jy91c2Vycyc+R28gYmFjayB0byB1c2VyczwvTGluaz5cbiAgICAgIDxiciAvPlxuICAgICAgPExpbmsgY2xhc3NOYW1lPSdidG4nIGhyZWY9Jy8nPkdvIGJhY2sgdG8gaG9tZSBwYWdlPC9MaW5rPlxuICAgICAgPGJyIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGFnZVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsImdldFVzZXIiLCJnZXRVc2VyUG9zdHMiLCJwYWdlIiwicGFyYW1zIiwidXNlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInNldFVzZXIiLCJwb3N0cyIsInNldFBvc3RzIiwid2FpdCIsInRoZW4iLCJmZXRjaGluZ1VzZXIiLCJ1c2VyRGF0YSIsImlkIiwicG9zdERhdGEiLCJlcnIiLCJkdXJhdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibmFtZSIsImJyIiwiaDMiLCJzcGFuIiwicCIsImVtYWlsIiwiYWRkcmVzcyIsImNpdHkiLCJzdHJlZXQiLCJzdWl0ZSIsImEiLCJ0YXJnZXQiLCJocmVmIiwid2Vic2l0ZSIsIm9sIiwibWFwIiwicG9zdCIsImxpIiwidGl0bGUiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwibGVuZ3RoIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/users/[id]/page.jsx\n"));

/***/ })

});