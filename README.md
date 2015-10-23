# passport-dev

[![Build](https://travis-ci.org/marcosnils/passport-dev.png)](https://travis-ci.org/marcosnils/passport-dev)
[![Coverage Status](https://coveralls.io/repos/marcosnils/passport-dev/badge.svg?branch=master&service=github)](https://coveralls.io/github/marcosnils/passport-dev?branch=master)


[Passport](http://passportjs.org/) strategy for development environment.

This module lets you replace your passport strategies in development
for mocked responses without having to reconfigure your application routes.
By plugging into Passport, local authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Install

```bash
$ npm install passport-dev
```

## Usage

#### Configure Strategy

The dev authentication strategy authenticates using a mocked data
object which simulates the response obtained by the production provider.

```js
if (process.env.NODE_ENV == 'production' ) {
    passport.use(new TwitterStrategy({
        consumerKey: TWITTER_CONSUMER_KEY,
        consumerSecret: TWITTER_CONSUMER_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
      },
      function(token, tokenSecret, profile, done) {
        User.findOrCreate({ twitterId: profile.id }, function (err, user) {
          return done(err, user);
        });
      }
    ));
} else {
    passport.use(new DevStrategy('twitter', {
        user: '@marcosnils',
        email: 'marcos@mydomain.com'
    });
}
```

## Tests

```bash
$ npm install
$ npm test
```

## Credits

- [Marcos Nils Lillljedahl](http://github.com/marcosnils)

## License

[The MIT License](http://opensource.org/licenses/MIT)
