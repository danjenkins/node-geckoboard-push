var Base = require('./GeckoboardPushSend');

module.exports = GeckoboardPushLeaderboard;

function GeckoboardPushLeaderboard(params,widget_key){
    this.options = params;
    this.options.widget_key = widget_key;
    this.prototype = new Base(this.options);
}

GeckoboardPushLeaderboard.prototype.send = function(items, format, unit, callback){
    /*
     https://developer.geckoboard.com/#leaderboard
     items needs to be an array
     each object needs to have a label, second value can either be empty or non existant to not have % value
     */

    var format = format || 'decimal';

    var data = {
        format: format,
        items: items
    };

    // Only add unit if specified
    if(unit)
    {
        data.unit = unit;
    }

    this.prototype.send(data, callback);
}