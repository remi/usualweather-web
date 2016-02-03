import Ember from 'ember';

const {Component, Object} = Ember;

export default Component.extend({
  classNames: ['selectInput'],
  options: [],
  isDisabled: false,
  emptyId: null,

  isBlankSelected: function() {
    if (this.get('selectedId') === this.get('emptyId')) {
      return 'selected';
    } else {
      return '';
    }
  }.property('options', 'selectedId', 'emptyId'),

  htmlOptions: function() {
    return this.get('options').reduce((memo, option) => {
      let newOption = Object.create(option.getProperties(['id', 'name']));

      const selected = (this.get('selectedId') && (newOption.get('id') === this.get('selectedId')));
      newOption.set('selected', selected ? 'selected' : '');

      memo.push(newOption);
      return memo;
    }, []);
  }.property('options', 'selectedId'),

  actions: {
    handleChange() {
      let id = this.$('select').val();
      if (id === '') id = this.get('emptyId');

      this.sendAction('onChange', id);
    }
  }
});
