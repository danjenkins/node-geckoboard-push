var Base = require('./GeckoboardPushSend');

module.exports = GeckoboardPushText;

function GeckoboardPushText(params,widget_key){
  this.options = params;
  this.options.widget_key = widget_key;
  this.prototype = new Base(this.options);
}

GeckoboardPushText.prototype.send = function(items, callback){
  /*
    http://docs.geckoboard.com/api/custom-widgets.html#text
    Can have up to 10 values.
    Types: 0=None (no corner icon), 1=Alert (yellow corner icon), 2=Info (grey corner icon).
    The text in this widget can be plain or styled HTML
    array of objects, each object needs text and type
  */

  var data = {
    item: items
  };
  this.prototype.send(data, callback);
}