var Base = require('./GeckoboardPushSend');

module.exports = GeckoboardPushList;

function GeckoboardPushList(params,widget_key){
  this.options = params;
  this.options.widget_key = widget_key;
  this.prototype = new Base(this.options);
}

GeckoboardPushList.prototype.send = function(items, callback){
  /*
    http://www.geckoboard.com/developers/custom-widgets/widget-types/list

  */

  var data = {
    item: items
  };
  this.prototype.send(data, callback);
}