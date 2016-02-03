import Ember from 'ember';

const {Controller} = Ember;

export default Controller.extend({
  actions: {
    onCityChange(cityId) {
      if (cityId) {
        this.transitionToRoute('cities.show', cityId);
      } else {
        this.transitionToRoute('cities.index');
      }
    }
  }
});
