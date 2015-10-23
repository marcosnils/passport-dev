/* global describe, it, expect */

var Strategy = require('../lib/strategy');


describe('Strategy', function() {

  var strategy = new Strategy('test');

  it('should use the provided name', function() {
    expect(strategy.name).to.equal('test');
  });

  it('should throw if constructed without a name or empty name ', function() {
    expect(function() {
      var s = new Strategy();
    }).to.throw(TypeError, 'DevStrategy requires a Strategy name');
    expect(function() {
      var s = new Strategy('');
    }).to.throw(TypeError, 'DevStrategy requires a Strategy name');
  });

});
