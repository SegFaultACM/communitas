Meteor.subscribe('negocios');

Template.Busqueda.helpers({
	negociosBusqueda: ()=>{
		return Negocios.find({name:"Papeleria"});
	}
});
