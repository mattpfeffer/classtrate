import match from 'minimatch';
// Filter superflous classes from a raw HTML;
// takes a source string and glob pattern(s) to match against
const filter = (source, pattern) => {
    // Find all class and id attributes to filter on
    const regex = /\s(id|class)=(?:"([\s\w\d-_]+)"|([\w\d-_]+)(?=[\s\w>/]))/g;
    const output = source.replaceAll(regex, (match, att, cls) => stripClass(att, cls, pattern));
    return output;
};
// Remove matched class(es) and return the replacement attribute string
function stripClass(attributeString, classString, pattern) {
    const classes = classString.split(' ').filter((className) => {
        return Array.isArray(pattern) ? !matchAll(className, pattern) : !match(className, pattern);
    });
    return !classes.length ? '' : ` ${attributeString}="${classes.join(' ')}"`;
}
// Test a string against an list of glob patterns, extends 'match'
function matchAll(string, patterns) {
    return patterns.some((pattern) => {
        if (match(string, pattern)) {
            return true;
        }
        return false;
    });
}
export { filter };
