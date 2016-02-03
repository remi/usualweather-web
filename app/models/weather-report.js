import DS from 'ember-data';

export default DS.Model.extend({
  // Attributes
  month: DS.attr('number'),
  average_weather: DS.attr('number') /* eslint camelcase:0 */
});
