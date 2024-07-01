"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/_components/Physical.tsx":
/*!**************************************!*\
  !*** ./app/_components/Physical.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/.pnpm/framer-motion@11.2.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/utils/use-in-view.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/.pnpm/framer-motion@11.2.12_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst physicStats = [\n    {\n        title: \"Height\",\n        value: \"6 FT\"\n    },\n    {\n        title: \"Suit\",\n        value: \"39/40R M\"\n    },\n    {\n        title: \"Eyes\",\n        value: \"Brown\"\n    },\n    {\n        title: \"Waist\",\n        value: \"32''\"\n    },\n    {\n        title: \"Shirt\",\n        value: \"Medium\"\n    },\n    {\n        title: \"Shoe\",\n        value: \"42/43\"\n    },\n    {\n        title: \"Pants\",\n        value: \"41''\"\n    },\n    {\n        title: \"Hair\",\n        value: \"Black\"\n    }\n];\nconst Physical = ()=>{\n    _s();\n    const physicalRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const statsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const isPhysicalInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useInView)(physicalRef);\n    const isStatsInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useInView)(statsRef);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: physicalRef,\n        className: \"my-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col sm:flex-row sm:gap-2 lg:gap-10 xl:gap-20 justify-center items-center w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    initial: {\n                        opacity: 0,\n                        scale: 0.5\n                    },\n                    animate: {\n                        opacity: isPhysicalInView ? 1 : 0,\n                        scale: isPhysicalInView ? 1 : 0.5\n                    },\n                    transition: {\n                        ease: \"linear\",\n                        duration: 2\n                    },\n                    className: \"mb-4 sm:mb-0 w-[230px]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        width: 389,\n                        height: 538,\n                        className: \"h-auto w-[230px] max-w-full rounded-lg\",\n                        src: \"/PhysicalStats.jpg\",\n                        alt: \"Physical Stats Image\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Work\\\\OneDrive\\\\Desktop\\\\darlington-main\\\\app\\\\_components\\\\Physical.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Work\\\\OneDrive\\\\Desktop\\\\darlington-main\\\\app\\\\_components\\\\Physical.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    ref: statsRef,\n                    initial: {\n                        opacity: 0,\n                        scale: 0.5\n                    },\n                    animate: {\n                        opacity: isStatsInView ? 1 : 0,\n                        scale: isStatsInView ? 1 : 0.5\n                    },\n                    transition: {\n                        ease: \"linear\",\n                        duration: 2\n                    },\n                    className: \"font-satoshi pt-12 w-[232px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-gallient text-4xl mb-9\",\n                            children: \"Physical Stats\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Work\\\\OneDrive\\\\Desktop\\\\darlington-main\\\\app\\\\_components\\\\Physical.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 6\n                        }, undefined),\n                        physicStats.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between mb-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"font-light\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Work\\\\OneDrive\\\\Desktop\\\\darlington-main\\\\app\\\\_components\\\\Physical.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-medium font-satoshi\",\n                                        children: item.value\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Work\\\\OneDrive\\\\Desktop\\\\darlington-main\\\\app\\\\_components\\\\Physical.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\Work\\\\OneDrive\\\\Desktop\\\\darlington-main\\\\app\\\\_components\\\\Physical.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 7\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Work\\\\OneDrive\\\\Desktop\\\\darlington-main\\\\app\\\\_components\\\\Physical.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Work\\\\OneDrive\\\\Desktop\\\\darlington-main\\\\app\\\\_components\\\\Physical.tsx\",\n            lineNumber: 29,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Work\\\\OneDrive\\\\Desktop\\\\darlington-main\\\\app\\\\_components\\\\Physical.tsx\",\n        lineNumber: 28,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Physical, \"cZA22+JA7SGiVbNuQz8p3wOF7eg=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useInView,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useInView\n    ];\n});\n_c = Physical;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Physical);\nvar _c;\n$RefreshReg$(_c, \"Physical\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9QaHlzaWNhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtEO0FBQ25CO0FBQ087QUFPdEMsTUFBTUssY0FBd0I7SUFDN0I7UUFBRUMsT0FBTztRQUFVQyxPQUFPO0lBQU87SUFDakM7UUFBRUQsT0FBTztRQUFRQyxPQUFPO0lBQVc7SUFDbkM7UUFBRUQsT0FBTztRQUFRQyxPQUFPO0lBQVE7SUFDaEM7UUFBRUQsT0FBTztRQUFTQyxPQUFPO0lBQU87SUFDaEM7UUFBRUQsT0FBTztRQUFTQyxPQUFPO0lBQVM7SUFDbEM7UUFBRUQsT0FBTztRQUFRQyxPQUFPO0lBQVE7SUFDaEM7UUFBRUQsT0FBTztRQUFTQyxPQUFPO0lBQU87SUFDaEM7UUFBRUQsT0FBTztRQUFRQyxPQUFPO0lBQVE7Q0FDaEM7QUFFRCxNQUFNQyxXQUFXOztJQUNoQixNQUFNQyxjQUFjTCw2Q0FBTUEsQ0FBQztJQUMzQixNQUFNTSxXQUFXTiw2Q0FBTUEsQ0FBQztJQUN4QixNQUFNTyxtQkFBbUJWLHdEQUFTQSxDQUFDUTtJQUNuQyxNQUFNRyxnQkFBZ0JYLHdEQUFTQSxDQUFDUztJQUVoQyxxQkFDQyw4REFBQ0c7UUFBSUMsS0FBS0w7UUFBYU0sV0FBVTtrQkFDaEMsNEVBQUNGO1lBQUlFLFdBQVU7OzhCQUNkLDhEQUFDZixpREFBTUEsQ0FBQ2EsR0FBRztvQkFDVkcsU0FBUzt3QkFBRUMsU0FBUzt3QkFBR0MsT0FBTztvQkFBSTtvQkFDbENDLFNBQVM7d0JBQUVGLFNBQVNOLG1CQUFtQixJQUFJO3dCQUFHTyxPQUFPUCxtQkFBbUIsSUFBSTtvQkFBSTtvQkFDaEZTLFlBQVk7d0JBQUVDLE1BQU07d0JBQVVDLFVBQVU7b0JBQUU7b0JBQzFDUCxXQUFVOzhCQUVWLDRFQUFDYixrREFBS0E7d0JBQ0xxQixPQUFPO3dCQUNQQyxRQUFRO3dCQUNSVCxXQUFVO3dCQUNWVSxLQUFJO3dCQUNKQyxLQUFJOzs7Ozs7Ozs7Ozs4QkFHTiw4REFBQzFCLGlEQUFNQSxDQUFDYSxHQUFHO29CQUNWQyxLQUFLSjtvQkFDTE0sU0FBUzt3QkFBRUMsU0FBUzt3QkFBR0MsT0FBTztvQkFBSTtvQkFDbENDLFNBQVM7d0JBQUVGLFNBQVNMLGdCQUFnQixJQUFJO3dCQUFHTSxPQUFPTixnQkFBZ0IsSUFBSTtvQkFBSTtvQkFDMUVRLFlBQVk7d0JBQUVDLE1BQU07d0JBQVVDLFVBQVU7b0JBQUU7b0JBQzFDUCxXQUFVOztzQ0FFViw4REFBQ1k7NEJBQUVaLFdBQVU7c0NBQThCOzs7Ozs7d0JBQzFDVixZQUFZdUIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUN2Qiw4REFBQ2pCO2dDQUFnQkUsV0FBVTs7a0RBQzFCLDhEQUFDZ0I7d0NBQUdoQixXQUFVO2tEQUFjYyxLQUFLdkIsS0FBSzs7Ozs7O2tEQUN0Qyw4REFBQ3FCO3dDQUFFWixXQUFVO2tEQUE0QmMsS0FBS3RCLEtBQUs7Ozs7Ozs7K0JBRjFDdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTaEI7R0F6Q010Qjs7UUFHb0JQLG9EQUFTQTtRQUNaQSxvREFBU0E7OztLQUoxQk87QUEyQ04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL19jb21wb25lbnRzL1BoeXNpY2FsLnRzeD9mZTM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiwgdXNlSW5WaWV3IH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBQaHlzaWMge1xyXG5cdHRpdGxlOiBzdHJpbmc7XHJcblx0dmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgcGh5c2ljU3RhdHM6IFBoeXNpY1tdID0gW1xyXG5cdHsgdGl0bGU6IFwiSGVpZ2h0XCIsIHZhbHVlOiBcIjYgRlRcIiB9LFxyXG5cdHsgdGl0bGU6IFwiU3VpdFwiLCB2YWx1ZTogXCIzOS80MFIgTVwiIH0sXHJcblx0eyB0aXRsZTogXCJFeWVzXCIsIHZhbHVlOiBcIkJyb3duXCIgfSxcclxuXHR7IHRpdGxlOiBcIldhaXN0XCIsIHZhbHVlOiBcIjMyJydcIiB9LFxyXG5cdHsgdGl0bGU6IFwiU2hpcnRcIiwgdmFsdWU6IFwiTWVkaXVtXCIgfSxcclxuXHR7IHRpdGxlOiBcIlNob2VcIiwgdmFsdWU6IFwiNDIvNDNcIiB9LFxyXG5cdHsgdGl0bGU6IFwiUGFudHNcIiwgdmFsdWU6IFwiNDEnJ1wiIH0sXHJcblx0eyB0aXRsZTogXCJIYWlyXCIsIHZhbHVlOiBcIkJsYWNrXCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IFBoeXNpY2FsID0gKCkgPT4ge1xyXG5cdGNvbnN0IHBoeXNpY2FsUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cdGNvbnN0IHN0YXRzUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cdGNvbnN0IGlzUGh5c2ljYWxJblZpZXcgPSB1c2VJblZpZXcocGh5c2ljYWxSZWYpO1xyXG5cdGNvbnN0IGlzU3RhdHNJblZpZXcgPSB1c2VJblZpZXcoc3RhdHNSZWYpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiByZWY9e3BoeXNpY2FsUmVmfSBjbGFzc05hbWU9XCJteS04XCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBzbTpnYXAtMiBsZzpnYXAtMTAgeGw6Z2FwLTIwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cclxuXHRcdFx0XHQ8bW90aW9uLmRpdlxyXG5cdFx0XHRcdFx0aW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC41IH19XHJcblx0XHRcdFx0XHRhbmltYXRlPXt7IG9wYWNpdHk6IGlzUGh5c2ljYWxJblZpZXcgPyAxIDogMCwgc2NhbGU6IGlzUGh5c2ljYWxJblZpZXcgPyAxIDogMC41IH19XHJcblx0XHRcdFx0XHR0cmFuc2l0aW9uPXt7IGVhc2U6IFwibGluZWFyXCIsIGR1cmF0aW9uOiAyIH19XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJtYi00IHNtOm1iLTAgdy1bMjMwcHhdXCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0d2lkdGg9ezM4OX1cclxuXHRcdFx0XHRcdFx0aGVpZ2h0PXs1Mzh9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImgtYXV0byB3LVsyMzBweF0gbWF4LXctZnVsbCByb3VuZGVkLWxnXCJcclxuXHRcdFx0XHRcdFx0c3JjPVwiL1BoeXNpY2FsU3RhdHMuanBnXCJcclxuXHRcdFx0XHRcdFx0YWx0PVwiUGh5c2ljYWwgU3RhdHMgSW1hZ2VcIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XHJcblx0XHRcdFx0PG1vdGlvbi5kaXZcclxuXHRcdFx0XHRcdHJlZj17c3RhdHNSZWZ9XHJcblx0XHRcdFx0XHRpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjUgfX1cclxuXHRcdFx0XHRcdGFuaW1hdGU9e3sgb3BhY2l0eTogaXNTdGF0c0luVmlldyA/IDEgOiAwLCBzY2FsZTogaXNTdGF0c0luVmlldyA/IDEgOiAwLjUgfX1cclxuXHRcdFx0XHRcdHRyYW5zaXRpb249e3sgZWFzZTogXCJsaW5lYXJcIiwgZHVyYXRpb246IDIgfX1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvbnQtc2F0b3NoaSBwdC0xMiB3LVsyMzJweF1cIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvbnQtZ2FsbGllbnQgdGV4dC00eGwgbWItOVwiPlBoeXNpY2FsIFN0YXRzPC9wPlxyXG5cdFx0XHRcdFx0e3BoeXNpY1N0YXRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0PGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtYi02XCI+XHJcblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImZvbnQtbGlnaHRcIj57aXRlbS50aXRsZX08L2gxPlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIGZvbnQtc2F0b3NoaVwiPntpdGVtLnZhbHVlfTwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBoeXNpY2FsO1xyXG4iXSwibmFtZXMiOlsibW90aW9uIiwidXNlSW5WaWV3IiwiSW1hZ2UiLCJSZWFjdCIsInVzZVJlZiIsInBoeXNpY1N0YXRzIiwidGl0bGUiLCJ2YWx1ZSIsIlBoeXNpY2FsIiwicGh5c2ljYWxSZWYiLCJzdGF0c1JlZiIsImlzUGh5c2ljYWxJblZpZXciLCJpc1N0YXRzSW5WaWV3IiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJzY2FsZSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImR1cmF0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJhbHQiLCJwIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/Physical.tsx\n"));

/***/ })

});