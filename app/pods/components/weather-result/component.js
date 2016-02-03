import Ember from 'ember';

const {Component, computed} = Ember;

const ZERO = 0;
const TWENTY = 20;
const MINUS_TWENTY = -20;

export default Component.extend({
  classNames: ['weatherResult'],
  number: null,
  isVisible: computed.notEmpty('number'),
  commentIsVisible: computed.notEmpty('comment'),

  integerNumber: function() {
    return parseInt(this.get('number'), 10);
  }.property('number'),

  comment: function() {
    if (this.get('integerNumber') === ZERO) {
      return 'Zero?';
    }

    if (this.get('integerNumber') > TWENTY) {
      return 'That’s surprisingly warm.';
    }

    if (this.get('integerNumber') < MINUS_TWENTY) {
      return 'Wait. That can’t be right. OR IS IT?!';
    }

    return null;
  }.property('number')
});
