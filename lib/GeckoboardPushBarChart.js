var Base = require('./GeckoboardPushSend');

module.exports = GeckoboardPushBarChart;

function GeckoboardPushBarChart(params,widget_key){
  this.options = params;
  this.options.widget_key = widget_key;
  this.prototype = new Base(this.options);
}


GeckoboardPushBarChart.prototype.send = function(items, callback){
  /*
    https://developer-custom.geckoboard.com/#bar-chart
    items is object with at least one series of data
  */
  this.prototype.send(items, callback);
}
