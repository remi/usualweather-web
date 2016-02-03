/* eslint-env node */
/* eslint-env es6:false */
/* eslint no-var:0 */
/* eslint prefer-template:0 */
/* eslint object-shorthand:0 */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'usual-weather',
    podModulePrefix: 'usual-weather/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto'
  };

  ENV.EmberENV = {
    FEATURES: {},
    LOG_VERSION: false
  };

  ENV.APP = {};

  ENV.API = {
    HOST: process.env.API_HOST,
    NAMESPACE: process.env.API_NAMESPACE
  };

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-inline' use.typekit.net",
    'font-src': "'self' data: use.typekit.net",
    'connect-src': "'self' " + ENV.API.HOST,
    'img-src': '* p.typekit.net',
    'style-src': "'self' 'unsafe-inline' use.typekit.net",
    'media-src': "'self'"
  };

  if (environment === 'test') {
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  return ENV;
};
