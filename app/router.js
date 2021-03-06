import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts', function() {
    this.route('single', {path: ":id"});
    this.route('user', {path: "user/:userId"});
  });
  this.route('users');
});

export default Router;
