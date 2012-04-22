var Base = require('./GeckoboardPushSend');

module.exports = GeckoboardPushFunnel;

function GeckoboardPushFunnel(params,widget_key){
  this.options = params;
  this.options.widget_key = widget_key;
  this.prototype = new Base(this.options);
}


GeckoboardPushFunnel.prototype.send = function(items, type, percentage, callback){
  /*
    http://docs.geckoboard.com/api/custom-charts.html#funnel
    items is an array of objects, each with a value and a label, type is either standard or reverse, and percentage is either show or hide
  */
  var type = type || 'standard';
  var percentage = percentage || 'show';

  var data = {
    item: items,
    type: type,
    percentage: percentage
  };

  this.prototype.send(data, callback);
}