import Ember from 'ember';
import Payment from "../models/payment";
import config from '../config/environment';

export default Ember.Route.extend({
	model: function() {
    var url = config.APP.ApiUrl + 'api/payments';
    return Ember.$.getJSON(url).then(function(data) {
			if (data.payments) {
				var payments = data.payments.reverse();
				data.payments = payments.map(function(p) {
					return Payment.create(p);
				});
			}
			return data;
    });
	},

  setupController: function(controller, model) {
    this._super(controller, model);
  }
});
