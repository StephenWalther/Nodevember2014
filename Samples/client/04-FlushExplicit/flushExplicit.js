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


Template.flushExplicit.events({
   'click': function() {
       spaceship.setTemperature(1);
       Tracker.flush();
       spaceship.setTemperature(2);
       Tracker.flush();
       spaceship.setTemperature(3);
       Tracker.flush();
       spaceship.setTemperature(4);
       Tracker.flush();
       spaceship.setTemperature(5);
    }
});




/************
 Change temperature multiple times
 *************/
Template.flushExplicit.created = function() {
    spaceship.setTemperature(0);
};


Template.flushExplicit.rendered = function() {

    this.autorun(function() {
        // get temperature
        var temp = spaceship.getTemperature();

        // show new value
        console.log(temp);
    });

};
