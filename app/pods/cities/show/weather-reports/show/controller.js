import Ember from 'ember';

const {Controller} = Ember;

export default Controller.extend({
  actions: {
    onMonthChange(monthId) {
      if (monthId) {
        const month = this.model.months.findBy('id', monthId);
        this.transitionToRoute('cities.show.weather-reports.show', month.get('name'));
      } else {
        this.transitionToRoute('cities.show');
      }
    }
  }
});
