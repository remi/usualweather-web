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
    },

    onMonthChange(monthId) {
      const month = this.model.months.findBy('id', monthId);
      this.transitionToRoute('cities.show.weather-reports.show', month.get('name'));
    }
  }
});
