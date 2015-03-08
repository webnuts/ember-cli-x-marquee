import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    var self = this;
    var supportedArguments = ['duration', 'gap', 'delayBeforeStart', 'direction', 'duplicated', 'pauseOnHover'];
    var marqueeArguments = {};

    supportedArguments.forEach(function(key) {
      var value = self.get(key);
      if (value !== undefined) {
        marqueeArguments[key] = value;
      }
    });

    var element = this.$();
    element.marquee(marqueeArguments);
  },

  willClearRender: function() {
    var element = this.$();
    element.marquee('destroy');
  }
});