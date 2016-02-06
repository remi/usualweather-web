import Ember from 'ember';

const {Route, RSVP} = Ember;

export default Route.extend({
  titleToken(model) {
    return model.city.get('name');
  },

  model(params) {
    const {cities, months} = this.modelFor('cities');
    const city = this.get('store').peekRecord('city', params.city_id);

    return RSVP.hash({cities, city, months});
  }
});
