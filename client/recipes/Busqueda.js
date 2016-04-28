Meteor.subscribe('negocios');



Template.Busqueda.helpers({
	negociosBusqueda: ()=>{
		var data = FlowRouter.getParam("query")
		return Negocios.find({name:{'$regex': data}});
	},
	getData: ()=>{
		var data = FlowRouter.getParam("query");
		console.log(data);
		return data;
	}
});
