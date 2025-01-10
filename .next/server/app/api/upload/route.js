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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/openai */ \"(rsc)/./lib/openai.ts\");\n\n\nasync function POST(request) {\n    try {\n        const formData = await request.formData();\n        const image = formData.get(\"image\");\n        if (!image) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"No image provided\"\n            }, {\n                status: 400\n            });\n        }\n        // Validate file type\n        if (![\n            \"image/jpeg\",\n            \"image/png\"\n        ].includes(image.type)) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Invalid file type. Please upload a PNG or JPEG image.\"\n            }, {\n                status: 400\n            });\n        }\n        // Validate file size (max 4MB)\n        if (image.size > 4 * 1024 * 1024) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Image size too large. Maximum size is 4MB.\"\n            }, {\n                status: 400\n            });\n        }\n        try {\n            // Convert image to base64\n            const bytes = await image.arrayBuffer();\n            const buffer = Buffer.from(bytes);\n            const base64Image = buffer.toString(\"base64\");\n            // Process image with OpenAI\n            const result = await (0,_lib_openai__WEBPACK_IMPORTED_MODULE_1__.processImage)(base64Image);\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                success: true,\n                grid: result.grid,\n                gridSize: result.gridSize\n            });\n        } catch (error) {\n            console.error(\"OpenAI processing error:\", error);\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Failed to process image with AI. Please try again.\"\n            }, {\n                status: 500\n            });\n        }\n    } catch (error) {\n        console.error(\"Upload error:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Failed to process upload request\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VwbG9hZC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFDQztBQUVyQyxlQUFlRSxLQUFLQyxPQUFnQjtJQUN6QyxJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNRCxRQUFRQyxRQUFRO1FBQ3ZDLE1BQU1DLFFBQVFELFNBQVNFLEdBQUcsQ0FBQztRQUUzQixJQUFJLENBQUNELE9BQU87WUFDVixPQUFPTCxrRkFBWUEsQ0FBQ08sSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUFvQixHQUM3QjtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEscUJBQXFCO1FBQ3JCLElBQUksQ0FBQztZQUFDO1lBQWM7U0FBWSxDQUFDQyxRQUFRLENBQUNMLE1BQU1NLElBQUksR0FBRztZQUNyRCxPQUFPWCxrRkFBWUEsQ0FBQ08sSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUF3RCxHQUNqRTtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsK0JBQStCO1FBQy9CLElBQUlKLE1BQU1PLElBQUksR0FBRyxJQUFJLE9BQU8sTUFBTTtZQUNoQyxPQUFPWixrRkFBWUEsQ0FBQ08sSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUE2QyxHQUN0RDtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsSUFBSTtZQUNGLDBCQUEwQjtZQUMxQixNQUFNSSxRQUFRLE1BQU1SLE1BQU1TLFdBQVc7WUFDckMsTUFBTUMsU0FBU0MsT0FBT0MsSUFBSSxDQUFDSjtZQUMzQixNQUFNSyxjQUFjSCxPQUFPSSxRQUFRLENBQUM7WUFFcEMsNEJBQTRCO1lBQzVCLE1BQU1DLFNBQVMsTUFBTW5CLHlEQUFZQSxDQUFDaUI7WUFFbEMsT0FBT2xCLGtGQUFZQSxDQUFDTyxJQUFJLENBQUM7Z0JBQ3ZCYyxTQUFTO2dCQUNUQyxNQUFNRixPQUFPRSxJQUFJO2dCQUNqQkMsVUFBVUgsT0FBT0csUUFBUTtZQUMzQjtRQUNGLEVBQUUsT0FBT2YsT0FBTztZQUNkZ0IsUUFBUWhCLEtBQUssQ0FBQyw0QkFBNEJBO1lBQzFDLE9BQU9SLGtGQUFZQSxDQUFDTyxJQUFJLENBQ3RCO2dCQUFFQyxPQUFPO1lBQXFELEdBQzlEO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7SUFFRixFQUFFLE9BQU9ELE9BQU87UUFDZGdCLFFBQVFoQixLQUFLLENBQUMsaUJBQWlCQTtRQUMvQixPQUFPUixrRkFBWUEsQ0FBQ08sSUFBSSxDQUN0QjtZQUFFQyxPQUFPO1FBQW1DLEdBQzVDO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd29yZC1odW50Ly4vYXBwL2FwaS91cGxvYWQvcm91dGUudHM/YTg4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBwcm9jZXNzSW1hZ2UgfSBmcm9tICdAL2xpYi9vcGVuYWknO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gICAgY29uc3QgaW1hZ2UgPSBmb3JtRGF0YS5nZXQoJ2ltYWdlJykgYXMgRmlsZTtcblxuICAgIGlmICghaW1hZ2UpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogJ05vIGltYWdlIHByb3ZpZGVkJyB9LFxuICAgICAgICB7IHN0YXR1czogNDAwIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgZmlsZSB0eXBlXG4gICAgaWYgKCFbJ2ltYWdlL2pwZWcnLCAnaW1hZ2UvcG5nJ10uaW5jbHVkZXMoaW1hZ2UudHlwZSkpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogJ0ludmFsaWQgZmlsZSB0eXBlLiBQbGVhc2UgdXBsb2FkIGEgUE5HIG9yIEpQRUcgaW1hZ2UuJyB9LFxuICAgICAgICB7IHN0YXR1czogNDAwIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gVmFsaWRhdGUgZmlsZSBzaXplIChtYXggNE1CKVxuICAgIGlmIChpbWFnZS5zaXplID4gNCAqIDEwMjQgKiAxMDI0KSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6ICdJbWFnZSBzaXplIHRvbyBsYXJnZS4gTWF4aW11bSBzaXplIGlzIDRNQi4nIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgLy8gQ29udmVydCBpbWFnZSB0byBiYXNlNjRcbiAgICAgIGNvbnN0IGJ5dGVzID0gYXdhaXQgaW1hZ2UuYXJyYXlCdWZmZXIoKTtcbiAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJ5dGVzKTtcbiAgICAgIGNvbnN0IGJhc2U2NEltYWdlID0gYnVmZmVyLnRvU3RyaW5nKCdiYXNlNjQnKTtcblxuICAgICAgLy8gUHJvY2VzcyBpbWFnZSB3aXRoIE9wZW5BSVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcHJvY2Vzc0ltYWdlKGJhc2U2NEltYWdlKTtcblxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgZ3JpZDogcmVzdWx0LmdyaWQsXG4gICAgICAgIGdyaWRTaXplOiByZXN1bHQuZ3JpZFNpemVcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdPcGVuQUkgcHJvY2Vzc2luZyBlcnJvcjonLCBlcnJvcik7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6ICdGYWlsZWQgdG8gcHJvY2VzcyBpbWFnZSB3aXRoIEFJLiBQbGVhc2UgdHJ5IGFnYWluLicgfSxcbiAgICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgICApO1xuICAgIH1cblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1VwbG9hZCBlcnJvcjonLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogJ0ZhaWxlZCB0byBwcm9jZXNzIHVwbG9hZCByZXF1ZXN0JyB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufSAiXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicHJvY2Vzc0ltYWdlIiwiUE9TVCIsInJlcXVlc3QiLCJmb3JtRGF0YSIsImltYWdlIiwiZ2V0IiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiaW5jbHVkZXMiLCJ0eXBlIiwic2l6ZSIsImJ5dGVzIiwiYXJyYXlCdWZmZXIiLCJidWZmZXIiLCJCdWZmZXIiLCJmcm9tIiwiYmFzZTY0SW1hZ2UiLCJ0b1N0cmluZyIsInJlc3VsdCIsInN1Y2Nlc3MiLCJncmlkIiwiZ3JpZFNpemUiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/upload/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/openai.ts":
/*!***********************!*\
  !*** ./lib/openai.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   openai: () => (/* binding */ openai),\n/* harmony export */   processImage: () => (/* binding */ processImage)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/openai/index.mjs\");\n\nif (!process.env.OPENAI_API_KEY) {\n    throw new Error(\"Missing OPENAI_API_KEY environment variable\");\n}\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    apiKey: process.env.OPENAI_API_KEY\n});\nasync function processImage(base64Image) {\n    const response = await openai.chat.completions.create({\n        model: \"gpt-4o\",\n        messages: [\n            {\n                role: \"user\",\n                content: [\n                    {\n                        type: \"image_url\",\n                        image_url: {\n                            url: `data:image/jpeg;base64,${base64Image}`\n                        }\n                    }\n                ]\n            }\n        ],\n        response_format: {\n            type: \"json_schema\",\n            json_schema: {\n                name: \"word_hunt_puzzle\",\n                strict: true,\n                schema: {\n                    type: \"object\",\n                    properties: {\n                        grid: {\n                            type: \"array\",\n                            description: \"A 2D array representing the characters in the word hunt puzzle.\",\n                            items: {\n                                type: \"array\",\n                                description: \"A single row of the grid.\",\n                                items: {\n                                    type: \"string\",\n                                    description: \"A single character in the grid.\"\n                                }\n                            }\n                        }\n                    },\n                    required: [\n                        \"grid\"\n                    ],\n                    additionalProperties: false\n                }\n            }\n        },\n        temperature: 1,\n        max_tokens: 2048,\n        top_p: 1,\n        frequency_penalty: 0,\n        presence_penalty: 0\n    });\n    const result = response.choices[0]?.message?.content;\n    if (!result) {\n        throw new Error(\"Failed to process image\");\n    }\n    try {\n        const parsed = JSON.parse(result);\n        if (!parsed.grid || !Array.isArray(parsed.grid)) {\n            throw new Error(\"Invalid response format\");\n        }\n        const gridSize = parsed.grid.length;\n        if (gridSize !== 4 && gridSize !== 5) {\n            throw new Error(\"Invalid grid size - must be 4x4 or 5x5\");\n        }\n        for (const row of parsed.grid){\n            if (!Array.isArray(row) || row.length !== gridSize) {\n                throw new Error(\"Invalid grid format - rows must match grid size\");\n            }\n            for (const cell of row){\n                if (typeof cell !== \"string\" || !/^[A-Z]$/.test(cell)) {\n                    throw new Error(\"Invalid grid content - each cell must be a single uppercase letter\");\n                }\n            }\n        }\n        return {\n            grid: parsed.grid,\n            gridSize: gridSize\n        };\n    } catch (error) {\n        console.error(\"Failed to parse OpenAI response:\", result);\n        throw new Error(\"Invalid response format from OpenAI\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvb3BlbmFpLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUU1QixJQUFJLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYyxFQUFFO0lBQy9CLE1BQU0sSUFBSUMsTUFBTTtBQUNsQjtBQUVPLE1BQU1DLFNBQVMsSUFBSUwsOENBQU1BLENBQUM7SUFDL0JNLFFBQVFMLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUNwQyxHQUFHO0FBT0ksZUFBZUksYUFBYUMsV0FBbUI7SUFDcEQsTUFBTUMsV0FBVyxNQUFNSixPQUFPSyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDO1FBQ3BEQyxPQUFPO1FBQ1BDLFVBQVU7WUFDUjtnQkFDRUMsTUFBTTtnQkFDTkMsU0FBUztvQkFDUDt3QkFDRUMsTUFBTTt3QkFDTkMsV0FBVzs0QkFDVEMsS0FBSyxDQUFDLHVCQUF1QixFQUFFWCxZQUFZLENBQUM7d0JBQzlDO29CQUNGO2lCQUNEO1lBQ0g7U0FDRDtRQUNEWSxpQkFBaUI7WUFDZkgsTUFBTTtZQUNOSSxhQUFhO2dCQUNYQyxNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxRQUFRO29CQUNOUCxNQUFNO29CQUNOUSxZQUFZO3dCQUNWQyxNQUFNOzRCQUNKVCxNQUFNOzRCQUNOVSxhQUFhOzRCQUNiQyxPQUFPO2dDQUNMWCxNQUFNO2dDQUNOVSxhQUFhO2dDQUNiQyxPQUFPO29DQUNMWCxNQUFNO29DQUNOVSxhQUFhO2dDQUNmOzRCQUNGO3dCQUNGO29CQUNGO29CQUNBRSxVQUFVO3dCQUFDO3FCQUFPO29CQUNsQkMsc0JBQXNCO2dCQUN4QjtZQUNGO1FBQ0Y7UUFDQUMsYUFBYTtRQUNiQyxZQUFZO1FBQ1pDLE9BQU87UUFDUEMsbUJBQW1CO1FBQ25CQyxrQkFBa0I7SUFDcEI7SUFFQSxNQUFNQyxTQUFTM0IsU0FBUzRCLE9BQU8sQ0FBQyxFQUFFLEVBQUVDLFNBQVN0QjtJQUM3QyxJQUFJLENBQUNvQixRQUFRO1FBQ1gsTUFBTSxJQUFJaEMsTUFBTTtJQUNsQjtJQUVBLElBQUk7UUFDRixNQUFNbUMsU0FBU0MsS0FBS0MsS0FBSyxDQUFDTDtRQUMxQixJQUFJLENBQUNHLE9BQU9iLElBQUksSUFBSSxDQUFDZ0IsTUFBTUMsT0FBTyxDQUFDSixPQUFPYixJQUFJLEdBQUc7WUFDL0MsTUFBTSxJQUFJdEIsTUFBTTtRQUNsQjtRQUVBLE1BQU13QyxXQUFXTCxPQUFPYixJQUFJLENBQUNtQixNQUFNO1FBQ25DLElBQUlELGFBQWEsS0FBS0EsYUFBYSxHQUFHO1lBQ3BDLE1BQU0sSUFBSXhDLE1BQU07UUFDbEI7UUFFQSxLQUFLLE1BQU0wQyxPQUFPUCxPQUFPYixJQUFJLENBQUU7WUFDN0IsSUFBSSxDQUFDZ0IsTUFBTUMsT0FBTyxDQUFDRyxRQUFRQSxJQUFJRCxNQUFNLEtBQUtELFVBQVU7Z0JBQ2xELE1BQU0sSUFBSXhDLE1BQU07WUFDbEI7WUFDQSxLQUFLLE1BQU0yQyxRQUFRRCxJQUFLO2dCQUN0QixJQUFJLE9BQU9DLFNBQVMsWUFBWSxDQUFDLFVBQVVDLElBQUksQ0FBQ0QsT0FBTztvQkFDckQsTUFBTSxJQUFJM0MsTUFBTTtnQkFDbEI7WUFDRjtRQUNGO1FBRUEsT0FBTztZQUNMc0IsTUFBTWEsT0FBT2IsSUFBSTtZQUNqQmtCLFVBQVVBO1FBQ1o7SUFDRixFQUFFLE9BQU9LLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLG9DQUFvQ2I7UUFDbEQsTUFBTSxJQUFJaEMsTUFBTTtJQUNsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd29yZC1odW50Ly4vbGliL29wZW5haS50cz8wMGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPcGVuQUkgZnJvbSAnb3BlbmFpJztcblxuaWYgKCFwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgT1BFTkFJX0FQSV9LRVkgZW52aXJvbm1lbnQgdmFyaWFibGUnKTtcbn1cblxuZXhwb3J0IGNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUkoe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JpZFJlc3BvbnNlIHtcbiAgZ3JpZDogc3RyaW5nW11bXTtcbiAgZ3JpZFNpemU6IDQgfCA1O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0ltYWdlKGJhc2U2NEltYWdlOiBzdHJpbmcpOiBQcm9taXNlPEdyaWRSZXNwb25zZT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG9wZW5haS5jaGF0LmNvbXBsZXRpb25zLmNyZWF0ZSh7XG4gICAgbW9kZWw6IFwiZ3B0LTRvXCIsXG4gICAgbWVzc2FnZXM6IFtcbiAgICAgIHtcbiAgICAgICAgcm9sZTogXCJ1c2VyXCIsXG4gICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0eXBlOiBcImltYWdlX3VybFwiLFxuICAgICAgICAgICAgaW1hZ2VfdXJsOiB7XG4gICAgICAgICAgICAgIHVybDogYGRhdGE6aW1hZ2UvanBlZztiYXNlNjQsJHtiYXNlNjRJbWFnZX1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXSxcbiAgICByZXNwb25zZV9mb3JtYXQ6IHtcbiAgICAgIHR5cGU6IFwianNvbl9zY2hlbWFcIixcbiAgICAgIGpzb25fc2NoZW1hOiB7XG4gICAgICAgIG5hbWU6IFwid29yZF9odW50X3B1enpsZVwiLFxuICAgICAgICBzdHJpY3Q6IHRydWUsXG4gICAgICAgIHNjaGVtYToge1xuICAgICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICB0eXBlOiBcImFycmF5XCIsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgMkQgYXJyYXkgcmVwcmVzZW50aW5nIHRoZSBjaGFyYWN0ZXJzIGluIHRoZSB3b3JkIGh1bnQgcHV6emxlLlwiLFxuICAgICAgICAgICAgICBpdGVtczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBIHNpbmdsZSByb3cgb2YgdGhlIGdyaWQuXCIsXG4gICAgICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBIHNpbmdsZSBjaGFyYWN0ZXIgaW4gdGhlIGdyaWQuXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlcXVpcmVkOiBbXCJncmlkXCJdLFxuICAgICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB0ZW1wZXJhdHVyZTogMSxcbiAgICBtYXhfdG9rZW5zOiAyMDQ4LFxuICAgIHRvcF9wOiAxLFxuICAgIGZyZXF1ZW5jeV9wZW5hbHR5OiAwLFxuICAgIHByZXNlbmNlX3BlbmFsdHk6IDBcbiAgfSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuY2hvaWNlc1swXT8ubWVzc2FnZT8uY29udGVudDtcbiAgaWYgKCFyZXN1bHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBwcm9jZXNzIGltYWdlJyk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UocmVzdWx0KTtcbiAgICBpZiAoIXBhcnNlZC5ncmlkIHx8ICFBcnJheS5pc0FycmF5KHBhcnNlZC5ncmlkKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlc3BvbnNlIGZvcm1hdCcpO1xuICAgIH1cblxuICAgIGNvbnN0IGdyaWRTaXplID0gcGFyc2VkLmdyaWQubGVuZ3RoO1xuICAgIGlmIChncmlkU2l6ZSAhPT0gNCAmJiBncmlkU2l6ZSAhPT0gNSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGdyaWQgc2l6ZSAtIG11c3QgYmUgNHg0IG9yIDV4NScpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3Qgcm93IG9mIHBhcnNlZC5ncmlkKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocm93KSB8fCByb3cubGVuZ3RoICE9PSBncmlkU2l6ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZ3JpZCBmb3JtYXQgLSByb3dzIG11c3QgbWF0Y2ggZ3JpZCBzaXplJyk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGNlbGwgb2Ygcm93KSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2VsbCAhPT0gJ3N0cmluZycgfHwgIS9eW0EtWl0kLy50ZXN0KGNlbGwpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGdyaWQgY29udGVudCAtIGVhY2ggY2VsbCBtdXN0IGJlIGEgc2luZ2xlIHVwcGVyY2FzZSBsZXR0ZXInKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBncmlkOiBwYXJzZWQuZ3JpZCxcbiAgICAgIGdyaWRTaXplOiBncmlkU2l6ZSBhcyA0IHwgNVxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHBhcnNlIE9wZW5BSSByZXNwb25zZTonLCByZXN1bHQpO1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByZXNwb25zZSBmb3JtYXQgZnJvbSBPcGVuQUknKTtcbiAgfVxufSAiXSwibmFtZXMiOlsiT3BlbkFJIiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwiRXJyb3IiLCJvcGVuYWkiLCJhcGlLZXkiLCJwcm9jZXNzSW1hZ2UiLCJiYXNlNjRJbWFnZSIsInJlc3BvbnNlIiwiY2hhdCIsImNvbXBsZXRpb25zIiwiY3JlYXRlIiwibW9kZWwiLCJtZXNzYWdlcyIsInJvbGUiLCJjb250ZW50IiwidHlwZSIsImltYWdlX3VybCIsInVybCIsInJlc3BvbnNlX2Zvcm1hdCIsImpzb25fc2NoZW1hIiwibmFtZSIsInN0cmljdCIsInNjaGVtYSIsInByb3BlcnRpZXMiLCJncmlkIiwiZGVzY3JpcHRpb24iLCJpdGVtcyIsInJlcXVpcmVkIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJ0b3BfcCIsImZyZXF1ZW5jeV9wZW5hbHR5IiwicHJlc2VuY2VfcGVuYWx0eSIsInJlc3VsdCIsImNob2ljZXMiLCJtZXNzYWdlIiwicGFyc2VkIiwiSlNPTiIsInBhcnNlIiwiQXJyYXkiLCJpc0FycmF5IiwiZ3JpZFNpemUiLCJsZW5ndGgiLCJyb3ciLCJjZWxsIiwidGVzdCIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/openai.ts\n");

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