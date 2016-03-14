Negocios = new Mongo.Collection('negocios');

Negocios.allow({
	insert:function(userId, doc){
		return true
	}

});


Coordenada = new SimpleSchema({
	coordenada:{
		type:String,
		label:"Lat o long."
	}

});

NegociosSchema = new SimpleSchema({
	name:{
		type: String,
		label: "Nombre del Negocio"
		
	},
	desc:{
		type: String,
		label: "Descripcion del Negocio"
	},
	rama:{
		type: String,
		label: "Rama del Negocio"
	},
	giro:{
		type: String,
		label: "Giro del Negocio"
	},
	locacion:{
		type: String,
		label: "Rama del Negocio"
	},
	coord:{
		type: [Coordenada,Coordenada]
	},
	activo:{
		type:Boolean,
		defaultValue:true,
		optional:true,
		autoform:{
			type:"hidden"
		}
	},
	creador:{
		type: String, 
		label: "Creador",
		autoValue: function(){
			return this.userId
		},
		autoform:{
			type: "hidden"
		}
	},
	createdAt:{
		type:Date, 
		label:"Created At",
		autoValue: function(){
			return new Date()
		},
		autoform:{
			type: "hidden"
		}

	}

});



Negocios.attachSchema(NegociosSchema);