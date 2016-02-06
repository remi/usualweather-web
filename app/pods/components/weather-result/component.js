import Ember from 'ember';

const {Component, computed} = Ember;

const ZERO = 0;
const TWENTY = 20;
const MINUS_TWENTY = -20;

export default Component.extend({
  number: null,
  isVisible: computed.notEmpty('number'),
  commentIsVisible: computed.notEmpty('comment'),

  integerNumber: function() {
    return parseInt(this.get('number'), 10);
  }.property('number'),

  comment: function() {
    if (this.get('integerNumber') === ZERO) {
      return 'Zero? Nice.';
    }

    if (this.get('integerNumber') > TWENTY) {
      return 'That’s surprisingly warm.';
    }

    if (this.get('integerNumber') < MINUS_TWENTY) {
      return 'Are you kidding me?';
    }

    return null;
  }.property('number')
});
