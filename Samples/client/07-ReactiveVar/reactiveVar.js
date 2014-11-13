

Template.reactiveVar.created = function() {
    // loading
    this.loading = new ReactiveVar();
    this.loading.set(false);

    // movie title
    this.movieTitle = new ReactiveVar();
    this.movieTitle.set('????');
}

Template.reactiveVar.helpers({
    loading: function() {
        return Template.instance().loading.get();
    },

    movieTitle: function() {
        return Template.instance().movieTitle.get();
    }
});

Template.reactiveVar.events({
    'click': function(e, template) {
        e.preventDefault();

        // show loading
        template.loading.set(true);

        // Call back to server to get movie
        Meteor.call('getRandomMovieTitle', function(err, title) {
            // hide loading
            template.loading.set(false);
            if (title) {
                // show title
                template.movieTitle.set(title);
            }
        });
    }

})



