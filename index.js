/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-x-marquee',
  included: function(app) {
    this._super.included(app);
    
    app.import(app.bowerDirectory + '/jquery.marquee/index.js');
  }
};