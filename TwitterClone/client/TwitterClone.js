
Template.tweets.helpers({

  // This code will run automatically when the list of tweets change
  getTweets: function () {
    return db.tweets.find({}, {sort:{dateCreated:-1}, limit:5});
  }

});


Template.tweets.events({

  'submit': function (e, template) {
    e.preventDefault();

    db.tweets.insert({
      dateCreated: new Date(),
      author: template.find('#author').value,
      tweet: template.find('#tweet').value
    });

    // clear the input
    template.find('#tweet').value = '';


    // Notice that I do not need to refresh the list of tweets.
    // We are reactive!
  }

});

