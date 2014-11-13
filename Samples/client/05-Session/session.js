

Template.session.events({

    'submit': function(e, template) {
        e.preventDefault();

        // get message from input element
        var newMessage = template.find('#newMessage').value;

        // assign to session and allow rest of app to react
        Session.set("message", newMessage);
    }

});



Template.session.helpers({

    message: function() {
        // because helpers are run in Tracker.autorun()
        // and session is a reactive data source
        // this function will rerun whenever Session message changes.
        return Session.get("message");
    }

});