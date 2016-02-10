import Ember from 'ember';

const {GlimmerComponent, Object} = Ember;

export default GlimmerComponent.extend({
  isBlankSelected: function() {
    if (this.attrs['selected-id'] === this.attrs['empty-id']) {
      return 'selected';
    } else {
      return '';
    }
  }.property('attrs.options', 'attrs.selected-id', 'attrs.empty-id'),

  htmlOptions: function() {
    return this.attrs.options.reduce((memo, option) => {
      let newOption = Object.create(option.getProperties(['id', 'name']));

      const selected = (this.attrs['selected-id'] && (newOption.get('id') === this.attrs['selected-id']));
      newOption.set('selected', selected ? 'selected' : '');

      memo.push(newOption);
      return memo;
    }, []);
  }.property('attrs.options', 'attrs.selected-id'),

  actions: {
    handleChange() {
      let id = this.$('select').val();
      if (id === '') id = this.attrs.emptyId;

      this.attrs['on-change'](id);
    }
  }
});
