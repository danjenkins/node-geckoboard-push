var Base = require('./GeckoboardPushSend');

module.exports = GeckoboardPushMap;

function GeckoboardPushMap(params,widget_key){
  this.options = params;
  this.options.widget_key = widget_key;
  this.prototype = new Base(this.options);
}

GeckoboardPushMap.prototype.send = function(points, callback){
  /*
    http://docs.geckoboard.com/api/custom-widgets.html#map
    points needs to be an array of objects
    these objects can have: 
      city object -> city_name and country_code (and/or) region_code for greater accuracy
      latitude
      longitude
      host
      ip
    All of these can have:
      size (optional, default 3)
      color (optional, hex color)
      cssclass (optional)
  */
  var data = {
    points: {
      point: points
    }
  };
  this.prototype.send(data, callback);
}