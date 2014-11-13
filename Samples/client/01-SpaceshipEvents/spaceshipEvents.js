/************
    Create spaceship
 *************/

var spaceship = {

    _temperature: 0,
    _listeners: [],

    getTemperature: function() {
        return this._temperature;
    },

    setTemperature: function(value) {
        if (value != this._temperature) {
            this._temperature = value;
            this.changed();
        }
    },

    changed: function() {
        for (var i=0;i< this._listeners.length;i++) {
            this._listeners[i]();
        }
    },

    onChanged: function(func) {
        this._listeners.push(func);
    }
};

/************
 Update dashboard when temperature changes
 *************/
spaceship.onChanged(function() {
    // get temperature
    var temp = spaceship.getTemperature();

    // Update dashboard gauge
    gauge.setValue(temp);
});


/************
 Change temperature
 *************/

spaceship.setTemperature(140);
