

if (Meteor.isClient) {

    Tracker.autorun(function (c) {

        var results = db.movies.find().fetch();
        console.log(c);
        debugger;

    });


}