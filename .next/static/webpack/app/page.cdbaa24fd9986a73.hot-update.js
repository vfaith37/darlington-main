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

/***/ "(app-pages-browser)/./app/_components/Portfolio.tsx":
/*!***************************************!*\
  !*** ./app/_components/Portfolio.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Skeleton = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute inset-0 bg-gray-300 animate-pulse\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Work\\\\OneDrive\\\\Desktop\\\\darlington-main\\\\app\\\\_components\\\\Portfolio.tsx\",\n        lineNumber: 5,\n        columnNumber: 3\n    }, undefined);\n_c = Skeleton;\nconst _Portfolio = ()=>{\n    _s();\n    const images = [\n        {\n            src: \"https://i.ibb.co/54V9w6z/IMG-8783r.png\",\n            colSpan: \"col-span-2\",\n            rowSpan: \"row-span-2\"\n        },\n        {\n            src: \"https://i.ibb.co/5MZ6Hgm/IMG-8766r.jpg\",\n            colSpan: \"col-span-1\",\n            rowSpan: \"row-span-1\"\n        },\n        {\n            src: \"https://i.ibb.co/GWD3GwT/IMG-8783.jpg\",\n            colSpan: \"col-span-1\",\n            rowSpan: \"row-span-2\"\n        },\n        {\n            src: \"https://i.ibb.co/qB4MR7Z/IMG-9014.jpg\",\n            colSpan: \"col-span-2\",\n            rowSpan: \"row-span-1\"\n        },\n        {\n            src: \"https://i.ibb.co/XJfgd0M/IMG-8498.jpg\",\n            colSpan: \"col-span-1\",\n            rowSpan: \"row-span-1\"\n        }\n    ];\n    const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Array(images.length).fill(false));\n    const handleImageLoad = (index)=>{\n        setLoaded((prevState)=>{\n            const newState = [\n                ...prevState\n            ];\n            newState[index] = true;\n            return newState;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-5 md:p-10 mt-16\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-center font-gallient text-5xl mb-8\",\n                children: \"Portfolio\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Work\\\\OneDrive\\\\Desktop\\\\darlington-main\\\\app\\\\_components\\\\Portfolio.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-masonry gap-5 lg:gap-8\",\n                children: images.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(image.colSpan, \" \").concat(image.rowSpan, \" relative overflow-hidden\"),\n                        children: [\n                            !loaded[index] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skeleton, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Work\\\\OneDrive\\\\Desktop\\\\darlington-main\\\\app\\\\_components\\\\Portfolio.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 32\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: image.src,\n                                alt: \"Masonry item \".concat(index + 1),\n                                className: \"w-full h-auto object-cover \".concat(loaded[index] ? \"\" : \"hidden\"),\n                                onLoad: ()=>handleImageLoad(index)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Work\\\\OneDrive\\\\Desktop\\\\darlington-main\\\\app\\\\_components\\\\Portfolio.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\Work\\\\OneDrive\\\\Desktop\\\\darlington-main\\\\app\\\\_components\\\\Portfolio.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Work\\\\OneDrive\\\\Desktop\\\\darlington-main\\\\app\\\\_components\\\\Portfolio.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Work\\\\OneDrive\\\\Desktop\\\\darlington-main\\\\app\\\\_components\\\\Portfolio.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(_Portfolio, \"580Ux1ViUPmZqWkbSVpUpMRwNHI=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (_Portfolio);\nvar _c;\n$RefreshReg$(_c, \"Skeleton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9Qb3J0Zm9saW8udHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUN3QztBQUV4QyxNQUFNRSxXQUFxQixrQkFDekIsOERBQUNDO1FBQUlDLFdBQVU7Ozs7OztLQURYRjtBQUlOLE1BQU1HLGFBQXVCOztJQUMzQixNQUFNQyxTQUFnRTtRQUNwRTtZQUFFQyxLQUFLO1lBQTBDQyxTQUFTO1lBQWNDLFNBQVM7UUFBYTtRQUM5RjtZQUFFRixLQUFLO1lBQTBDQyxTQUFTO1lBQWNDLFNBQVM7UUFBYTtRQUM5RjtZQUFFRixLQUFLO1lBQXlDQyxTQUFTO1lBQWNDLFNBQVM7UUFBYTtRQUM3RjtZQUFFRixLQUFLO1lBQXlDQyxTQUFTO1lBQWNDLFNBQVM7UUFBYTtRQUM3RjtZQUFFRixLQUFLO1lBQXlDQyxTQUFTO1lBQWNDLFNBQVM7UUFBYTtLQUM5RjtJQUVELE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHViwrQ0FBUUEsQ0FBWSxJQUFJVyxNQUFNTixPQUFPTyxNQUFNLEVBQUVDLElBQUksQ0FBQztJQUU5RSxNQUFNQyxrQkFBa0IsQ0FBQ0M7UUFDdkJMLFVBQVVNLENBQUFBO1lBQ1IsTUFBTUMsV0FBVzttQkFBSUQ7YUFBVTtZQUMvQkMsUUFBUSxDQUFDRixNQUFNLEdBQUc7WUFDbEIsT0FBT0U7UUFDVDtJQUNGO0lBRUEscUJBQ0UsOERBQUNmO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDZTtnQkFBR2YsV0FBVTswQkFBMEM7Ozs7OzswQkFDeEQsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaRSxPQUFPYyxHQUFHLENBQUMsQ0FBQ0MsT0FBT0wsc0JBQ2xCLDhEQUFDYjt3QkFBZ0JDLFdBQVcsR0FBb0JpQixPQUFqQkEsTUFBTWIsT0FBTyxFQUFDLEtBQWlCLE9BQWRhLE1BQU1aLE9BQU8sRUFBQzs7NEJBQzNELENBQUNDLE1BQU0sQ0FBQ00sTUFBTSxrQkFBSSw4REFBQ2Q7Ozs7OzBDQUNwQiw4REFBQ29CO2dDQUNDZixLQUFLYyxNQUFNZCxHQUFHO2dDQUNkZ0IsS0FBSyxnQkFBMEIsT0FBVlAsUUFBUTtnQ0FDN0JaLFdBQVcsOEJBQTRELE9BQTlCTSxNQUFNLENBQUNNLE1BQU0sR0FBRyxLQUFLO2dDQUM5RFEsUUFBUSxJQUFNVCxnQkFBZ0JDOzs7Ozs7O3VCQU54QkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhcEI7R0FyQ01YO0FBdUNOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9fY29tcG9uZW50cy9Qb3J0Zm9saW8udHN4PzJiZjYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFNrZWxldG9uOiBSZWFjdC5GQyA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JheS0zMDAgYW5pbWF0ZS1wdWxzZVwiIC8+XHJcbik7XHJcblxyXG5jb25zdCBfUG9ydGZvbGlvOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBpbWFnZXM6IHsgc3JjOiBzdHJpbmcsIGNvbFNwYW4/OiBzdHJpbmcsIHJvd1NwYW4/OiBzdHJpbmcgfVtdID0gW1xyXG4gICAgeyBzcmM6IFwiaHR0cHM6Ly9pLmliYi5jby81NFY5dzZ6L0lNRy04Nzgzci5wbmdcIiwgY29sU3BhbjogJ2NvbC1zcGFuLTInLCByb3dTcGFuOiAncm93LXNwYW4tMicgfSxcclxuICAgIHsgc3JjOiBcImh0dHBzOi8vaS5pYmIuY28vNU1aNkhnbS9JTUctODc2NnIuanBnXCIsIGNvbFNwYW46ICdjb2wtc3Bhbi0xJywgcm93U3BhbjogJ3Jvdy1zcGFuLTEnIH0sXHJcbiAgICB7IHNyYzogXCJodHRwczovL2kuaWJiLmNvL0dXRDNHd1QvSU1HLTg3ODMuanBnXCIsIGNvbFNwYW46ICdjb2wtc3Bhbi0xJywgcm93U3BhbjogJ3Jvdy1zcGFuLTInIH0sXHJcbiAgICB7IHNyYzogXCJodHRwczovL2kuaWJiLmNvL3FCNE1SN1ovSU1HLTkwMTQuanBnXCIsIGNvbFNwYW46ICdjb2wtc3Bhbi0yJywgcm93U3BhbjogJ3Jvdy1zcGFuLTEnIH0sXHJcbiAgICB7IHNyYzogXCJodHRwczovL2kuaWJiLmNvL1hKZmdkME0vSU1HLTg0OTguanBnXCIsIGNvbFNwYW46ICdjb2wtc3Bhbi0xJywgcm93U3BhbjogJ3Jvdy1zcGFuLTEnIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlPGJvb2xlYW5bXT4obmV3IEFycmF5KGltYWdlcy5sZW5ndGgpLmZpbGwoZmFsc2UpKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW1hZ2VMb2FkID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgIHNldExvYWRlZChwcmV2U3RhdGUgPT4ge1xyXG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IFsuLi5wcmV2U3RhdGVdO1xyXG4gICAgICBuZXdTdGF0ZVtpbmRleF0gPSB0cnVlO1xyXG4gICAgICByZXR1cm4gbmV3U3RhdGU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgbWQ6cC0xMCBtdC0xNlwiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBmb250LWdhbGxpZW50IHRleHQtNXhsIG1iLTgnPlBvcnRmb2xpbzwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtbWFzb25yeSBnYXAtNSBsZzpnYXAtOFwiPlxyXG4gICAgICAgIHtpbWFnZXMubWFwKChpbWFnZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtgJHtpbWFnZS5jb2xTcGFufSAke2ltYWdlLnJvd1NwYW59IHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbmB9PlxyXG4gICAgICAgICAgICB7IWxvYWRlZFtpbmRleF0gJiYgPFNrZWxldG9uIC8+fVxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZS5zcmN9XHJcbiAgICAgICAgICAgICAgYWx0PXtgTWFzb25yeSBpdGVtICR7aW5kZXggKyAxfWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGgtYXV0byBvYmplY3QtY292ZXIgJHtsb2FkZWRbaW5kZXhdID8gJycgOiAnaGlkZGVuJ31gfVxyXG4gICAgICAgICAgICAgIG9uTG9hZD17KCkgPT4gaGFuZGxlSW1hZ2VMb2FkKGluZGV4KX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfUG9ydGZvbGlvO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNrZWxldG9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiX1BvcnRmb2xpbyIsImltYWdlcyIsInNyYyIsImNvbFNwYW4iLCJyb3dTcGFuIiwibG9hZGVkIiwic2V0TG9hZGVkIiwiQXJyYXkiLCJsZW5ndGgiLCJmaWxsIiwiaGFuZGxlSW1hZ2VMb2FkIiwiaW5kZXgiLCJwcmV2U3RhdGUiLCJuZXdTdGF0ZSIsImgxIiwibWFwIiwiaW1hZ2UiLCJpbWciLCJhbHQiLCJvbkxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/Portfolio.tsx\n"));

/***/ })

});