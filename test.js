describe('i18n', function() {
  function assert(a, b) {
    if (a !== b) {
      throw new Error(a + ' is not equal ' + b);
    }
  }

  it('should translate right', function() {
    var _ = require('./');
    _.load('zh', {'me': '我'});

    assert(_('me'), 'me');

    _.lang = 'zh';
    assert(_('me'), '我');
  });
});
