/**
 * Module dependencies.
 */
var passport = require('passport-strategy')
  , util = require('util');


/**
 * `Strategy` constructor.
 *
 *
 * @param {String} name
 * @param {Object} data
 * @api public
 */
function Strategy(name, user) {
  if (!name || name.length === 0) { throw new TypeError('DevStrategy requires a Strategy name') ; }

  passport.Strategy.call(this);
  this.name = name;
  this._user = user;
}

/**
 * Inherit from `passport.Strategy`.
 */
util.inherits(Strategy, passport.Strategy);

/**
 * Authenticate using supplied user.
 *
 * @param {Object} req
 * @api protected
 */
Strategy.prototype.authenticate = function() {
  this.success(this._user);
};


/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
