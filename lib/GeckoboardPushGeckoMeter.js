var Base = require('./GeckoboardPushSend');

module.exports = GeckoboardPushGeckoMeter;

function GeckoboardPushGeckoMeter(params,widget_key){
  this.options = params;
  this.options.widget_key = widget_key;
  this.prototype = new Base(this.options);
}


GeckoboardPushGeckoMeter.prototype.send = function(item, min, max, type, callback){
  /*
    http://docs.geckoboard.com/api/custom-charts.html#geckometer
    item is a value, max is an object with text and value, min in an object with text and value and type standard or reverse
  */

  var type = type || 'standard';

  var data = {
    item: item,
    min: min,
    max: max,
    type: type
  };

  this.prototype.send(data, callback);
}