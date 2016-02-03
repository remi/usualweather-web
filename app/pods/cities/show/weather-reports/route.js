import Ember from 'ember';

const {Route, RSVP} = Ember;

export default Route.extend({
  model() {
    const {cities, months} = this.modelFor('cities.show');
    const {city} = this.modelFor('cities.show');
    const weatherReports = this.get('store').query('weather-report', {city_id: city.get('id')}); /* eslint camelcase:0 */

    return RSVP.hash({cities, city, weatherReports, months});
  }
});
