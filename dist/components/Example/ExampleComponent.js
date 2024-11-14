"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var example_module_css_1 = __importDefault(require("./example.module.css"));
var ExampleComponent = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "button" : _b, onClick = _a.onClick, style = _a.style, children = _a.children;
    return (react_1.default.createElement("button", { className: example_module_css_1.default.button, style: style, type: type, onClick: onClick }, children || "Click me"));
};
exports.default = ExampleComponent;
