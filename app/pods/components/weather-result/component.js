import Ember from 'ember';

const {GlimmerComponent, computed} = Ember;

const ZERO = 0;
const TWENTY = 20;
const MINUS_TWENTY = -20;

export default GlimmerComponent.extend({
  isVisible: computed.notEmpty('attrs.number'),
  commentIsVisible: computed.notEmpty('comment'),

  integerNumber: function() {
    return parseInt(this.attrs.number, 10);
  }.property('attrs.number'),

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
  }.property('integerNumber')
});
