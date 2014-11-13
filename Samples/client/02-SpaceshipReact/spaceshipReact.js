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
 Update dashboard when temperature changes
 *************/
Tracker.autorun(function() {
    // get temperature
    var temp = spaceship.getTemperature();

    // Update dashboard gauge
    gauge.setValue(temp);
});


/************
 Change temperature
 *************/

Template.spaceshipReact.created = function() {
    spaceship.setTemperature(0);
}

Template.spaceshipReact.rendered = function() {
    spaceship.setTemperature(20);
}
