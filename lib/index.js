"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 *
 * @param {function} factory - ()=>import(path)
 * @returns {LazyExoticComponent<ComponentType<any>>}
 */
function lazyWithPreload(factory) {
    //todo: remove any of PreloadComponent<any>
    var Component = (0, react_1.lazy)(factory);
    Component.preload = factory;
    return Component;
}
exports.default = lazyWithPreload;
