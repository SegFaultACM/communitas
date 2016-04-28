

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

FlowRouter.route('/busqueda/', {
	name:'busqueda',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Busqueda'});
	}
});


FlowRouter.route('/busqueda/:query', {
	name:'busqueda',
	action(query){
		BlazeLayout.render('MainLayout', {main: 'Busqueda', search:query});

	}
});

FlowRouter.route('/areasverdes', {
	name:'areas',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Mapa'});
	}
});

FlowRouter.route('/areasinteres', {
	name:'areas',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Mapa'});
	}
});