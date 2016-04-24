Meteor.publish('negocios', function () {
	return Negocios.find({});
});
