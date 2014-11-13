

if (Meteor.isServer) {

    Meteor.methods({
        'getRandomMovieTitle': function () {

            _simulateDelay(2);

            switch (Math.floor(Math.random() * 6)) {
                case 0:
                    return 'Star Wars';
                case 1:
                    return 'King Kong';
                case 2:
                    return 'Memento';
                case 3:
                    return 'The Godfather';
                case 4:
                    return 'Prometheus';
                case 5:
                    return 'Interstellar';
            }
        }

    });


    function _simulateDelay(delayInSeconds) {
        // simulate delay
        var Future = Npm.require('fibers/future');
        var future = new Future();
        Meteor.setTimeout(function () {
            future.return();
        }, delayInSeconds * 1000); // in seconds
        future.wait();
    }

}
