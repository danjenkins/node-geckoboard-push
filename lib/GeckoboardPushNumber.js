var Base = require('./GeckoboardPushSend');

module.exports = GeckoboardPushNumber;

function GeckoboardPushNumber(params,widget_key){
  this.options = params;
  this.options.widget_key = widget_key;
  this.prototype = new Base(this.options);
}

GeckoboardPushNumber.prototype.send = function(items, absolute, type, callback){
  /*
    http://docs.geckoboard.com/api/custom-widgets.html#number
    items needs to be an array
    each object needs to have text and a value, second value can either be empty or non existant to not have % value
  */

  var absolute = absolute || false;
  var type = type || 'standard';

  var data = {
    type: type,
    absolute: absolute,
    item: items
  };
  this.prototype.send(data, callback);
}