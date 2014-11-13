/************
 Create spaceship
 *************/

var spaceship = {

    _temperature: 0,
    _temperatureDepend: new Tracker.Dependency,

    getTemperature: function() {
        this._temperatureDepend.depend();
        return this._temperature;
    },

    setTemperature: function(value) {
        if (value != this._temperature) {
            this._temperature = value;
            this._temperatureDepend.changed();
        }
    }
};

/************
 Change temperature multiple times
 *************/

Template.flush.events({
    'click': function() {
        spaceship.setTemperature(1);
        spaceship.setTemperature(2);
        spaceship.setTemperature(3);
        spaceship.setTemperature(4);
        spaceship.setTemperature(5);
    }
});



Template.flush.created = function() {
    spaceship.setTemperature(0);
};


Template.flush.rendered = function() {

    this.autorun(function() {
        // get temperature
        var temp = spaceship.getTemperature();

        // show new value
        console.log(temp);
    });

};
