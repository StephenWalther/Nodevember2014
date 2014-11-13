
Template.minimongo.helpers({

    time: function() {
        return (new Date()).toLocaleTimeString();
    },

    selected: function() {
        var movieId = this._id;
        return Session.equals('selected',  movieId);
    },

    movies: function() {
        console.log('movies template helper called');
        return db.movies.find();

        // return db.movies.find().fetch(); <= don't call, every row is rerendered
    },

    moviesCount: function() {
        console.log('moviesCount template helper called');
        return db.movies.find().count();
    }

});



Template.minimongo.events({

    'click #edit': function(e) {
        e.preventDefault();

        var movieId = this._id;
        Session.set('selected', movieId);
    },

    'click #save': function(e, template) {
        e.preventDefault();

        var newTitle = template.find('#title').value;
        var movieId = this._id;
        db.movies.update(movieId, {$set:{title:newTitle}});
        Session.set('selected', null);
    },

    'click #delete': function(e, template) {
        e.preventDefault();

        var movieId = this._id;
        db.movies.remove(movieId);
        Session.set('selected', null);
    },

    'submit': function(e, template) {
        e.preventDefault();

        var newTitle = template.find('#newTitle').value;
        db.movies.insert({
            title: newTitle
        });
        e.target.reset();
    }

});