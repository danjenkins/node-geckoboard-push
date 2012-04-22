var Base = require('./GeckoboardPushSend');

module.exports = GeckoboardPushBullet;

function GeckoboardPushBullet(params,widget_key){
  this.options = params;
  this.options.widget_key = widget_key;
  this.prototype = new Base(this.options);
}


GeckoboardPushBullet.prototype.send = function(items, orientation, callback){
  /*
    http://docs.geckoboard.com/api/custom-charts.html#bullet
    http://blog.geckoboard.com/introduction-to-bullet-graphs
    items is an array of objects as below
    {
     "label": "Revenue 2011 YTD",
     "sublabel": "(U.S. $ in thousands)",
     "axis": {
      "point": [
       "0",
       "200",
       "400",
       "600",
       "800",
       "1000"
      ]
     },
     "range":[
      { "color": "red",
        "start": 0,
        "end": 400
      },
      {"color": "amber",
        "start": 401,
        "end": 700
      },
      { "color": "green",
        "start": 701,
        "end": 1000
      }
    ],
     "measure": {
      "current": {
       "start": "0",
       "end": "500"
      },
      "projected": {
       "start": "100",
       "end": "900"
      }
     },
     "comparative": {
      "point": "600"
     }
    }
  */
  var orientation = orientation || 'horizontal';

  var data = {
    item: items,
    orientation: orientation
  };

  this.prototype.send(data, callback);
}