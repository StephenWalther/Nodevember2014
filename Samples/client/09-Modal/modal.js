

var _showModal = false;
var _showModalDependency = new Tracker.Dependency();

Tracker.autorun(function() {
    _showModalDependency.depend();
    if (_showModal) {
        $('#modalDialog').fadeIn();
    } else {
        $('#modalDialog').fadeOut();
    }

});

Template.modal.events({
   'click #show': function() {
        _showModal = true;
       _showModalDependency.changed();
   },

    'click #hide': function() {
        _showModal = false;
        _showModalDependency.changed();
    }
});