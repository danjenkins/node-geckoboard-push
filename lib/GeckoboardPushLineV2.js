var Base = require('./GeckoboardPushSend');

module.exports = GeckoboardPushLineV2;

function GeckoboardPushLineV2(params,widget_key){
  this.options = params;
  this.options.widget_key = widget_key;
  this.prototype = new Base(this.options);
}


GeckoboardPushLineV2.prototype.send = function(items, settings, callback){
  /*
    https://developer.geckoboard.com/#line-chart
    items is object with at least one series of data
  */
  this.prototype.send(items, callback);
}
