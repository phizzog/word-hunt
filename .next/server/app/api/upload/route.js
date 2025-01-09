"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/upload/route";
exports.ids = ["app/api/upload/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "node:stream/web":
/*!**********************************!*\
  !*** external "node:stream/web" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("node:stream/web");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fupload%2Froute&page=%2Fapi%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.ts&appDir=%2FUsers%2Fkennysnyder%2FDesktop%2Fcode%2Fword-hunt%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkennysnyder%2FDesktop%2Fcode%2Fword-hunt&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fupload%2Froute&page=%2Fapi%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.ts&appDir=%2FUsers%2Fkennysnyder%2FDesktop%2Fcode%2Fword-hunt%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkennysnyder%2FDesktop%2Fcode%2Fword-hunt&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_kennysnyder_Desktop_code_word_hunt_app_api_upload_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/upload/route.ts */ \"(rsc)/./app/api/upload/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/upload/route\",\n        pathname: \"/api/upload\",\n        filename: \"route\",\n        bundlePath: \"app/api/upload/route\"\n    },\n    resolvedPagePath: \"/Users/kennysnyder/Desktop/code/word-hunt/app/api/upload/route.ts\",\n    nextConfigOutput,\n    userland: _Users_kennysnyder_Desktop_code_word_hunt_app_api_upload_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/upload/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1cGxvYWQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnVwbG9hZCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnVwbG9hZCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmtlbm55c255ZGVyJTJGRGVza3RvcCUyRmNvZGUlMkZ3b3JkLWh1bnQlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGa2VubnlzbnlkZXIlMkZEZXNrdG9wJTJGY29kZSUyRndvcmQtaHVudCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNpQjtBQUM5RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmQtaHVudC8/NThiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMva2VubnlzbnlkZXIvRGVza3RvcC9jb2RlL3dvcmQtaHVudC9hcHAvYXBpL3VwbG9hZC9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXBsb2FkL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdXBsb2FkXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91cGxvYWQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMva2VubnlzbnlkZXIvRGVza3RvcC9jb2RlL3dvcmQtaHVudC9hcHAvYXBpL3VwbG9hZC9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS91cGxvYWQvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fupload%2Froute&page=%2Fapi%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.ts&appDir=%2FUsers%2Fkennysnyder%2FDesktop%2Fcode%2Fword-hunt%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkennysnyder%2FDesktop%2Fcode%2Fword-hunt&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/upload/route.ts":
/*!*********************************!*\
  !*** ./app/api/upload/route.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/openai */ \"(rsc)/./lib/openai.ts\");\n\n\nasync function POST(request) {\n    try {\n        const formData = await request.formData();\n        const image = formData.get(\"image\");\n        if (!image) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"No image provided\"\n            }, {\n                status: 400\n            });\n        }\n        // Validate file type\n        if (![\n            \"image/jpeg\",\n            \"image/png\"\n        ].includes(image.type)) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Invalid file type. Please upload a PNG or JPEG image.\"\n            }, {\n                status: 400\n            });\n        }\n        // Validate file size (max 4MB)\n        if (image.size > 4 * 1024 * 1024) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Image size too large. Maximum size is 4MB.\"\n            }, {\n                status: 400\n            });\n        }\n        try {\n            // Convert image to base64\n            const bytes = await image.arrayBuffer();\n            const buffer = Buffer.from(bytes);\n            const base64Image = buffer.toString(\"base64\");\n            // Process image with OpenAI\n            const result = await (0,_lib_openai__WEBPACK_IMPORTED_MODULE_1__.processImage)(base64Image);\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                success: true,\n                grid: result.grid\n            });\n        } catch (error) {\n            console.error(\"OpenAI processing error:\", error);\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Failed to process image with AI. Please try again.\"\n            }, {\n                status: 500\n            });\n        }\n    } catch (error) {\n        console.error(\"Upload error:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Failed to process upload request\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VwbG9hZC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFDQztBQUVyQyxlQUFlRSxLQUFLQyxPQUFnQjtJQUN6QyxJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNRCxRQUFRQyxRQUFRO1FBQ3ZDLE1BQU1DLFFBQVFELFNBQVNFLEdBQUcsQ0FBQztRQUUzQixJQUFJLENBQUNELE9BQU87WUFDVixPQUFPTCxrRkFBWUEsQ0FBQ08sSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUFvQixHQUM3QjtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEscUJBQXFCO1FBQ3JCLElBQUksQ0FBQztZQUFDO1lBQWM7U0FBWSxDQUFDQyxRQUFRLENBQUNMLE1BQU1NLElBQUksR0FBRztZQUNyRCxPQUFPWCxrRkFBWUEsQ0FBQ08sSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUF3RCxHQUNqRTtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsK0JBQStCO1FBQy9CLElBQUlKLE1BQU1PLElBQUksR0FBRyxJQUFJLE9BQU8sTUFBTTtZQUNoQyxPQUFPWixrRkFBWUEsQ0FBQ08sSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUE2QyxHQUN0RDtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsSUFBSTtZQUNGLDBCQUEwQjtZQUMxQixNQUFNSSxRQUFRLE1BQU1SLE1BQU1TLFdBQVc7WUFDckMsTUFBTUMsU0FBU0MsT0FBT0MsSUFBSSxDQUFDSjtZQUMzQixNQUFNSyxjQUFjSCxPQUFPSSxRQUFRLENBQUM7WUFFcEMsNEJBQTRCO1lBQzVCLE1BQU1DLFNBQVMsTUFBTW5CLHlEQUFZQSxDQUFDaUI7WUFFbEMsT0FBT2xCLGtGQUFZQSxDQUFDTyxJQUFJLENBQUM7Z0JBQ3ZCYyxTQUFTO2dCQUNUQyxNQUFNRixPQUFPRSxJQUFJO1lBQ25CO1FBQ0YsRUFBRSxPQUFPZCxPQUFPO1lBQ2RlLFFBQVFmLEtBQUssQ0FBQyw0QkFBNEJBO1lBQzFDLE9BQU9SLGtGQUFZQSxDQUFDTyxJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQXFELEdBQzlEO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7SUFFRixFQUFFLE9BQU9ELE9BQU87UUFDZGUsUUFBUWYsS0FBSyxDQUFDLGlCQUFpQkE7UUFDL0IsT0FBT1Isa0ZBQVlBLENBQUNPLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUFtQyxHQUM1QztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmQtaHVudC8uL2FwcC9hcGkvdXBsb2FkL3JvdXRlLnRzP2E4OGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgcHJvY2Vzc0ltYWdlIH0gZnJvbSAnQC9saWIvb3BlbmFpJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICAgIGNvbnN0IGltYWdlID0gZm9ybURhdGEuZ2V0KCdpbWFnZScpIGFzIEZpbGU7XG5cbiAgICBpZiAoIWltYWdlKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6ICdObyBpbWFnZSBwcm92aWRlZCcgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIGZpbGUgdHlwZVxuICAgIGlmICghWydpbWFnZS9qcGVnJywgJ2ltYWdlL3BuZyddLmluY2x1ZGVzKGltYWdlLnR5cGUpKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6ICdJbnZhbGlkIGZpbGUgdHlwZS4gUGxlYXNlIHVwbG9hZCBhIFBORyBvciBKUEVHIGltYWdlLicgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIFZhbGlkYXRlIGZpbGUgc2l6ZSAobWF4IDRNQilcbiAgICBpZiAoaW1hZ2Uuc2l6ZSA+IDQgKiAxMDI0ICogMTAyNCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiAnSW1hZ2Ugc2l6ZSB0b28gbGFyZ2UuIE1heGltdW0gc2l6ZSBpcyA0TUIuJyB9LFxuICAgICAgICB7IHN0YXR1czogNDAwIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIC8vIENvbnZlcnQgaW1hZ2UgdG8gYmFzZTY0XG4gICAgICBjb25zdCBieXRlcyA9IGF3YWl0IGltYWdlLmFycmF5QnVmZmVyKCk7XG4gICAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShieXRlcyk7XG4gICAgICBjb25zdCBiYXNlNjRJbWFnZSA9IGJ1ZmZlci50b1N0cmluZygnYmFzZTY0Jyk7XG5cbiAgICAgIC8vIFByb2Nlc3MgaW1hZ2Ugd2l0aCBPcGVuQUlcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHByb2Nlc3NJbWFnZShiYXNlNjRJbWFnZSk7XG5cbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgIGdyaWQ6IHJlc3VsdC5ncmlkLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ09wZW5BSSBwcm9jZXNzaW5nIGVycm9yOicsIGVycm9yKTtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogJ0ZhaWxlZCB0byBwcm9jZXNzIGltYWdlIHdpdGggQUkuIFBsZWFzZSB0cnkgYWdhaW4uJyB9LFxuICAgICAgICB7IHN0YXR1czogNTAwIH1cbiAgICAgICk7XG4gICAgfVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignVXBsb2FkIGVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiAnRmFpbGVkIHRvIHByb2Nlc3MgdXBsb2FkIHJlcXVlc3QnIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59ICJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJwcm9jZXNzSW1hZ2UiLCJQT1NUIiwicmVxdWVzdCIsImZvcm1EYXRhIiwiaW1hZ2UiLCJnZXQiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJpbmNsdWRlcyIsInR5cGUiLCJzaXplIiwiYnl0ZXMiLCJhcnJheUJ1ZmZlciIsImJ1ZmZlciIsIkJ1ZmZlciIsImZyb20iLCJiYXNlNjRJbWFnZSIsInRvU3RyaW5nIiwicmVzdWx0Iiwic3VjY2VzcyIsImdyaWQiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/upload/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/openai.ts":
/*!***********************!*\
  !*** ./lib/openai.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openai: () => (/* binding */ openai),\n/* harmony export */   processImage: () => (/* binding */ processImage)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/openai/index.mjs\");\n\nif (!process.env.OPENAI_API_KEY) {\n    throw new Error(\"Missing OPENAI_API_KEY environment variable\");\n}\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    apiKey: process.env.OPENAI_API_KEY\n});\nasync function processImage(base64Image) {\n    const response = await openai.chat.completions.create({\n        model: \"gpt-4o\",\n        messages: [\n            {\n                role: \"user\",\n                content: [\n                    {\n                        type: \"image_url\",\n                        image_url: {\n                            url: `data:image/jpeg;base64,${base64Image}`\n                        }\n                    }\n                ]\n            }\n        ],\n        response_format: {\n            type: \"json_schema\",\n            json_schema: {\n                name: \"word_hunt\",\n                strict: true,\n                schema: {\n                    type: \"object\",\n                    properties: {\n                        grid: {\n                            type: \"array\",\n                            description: \"A 4x4 grid of letters for the word hunt.\",\n                            items: {\n                                type: \"array\",\n                                description: \"A single row of the letter grid.\",\n                                items: {\n                                    type: \"string\",\n                                    description: \"A single letter in the row.\"\n                                }\n                            }\n                        },\n                        correct_letters: {\n                            type: \"array\",\n                            description: \"The correct letters extracted from each row of the word hunt grid.\",\n                            items: {\n                                type: \"string\",\n                                description: \"The correct letter from a row.\"\n                            }\n                        }\n                    },\n                    required: [\n                        \"grid\",\n                        \"correct_letters\"\n                    ],\n                    additionalProperties: false\n                }\n            }\n        },\n        temperature: 1,\n        max_tokens: 2048,\n        top_p: 1,\n        frequency_penalty: 0,\n        presence_penalty: 0\n    });\n    const result = response.choices[0]?.message?.content;\n    if (!result) {\n        throw new Error(\"Failed to process image\");\n    }\n    try {\n        const parsed = JSON.parse(result);\n        if (!parsed.grid || !Array.isArray(parsed.grid) || !parsed.correct_letters || !Array.isArray(parsed.correct_letters)) {\n            throw new Error(\"Invalid response format\");\n        }\n        return parsed;\n    } catch (error) {\n        console.error(\"Failed to parse OpenAI response:\", result);\n        throw new Error(\"Invalid response format from OpenAI\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvb3BlbmFpLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUU1QixJQUFJLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYyxFQUFFO0lBQy9CLE1BQU0sSUFBSUMsTUFBTTtBQUNsQjtBQUVPLE1BQU1DLFNBQVMsSUFBSUwsOENBQU1BLENBQUM7SUFDL0JNLFFBQVFMLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUNwQyxHQUFHO0FBT0ksZUFBZUksYUFBYUMsV0FBbUI7SUFDcEQsTUFBTUMsV0FBVyxNQUFNSixPQUFPSyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDO1FBQ3BEQyxPQUFPO1FBQ1BDLFVBQVU7WUFDUjtnQkFDRUMsTUFBTTtnQkFDTkMsU0FBUztvQkFDUDt3QkFDRUMsTUFBTTt3QkFDTkMsV0FBVzs0QkFDVEMsS0FBSyxDQUFDLHVCQUF1QixFQUFFWCxZQUFZLENBQUM7d0JBQzlDO29CQUNGO2lCQUNEO1lBQ0g7U0FDRDtRQUNEWSxpQkFBaUI7WUFDZkgsTUFBTTtZQUNOSSxhQUFhO2dCQUNYQyxNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxRQUFRO29CQUNOUCxNQUFNO29CQUNOUSxZQUFZO3dCQUNWQyxNQUFNOzRCQUNKVCxNQUFNOzRCQUNOVSxhQUFhOzRCQUNiQyxPQUFPO2dDQUNMWCxNQUFNO2dDQUNOVSxhQUFhO2dDQUNiQyxPQUFPO29DQUNMWCxNQUFNO29DQUNOVSxhQUFhO2dDQUNmOzRCQUNGO3dCQUNGO3dCQUNBRSxpQkFBaUI7NEJBQ2ZaLE1BQU07NEJBQ05VLGFBQWE7NEJBQ2JDLE9BQU87Z0NBQ0xYLE1BQU07Z0NBQ05VLGFBQWE7NEJBQ2Y7d0JBQ0Y7b0JBQ0Y7b0JBQ0FHLFVBQVU7d0JBQUM7d0JBQVE7cUJBQWtCO29CQUNyQ0Msc0JBQXNCO2dCQUN4QjtZQUNGO1FBQ0Y7UUFDQUMsYUFBYTtRQUNiQyxZQUFZO1FBQ1pDLE9BQU87UUFDUEMsbUJBQW1CO1FBQ25CQyxrQkFBa0I7SUFDcEI7SUFFQSxNQUFNQyxTQUFTNUIsU0FBUzZCLE9BQU8sQ0FBQyxFQUFFLEVBQUVDLFNBQVN2QjtJQUM3QyxJQUFJLENBQUNxQixRQUFRO1FBQ1gsTUFBTSxJQUFJakMsTUFBTTtJQUNsQjtJQUVBLElBQUk7UUFDRixNQUFNb0MsU0FBU0MsS0FBS0MsS0FBSyxDQUFDTDtRQUMxQixJQUFJLENBQUNHLE9BQU9kLElBQUksSUFBSSxDQUFDaUIsTUFBTUMsT0FBTyxDQUFDSixPQUFPZCxJQUFJLEtBQUssQ0FBQ2MsT0FBT1gsZUFBZSxJQUFJLENBQUNjLE1BQU1DLE9BQU8sQ0FBQ0osT0FBT1gsZUFBZSxHQUFHO1lBQ3BILE1BQU0sSUFBSXpCLE1BQU07UUFDbEI7UUFDQSxPQUFPb0M7SUFDVCxFQUFFLE9BQU9LLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLG9DQUFvQ1I7UUFDbEQsTUFBTSxJQUFJakMsTUFBTTtJQUNsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd29yZC1odW50Ly4vbGliL29wZW5haS50cz8wMGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPcGVuQUkgZnJvbSAnb3BlbmFpJztcblxuaWYgKCFwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgT1BFTkFJX0FQSV9LRVkgZW52aXJvbm1lbnQgdmFyaWFibGUnKTtcbn1cblxuZXhwb3J0IGNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUkoe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JpZFJlc3BvbnNlIHtcbiAgZ3JpZDogc3RyaW5nW11bXTtcbiAgY29ycmVjdF9sZXR0ZXJzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NJbWFnZShiYXNlNjRJbWFnZTogc3RyaW5nKTogUHJvbWlzZTxHcmlkUmVzcG9uc2U+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBvcGVuYWkuY2hhdC5jb21wbGV0aW9ucy5jcmVhdGUoe1xuICAgIG1vZGVsOiBcImdwdC00b1wiLFxuICAgIG1lc3NhZ2VzOiBbXG4gICAgICB7XG4gICAgICAgIHJvbGU6IFwidXNlclwiLFxuICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJpbWFnZV91cmxcIixcbiAgICAgICAgICAgIGltYWdlX3VybDoge1xuICAgICAgICAgICAgICB1cmw6IGBkYXRhOmltYWdlL2pwZWc7YmFzZTY0LCR7YmFzZTY0SW1hZ2V9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF0sXG4gICAgcmVzcG9uc2VfZm9ybWF0OiB7XG4gICAgICB0eXBlOiBcImpzb25fc2NoZW1hXCIsXG4gICAgICBqc29uX3NjaGVtYToge1xuICAgICAgICBuYW1lOiBcIndvcmRfaHVudFwiLFxuICAgICAgICBzdHJpY3Q6IHRydWUsXG4gICAgICAgIHNjaGVtYToge1xuICAgICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgNHg0IGdyaWQgb2YgbGV0dGVycyBmb3IgdGhlIHdvcmQgaHVudC5cIixcbiAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQSBzaW5nbGUgcm93IG9mIHRoZSBsZXR0ZXIgZ3JpZC5cIixcbiAgICAgICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgc2luZ2xlIGxldHRlciBpbiB0aGUgcm93LlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29ycmVjdF9sZXR0ZXJzOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGNvcnJlY3QgbGV0dGVycyBleHRyYWN0ZWQgZnJvbSBlYWNoIHJvdyBvZiB0aGUgd29yZCBodW50IGdyaWQuXCIsXG4gICAgICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgY29ycmVjdCBsZXR0ZXIgZnJvbSBhIHJvdy5cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXF1aXJlZDogW1wiZ3JpZFwiLCBcImNvcnJlY3RfbGV0dGVyc1wiXSxcbiAgICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllczogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdGVtcGVyYXR1cmU6IDEsXG4gICAgbWF4X3Rva2VuczogMjA0OCxcbiAgICB0b3BfcDogMSxcbiAgICBmcmVxdWVuY3lfcGVuYWx0eTogMCxcbiAgICBwcmVzZW5jZV9wZW5hbHR5OiAwXG4gIH0pO1xuXG4gIGNvbnN0IHJlc3VsdCA9IHJlc3BvbnNlLmNob2ljZXNbMF0/Lm1lc3NhZ2U/LmNvbnRlbnQ7XG4gIGlmICghcmVzdWx0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gcHJvY2VzcyBpbWFnZScpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHJlc3VsdCk7XG4gICAgaWYgKCFwYXJzZWQuZ3JpZCB8fCAhQXJyYXkuaXNBcnJheShwYXJzZWQuZ3JpZCkgfHwgIXBhcnNlZC5jb3JyZWN0X2xldHRlcnMgfHwgIUFycmF5LmlzQXJyYXkocGFyc2VkLmNvcnJlY3RfbGV0dGVycykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByZXNwb25zZSBmb3JtYXQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZCBhcyBHcmlkUmVzcG9uc2U7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHBhcnNlIE9wZW5BSSByZXNwb25zZTonLCByZXN1bHQpO1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByZXNwb25zZSBmb3JtYXQgZnJvbSBPcGVuQUknKTtcbiAgfVxufSAiXSwibmFtZXMiOlsiT3BlbkFJIiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwiRXJyb3IiLCJvcGVuYWkiLCJhcGlLZXkiLCJwcm9jZXNzSW1hZ2UiLCJiYXNlNjRJbWFnZSIsInJlc3BvbnNlIiwiY2hhdCIsImNvbXBsZXRpb25zIiwiY3JlYXRlIiwibW9kZWwiLCJtZXNzYWdlcyIsInJvbGUiLCJjb250ZW50IiwidHlwZSIsImltYWdlX3VybCIsInVybCIsInJlc3BvbnNlX2Zvcm1hdCIsImpzb25fc2NoZW1hIiwibmFtZSIsInN0cmljdCIsInNjaGVtYSIsInByb3BlcnRpZXMiLCJncmlkIiwiZGVzY3JpcHRpb24iLCJpdGVtcyIsImNvcnJlY3RfbGV0dGVycyIsInJlcXVpcmVkIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJ0b3BfcCIsImZyZXF1ZW5jeV9wZW5hbHR5IiwicHJlc2VuY2VfcGVuYWx0eSIsInJlc3VsdCIsImNob2ljZXMiLCJtZXNzYWdlIiwicGFyc2VkIiwiSlNPTiIsInBhcnNlIiwiQXJyYXkiLCJpc0FycmF5IiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/openai.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/formdata-node","vendor-chunks/openai","vendor-chunks/form-data-encoder","vendor-chunks/whatwg-url","vendor-chunks/agentkeepalive","vendor-chunks/tr46","vendor-chunks/web-streams-polyfill","vendor-chunks/node-fetch","vendor-chunks/webidl-conversions","vendor-chunks/ms","vendor-chunks/humanize-ms","vendor-chunks/event-target-shim","vendor-chunks/abort-controller"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fupload%2Froute&page=%2Fapi%2Fupload%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.ts&appDir=%2FUsers%2Fkennysnyder%2FDesktop%2Fcode%2Fword-hunt%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fkennysnyder%2FDesktop%2Fcode%2Fword-hunt&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();