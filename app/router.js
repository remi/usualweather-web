import Ember from 'ember';
import config from './config/environment';

const {Router} = Ember;
const router = Router.extend({
  location: config.locationType
});

router.map(function() {
  this.route('cities', {path: ''}, function() {
    this.route('show', {path: ':city_id'}, function() {
      this.route('weather-reports', {path: 'around'}, function() {
        this.route('show', {path: ':month_id'});
      });
    });
  });
});

export default router;
