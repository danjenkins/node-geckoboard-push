var https = require('https');
var util = require('util');

module.exports = GeckoboardPush;

function GeckoboardPush(params){
  params = params || {};

  this.widget_key = params.widget_key;
  this.api_key = params.api_key;
  this.hostname = params.host || 'push.geckoboard.com';
  this.port = params.port || '443';
  this.path = params.path || '/v1/send/' + this.widget_key;
  this.method = params.method || 'POST';
}

GeckoboardPush.prototype.send = function(data, callback){
  var self = this;
  
  var req = https.request({
    host: self.hostname,
    port: self.port,
    path: self.path,
    method: self.method
  }, function(res) {
    res.setEncoding('utf8');
    var response = '';
    res.on('data', function (chunk) {
      response += chunk;
    }).on('end', function(){
      response = JSON.parse(response);
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
  req.write(JSON.stringify({
    api_key: self.api_key,
    data: data 
  }));
  req.end();
}

GeckoboardPush.prototype.sendMap = function(points, callback){
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
  this.send(data, callback);
}

GeckoboardPush.prototype.sendNumber = function(items, callback){
  /*
    http://docs.geckoboard.com/api/custom-widgets.html#number
    items needs to be an array
    each object needs to have text and a value, second value can either be empty or non existant to not have % value
  */
  var data = {
    item: items
  };
  this.send(data, callback);
}

GeckoboardPush.prototype.sendRagColumn = function(items, type, callback){
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
  this.send(data, callback);
}

GeckoboardPush.prototype.sendRag = function(items, type, callback){
  /*
    http://docs.geckoboard.com/api/custom-widgets.html#rag
    exactly the same data structure as RagColumn I think, just a different widget which doesn't show a column
  */
  this.sendRagColumn(items, type, callback);
}

GeckoboardPush.prototype.sendText = function(items, callback){
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
  this.send(data, callback);
}

GeckoboardPush.prototype.sendHighchart = function(chart, colors, credits, title, tooltip, legend, plotOptions, series, callback){
  
  /*
  http://docs.geckoboard.com/api/custom-charts.html#highcharts
  http://www.highcharts.com/ref/#chart
  
  chart: {
    renderTo: 'container',
    plotBackgroundColor: 'rgba(35,37,38,0)',
    backgroundColor: 'rgba(35,37,38,100)',
    borderColor: 'rgba(35,37,38,100)',
    lineColor: 'rgba(35,37,38,100)',
    plotBorderColor: 'rgba(35,37,38,100)',
    plotBorderWidth: null,
    plotShadow: false,
    height: 170
  }

  colors: [
    '#058DC7', 
    '#50B432', 
    '#EF561A'
  ],
  
  credits: {
    enabled: false
  },
  
  title: {
    text: null
  },
  
  tooltip: {
    formatter: function() {
      return '<b>'+ this.point.name +'</b>: '+ this.y +' users';
    }
  },
    
  legend: {
    borderColor: 'rgba(35,37,38,100)',
    itemWidth: 55,
    margin: 5,
    width: 200
  },
  
  plotOptions: {
    pie: {
      animation: true,
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false
      },
      showInLegend: true,
      size: '100%'
    }
  },
  series: [
    {
      type: 'pie',
      name: 'New vs Returning',
      data: [
        ['Free', 13491],
        {
          name: 'Basic',    
          y: 1882,
          sliced: true,
          selected: true
        },
        ['Premium', 313]
      ]
    }
  ]
  */

  var data = {};

  if(chart){
    data.chart = chart;
  }
  if(colors){
    data.colors = colors;
  }
  if(colours && !colors){
    data.colors = colours;
  }
  if(credits){
    data.credits = credits;
  }
  if(tooltip){
    data.tooltip = tooltip;
  }
  if(plotOptions){
    data.plotOptions = plotOptions;
  }
  if(series){
    data.series = series;
  }

  this.send(data, callback);
}

GeckoboardPush.prototype.sendPie = function(items, callback){
  /*
    http://docs.geckoboard.com/api/custom-charts.html#pie
    items must be an array of objects with value, label and colour, the last 2 digits in the hex colour attribute are entirely optional and represent the desired transparency
  */
  var data = {
    item: items
  };
  this.send(data, callback);
}

GeckoboardPush.prototype.sendLine = function(items, settings, callback){
  /*
    http://docs.geckoboard.com/api/custom-charts.html#line
    items is an array of values, settings is an object containing axisx (an array of values), axisy (an array of values), and colour which is a hex value
  */
  var data = {
    item: items,
    settings: settings
  };
  this.send(data, callback);
}

GeckoboardPush.prototype.sendGeckoMeter = function(item, min, max, type, callback){
  /*
    http://docs.geckoboard.com/api/custom-charts.html#geckometer
    item is a value, max is an object with text and value, min in an object with text and value and type standard or reverse
  */

  var type = type || 'standard';

  var data = {
    item: item,
    min: min,
    max: max,
    type: type
  };

  this.send(data, callback);
}

GeckoboardPush.prototype.sendFunnel = function(items, type, percentage, callback){
  /*
    http://docs.geckoboard.com/api/custom-charts.html#funnel
    items is an array of objects, each with a value and a label, type is either standard or reverse, and percentage is either show or hide
  */
  var type = type || 'standard';
  var percentage = percentage || 'show';

  var data = {
    item: items,
    type: type,
    percentage: percentage
  };

  this.send(data, callback);
}

GeckoboardPush.prototype.sendBullet = function(item, orientation, callback){
  /*
    http://docs.geckoboard.com/api/custom-charts.html#bullet
    http://blog.geckoboard.com/introduction-to-bullet-graphs
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
    item: item,
    orientation: orientation
  };

  this.send(data, callback);
}