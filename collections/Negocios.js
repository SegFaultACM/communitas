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
	nombreEncargado:{
		type: String,
		label: "Nombre del encargado"
	},
	codigoPostal:{
		type: String,
		label: "Codigo postal"
	},
	delegacion:{
		type: String,
		label: "Delegacion o municipio"
	},
	calle:{
		type: String,
		label: "Calle"
	},
	numeroCalle:{
		type: String,
		label: "Numero del local"
	},
	telefono:{
		type: Number,
		label: "Numero de telefono"
	},
	metrosCuadrados:{
		type: Number,
		label: "Mts. de area del local"
	},
	activo:{
		type:Boolean,
		defaultValue:true,
		optional:true,
		autoform:{
			type:"hidden"
		}
	},
	coord:{
		type: [Coordenada,Coordenada]
	},
	horario:{
		type: [String],
		label: "Horas de operacion"
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