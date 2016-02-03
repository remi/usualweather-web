import Ember from 'ember';

const {Controller} = Ember;

export default Controller.extend({
  actions: {
    onCityChange(cityId) {
      this.transitionToRoute('cities.show', cityId);
    }
  }
});
