import Ember from 'ember';

const {Route, RSVP} = Ember;

export default Route.extend({
  titleToken(model) {
    return model.month.get('name');
  },

  model(params) {
    const {cities, months} = this.modelFor('cities');
    const {city} = this.modelFor('cities.show');
    const {weatherReports} = this.modelFor('cities.show.weather-reports');

    const month = months.findBy('name', params.month_id); /* eslint camelcase:0 */
    let weatherReport = null;

    if (month) {
      weatherReport = weatherReports.findBy('month', month.get('id'));
    } else {
      weatherReport = null;
    }

    return RSVP.hash({cities, city, weatherReports, weatherReport, months, month});
  }
});
