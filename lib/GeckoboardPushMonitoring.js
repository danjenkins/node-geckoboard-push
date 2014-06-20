var Base = require('./GeckoboardPushSend');

module.exports = GeckoboardPushMonitoring;

function GeckoboardPushMonitoring(params,widget_key){
  this.options = params;
  this.options.widget_key = widget_key;
  this.prototype = new Base(this.options);
}

GeckoboardPushMonitoring.prototype.send = function(status, downTime, responseTime, callback){
  /*
    http://www.geckoboard.com/developers/custom-widgets/widget-types/monitoring  
  */
  var data = {
    status: status,
    downTime: downTime,
    responseTime: responseTime
  };
  this.prototype.send(data, callback);
}