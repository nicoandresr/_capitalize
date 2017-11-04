const getLowerCaseString = string => (string || '').toString().toLowerCase();

module.exports = function (string) {
  string = getLowerCaseString(string);
  return string.charAt(0).toUpperCase() + string.substring(1);
}

module.exports.words = function (string) {
  return getLowerCaseString(string).replace(/(^|[^a-zA-Z\u00C0-\u017F'])([a-zA-Z\u00C0-\u017F])/g, function (m) {
    return m.toUpperCase()
  });
}

