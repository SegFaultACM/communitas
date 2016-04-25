Zonas = new Mongo.Collection('Zonas');

Zonas.allow({
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

ZonasSchema = new SimpleSchema({
	name:{
		type: String,
		label: "Nombre del Area Verde"
		
	},
	desc:{
		type: String,
		label: "Descripcion del Area Verde"
	},
	metr:{
		type: Number,
		label: "Metros Cuadrados"
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

Zonas.attachSchema(ZonasSchema);