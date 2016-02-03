import Ember from 'ember';
import months from 'usual-weather/constants/months';

const {Route, RSVP} = Ember;

export default Route.extend({
  model() {
    const cities = this.get('store').findAll('city');
    return RSVP.hash({cities, months});
  }
});
