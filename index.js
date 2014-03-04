
var _locales = {};

function i18n(message) {
  var l = _locales[i18n.lang] || {};
  return l[message] || message;
}

i18n.lang = 'en';

i18n.load = function(lang, message) {
  var l = _locales[lang] || {};
  for (var key in message) {
    l[key] = message[key];
  }
  _locales[lang] = l;
};

module.exports = i18n;
