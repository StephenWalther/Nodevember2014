
Router.map(function () {


    this.route('sampleList', {
        path: '/'
    });


    this.route('spaceshipEvents', {
        path: '/01-SpaceshipEvents'
    });


    this.route('spaceshipReact', {
        path: '/02-SpaceshipReact'
    });


    this.route('flush', {
        path: '/03-Flush'
    });

    this.route('flushExplicit', {
        path: '/04-FlushExplicit'
    });


    this.route('session', {
        path: '/05-Session'
    });


    this.route('sessionEquals', {
        path: '/06-SessionEquals'
    });



    this.route('reactiveVar', {
        path: '/07-ReactiveVar'
    });



    this.route('minimongo', {
        path: '/08-Minimongo'
    });




    this.route('modal', {
        path: '/09-Modal'
    });


});