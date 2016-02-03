import DS from 'ember-data';
import config from 'usual-weather/config/environment';

const TYPES = {
  'city': 'cities',
  'weather-report': 'weather-reports'
};

export default DS.RESTAdapter.extend({
  host: `http://${config.API.HOST}`,
  pathForType(type) {
    return TYPES[type];
  }
});
