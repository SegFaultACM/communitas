Meteor.subscribe('negocios');

Template.ShowNegocios.helpers({
	negocios: ()=>{
		return Negocios.find({});
	}
});
