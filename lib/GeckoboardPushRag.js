var Base = require('./GeckoboardPushSend');

module.exports = GeckoboardPushRag;

function GeckoboardPushRag(params,widget_key){
  this.options = params;
  this.options.widget_key = widget_key;
  this.prototype = new Base(this.options);
}

GeckoboardPushRag.prototype.send = function(items, type, callback){
  /*
    http://docs.geckoboard.com/api/custom-widgets.html#rag-column
    items needs to be an array of 3 objects
    each object needs a value and text and prefix (optional '&euro;','&pound;' or '$' for currency), first is RED, second is Amber, third is Green
    if the value is blank, the corresponding indicator won’t be displayed. Description is a max 40 characters.
  */

  var type = type || 'standard'; //can pass in reverse if you want things reversed

  var data = {
    item: items,
    type: type
  };
  this.prototype.send(data, callback);

}