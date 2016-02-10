import Ember from 'ember';

const {GlimmerComponent, Object} = Ember;

export default GlimmerComponent.extend({
  emptyName: '…',

  value: function() {
    return Ember.copy(this.attrs['selected-id']);
  }.property('attrs.selected-id'),

  actions: {
    handleChange(selection, component) {
      let value = null;

      if (selection) {
        value = selection;
      } else {
        value = component.get('attrs.empty-id');
      }

      this.attrs['on-change'](value);
    }
  }
});
