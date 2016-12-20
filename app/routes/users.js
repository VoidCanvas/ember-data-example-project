import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		if(params.userId === undefined){
			return this.store.findAll("user");
		} else {
			return this.store.findRecord("user" ,params.userId);
		}
	}
});
