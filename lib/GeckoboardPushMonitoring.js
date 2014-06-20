var Base = require('./GeckoboardPushSend');

module.exports = GeckoboardPushMonitoring;

function GeckoboardPushMonitoring(params,widget_key){
  this.options = params;
  this.options.widget_key = widget_key;
  this.prototype = new Base(this.options);
}

GeckoboardPushMonitoring.prototype.send = function(argStatus, argDownTime, argResponseTime, callback){
  /*
    https://developer.geckoboard.com/#monitoring
  */

  var status = argStatus || 'Up';
  var downtime = argDownTime || '';
  var responseTime = argResponseTime || '';

  var data = {
    status: status,
    downTime: downtime,
    responseTime: responseTime
  };
  
  this.prototype.send(data, callback);
}
