var https = require('https');

module.exports = GeckoboardPushSend;

function GeckoboardPushSend(params){
  params = params || {};
  this.options = params;
  this.options.geckoPath = params.path || '/v1/send/' + this.options.widget_key;
}

GeckoboardPushSend.prototype.send = function(data, callback){
  var self = this;
  console.log(self.options);
  var req = https.request({
    host: self.options.hostname,
    port: self.options.port,
    path: self.options.geckoPath,
    method: self.options.method
  }, function(res) {
    res.setEncoding('utf8');
    var response = '';
    res.on('data', function (chunk) {
      response += chunk;
    }).on('end', function(){
      try{
        response = JSON.parse(response);
      }catch(e){
        response = { 
          success: false,
          error: e.message 
        };
        if(typeof callback == 'function'){
          callback(response);
        }
      }
      if(typeof callback == 'function'){
        callback(response);
      }
    }).on('close', function(){
    
    });
  });

  req.on('error', function(e) {
    response = { 
      success: false,
      error: e.message 
    };
    if(typeof callback == 'function'){
      callback(response);
    }
  });

  // write data to request body
  req.write(
    JSON.stringify({
      api_key: self.options.api_key,
      data: data 
    })
  );

  req.end();
}