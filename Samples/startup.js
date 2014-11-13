

db = {};

db.movies = new Meteor.Collection('movies');


if (Meteor.isServer) {

    Meteor.startup(function() {
        if (db.movies.find().count() === 0) {
            var seed = [
                {title: 'Bladerunner'},
                {title: 'The Godfather'},
                {title: 'Inception'},
                {title: 'The Rocketeer'},
                {title: 'The Black Hole'},
                {title: 'King Kong'},
                {title: 'Star Wars'},
                {title: 'King Kong'},
                {title: 'Memento'},
                {title: 'Aliens'},
                {title: 'Prometheus'}
            ];
            for (var i=0;i< seed.length;i++) {
                db.movies.insert(seed[i]);
            }
        }
    });


}