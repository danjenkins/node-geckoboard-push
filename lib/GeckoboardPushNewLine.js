var Base = require('./GeckoboardPushSend');

module.exports = GeckoboardPushNewLine;

function GeckoboardPushNewLine(params,widget_key){
  this.options = params;
  this.options.widget_key = widget_key;
  this.prototype = new Base(this.options);
}

GeckoboardPushNewLine.prototype.send = function(items, callback){
  /*
    https://developer.geckoboard.com/#line-chart
    items is object with at least one series of data
  */

  this.prototype.send(items, callback);
}