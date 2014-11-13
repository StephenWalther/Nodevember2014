

Template.sessionEquals.helpers({

    movies: function() {
       return db.movies.find();
    },

    // Bad Code
    getSelected: function() {
        var currentMovieId = this._id;
        console.log(currentMovieId);
        return Session.get('getSelected_movieId') === currentMovieId;
    },

    // Good Code
    equalsSelected: function() {
        var currentMovieId = this._id;
        console.log(currentMovieId);
        return Session.equals('equalsSelected_movieId', currentMovieId);
    }

});




Template.sessionEquals.events({
    'click #edit1': function(e) {
        e.preventDefault();

        var currentMovieId = this._id;
        Session.set('getSelected_movieId', currentMovieId);
    },

    'click #edit2': function(e) {
        e.preventDefault();

        var currentMovieId = this._id;
        Session.set('equalsSelected_movieId', currentMovieId);
    }

});