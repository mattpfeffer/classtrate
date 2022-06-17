"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
const minimatch_1 = require("minimatch");
// Filter superflous classes from a raw HTML;
// takes a source string and glob pattern(s) to match against
const filter = (source, pattern) => {
    // Find all class and id attributes to filter on
    const regex = /\s(id|class)=(?:"([\s\w\d-_]+)"|([\w\d-_]+)(?=[\s\w>/]))/g;
    const output = source.replaceAll(regex, (match, att, cls) => stripClass(att, cls, pattern));
    return output;
};
exports.filter = filter;
// Remove matched class(es) and return the replacement attribute string
function stripClass(attributeString, classString, pattern) {
    const classes = classString.split(' ').filter((className) => {
        return Array.isArray(pattern) ? !matchAll(className, pattern) : !(0, minimatch_1.default)(className, pattern);
    });
    return !classes.length ? '' : ` ${attributeString}="${classes.join(' ')}"`;
}
// Test a string against an list of glob patterns, extends 'match'
function matchAll(string, patterns) {
    return patterns.some((pattern) => {
        if ((0, minimatch_1.default)(string, pattern)) {
            return true;
        }
        return false;
    });
}
