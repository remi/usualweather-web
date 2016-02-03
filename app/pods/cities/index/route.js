import Ember from 'ember';

const {Route, RSVP} = Ember;

export default Route.extend({
  model() {
    const {cities, months} = this.modelFor('cities');
    return RSVP.hash({cities, months});
  }
});
