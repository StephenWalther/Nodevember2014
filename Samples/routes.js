
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


});