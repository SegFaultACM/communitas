FlowRouter.route('/', {
	name:'home',
	action(){
		BlazeLayout.render('HomeLayout');
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