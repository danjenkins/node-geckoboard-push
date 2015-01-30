var https = require('https');
var Buffer = require('buffer').Buffer;

module.exports = GeckoboardPushSend;

function GeckoboardPushSend(params){
  params = params || {};
  this.options = params;
  this.options.geckoPath = params.path || '/v1/send/' + this.options.widget_key;
}

GeckoboardPushSend.prototype.send = function(data, callback){
  var self = this;

  var body = JSON.stringify({
    api_key: self.options.api_key,
    data: data
  })

  var req = https.request({
    host: self.options.hostname,
    port: self.options.port,
    path: self.options.geckoPath,
    method: self.options.method,
    headers: {
      'Content-Length': Buffer.byteLength(body)
    }
  }, function(res) {
    res.setEncoding('utf8');
    var response = '';
    res.on('data', function (chunk) {
      response += chunk;
    }).on('end', function(){
      try{
        response = JSON.parse(response);
      }catch(e){
        if(typeof callback == 'function'){
          callback(e.message);
        }
      }
      if(typeof callback == 'function'){
        if(response.success == false){
          callback(response.error);
        }else{
          callback(null, response);
        }
      }
    }).on('close', function(){

    });
  });

  req.on('error', function(e) {
    if(typeof callback == 'function'){
      callback(e.message);
    }
  });

  // write data to request body
  req.write(body);

  req.end();
}
