/* global describe, it, expect, before */
/* jshint expr: true */

var chai = require('chai')
  , Strategy = require('../lib/strategy');


describe('Strategy', function() {

  describe('setting user object', function() {
    var strategy = new Strategy('test', {
      name: 'johndoe',
      email: 'john@doe.com'
    });

    var user;

    before(function(done) {
      chai.passport(strategy)
        .success(function(u) {
          user = u;
          done();
        })
        .authenticate();
    });

    it('should forward data', function() {
      expect(user).to.be.an.object;
      expect(user.name).to.equal('johndoe');
      expect(user.email).to.equal('john@doe.com');
    });

  });
});
