var Base = require('./GeckoboardPushSend');

module.exports = GeckoboardPushPie;

function GeckoboardPushPie(params,widget_key){
  this.options = params;
  this.options.widget_key = widget_key;
  this.prototype = new Base(this.options);
}


GeckoboardPushPie.prototype.send = function(items, callback){
  /*
    http://docs.geckoboard.com/api/custom-charts.html#pie
    items must be an array of objects with value, label and colour, the last 2 digits in the hex colour attribute are entirely optional and represent the desired transparency
  */
  var data = {
    item: items
  };
  this.prototype.send(data, callback);
}