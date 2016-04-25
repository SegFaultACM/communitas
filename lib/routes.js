FlowRouter.route('/', {
	name:'home',
	action(){
		BlazeLayout.render('MainLayout', {main: 'ShowNegocios'})
	}
});

FlowRouter.route('/negocios', {
	name:'negocios',
	action(){
		BlazeLayout.render('MainLayout', {main: 'ShowNegocios'})
	}
})

FlowRouter.route('/negocios/nuevo', {
	name:'negociosNuevos',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Negocios'})
	}
})
FlowRouter.route('/mapa', {
	name:'mapa',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Mapa'});
	}
});

FlowRouter.route('/busqueda', {
	name:'busqueda',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Busqueda'});
	}
});
