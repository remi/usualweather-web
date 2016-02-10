/* eslint-env node */
/* eslint-env es6:false */
/* eslint no-var:0 */

'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    hinting: false,
    fingerprint: {
      replaceExtensions: ['html', 'css', 'js', 'json']
    },
    autoprefixer: {
      browsers: [
        'ie >= 10',
        'safari >= 7',
        'last 2 versions',
        'ios >= 7'
      ]
    },
    babel: {
      includePolyfill: true
    }
  });

  app.import('bower_components/simple-css-reset/reset.css');

  return app.toTree();
};
