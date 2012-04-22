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
  this.pooling = ( ( params.pooling != undefined ) ? params.pooling : true );
}

GeckoboardPush.prototype.sendMap = function(){
  /*
  http://docs.geckoboard.com/api/custom-widgets.html#map
{
    "points": {
        "point": [
            {
                "city": {
                    "city_name": "london",
                    "country_code": "GB"
                }
            },
            {
                "city": {
                    "city_name": "San Francisco",
                    "region_code": "CA",
                    "country_code": "US"
                }
            },
            {
                "latitude": "51.526263",
                "longitude": "-0.092429"
            },
            {
                "latitude": "-33.94336",
                "longitude": "18.896484"
            },
            {
                "host": "geckoboard.com"
            },
            {
                "ip": "178.125.193.227"
            }
        ]
    }
}
  */
}

GeckoboardPush.prototype.sendNumber = function(){
  /*
  http://docs.geckoboard.com/api/custom-widgets.html#number
second value can either be empty or non existant to not have % value
  { "item" : [ { "text" : "",
        "value" : 123
      },
      { "text" : "",
        "value" : 238
      }
    ] }
  */
}

GeckoboardPush.prototype.sendRagColumn = function(){
  /*
  http://docs.geckoboard.com/api/custom-widgets.html#rag-column
  {
   "item":[
      {
         "value": 132,
         "text": "Red description"
 },
      {
         "value": 13,
         "text": "Amber description"
 },
      {
         "value": 3,
         "text": "Green description"
   }
   ]
}
  */
}

GeckoboardPush.prototype.sendRag = function(){
  /*
  http://docs.geckoboard.com/api/custom-widgets.html#rag
  {
   "item":[
      {
         "value": 132,
         "text": "Red description"
 },
      {
         "value": 13,
         "text": "Amber description"
 },
      {
         "value": 3,
         "text": "Green description"
   }
   ]
}
  */
}

GeckoboardPush.prototype.sendHighchart = function(){
  /*
  http://docs.geckoboard.com/api/custom-charts.html#highcharts
  http://www.highcharts.com/ref/#chart
  {
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
      },
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
       series: [{
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
      }]
   }
  */
}

GeckoboardPush.prototype.sendPie = function(){
  /*
  http://docs.geckoboard.com/api/custom-charts.html#pie
  The last 2 digits in the hex colour attribute are entirely optional and represent the desired transparency.
  { 
"item": [ 
{ 
"value": "100", 
"label": "May", 
"colour": "FFFF10AA" 
}, 
{ 
"value": "160", 
"label": "June", 
"colour": "FFAA0AAA" 
}, 
{ 
"value": "300", 
"label": "July", 
"colour": "FF5505AA" 
}, 
{ 
"value": "140", 
"label": "August", 
"colour": "FF0000AA" 
} 
] 
}
  */
}

GeckoboardPush.prototype.sendLine = function(){
  /*
  http://docs.geckoboard.com/api/custom-charts.html#line
  {
    "item": [
     "12.3",
     "2.3",
     "10",
     "15",
     "15",
     "13",
     "12.1",
     "9.8",
     "12.3",
     "2.3",
     "10",
     "15",
     "15",
     "13",
     "12.1",
     "9.8",
     "11",
     "16",
     "15",
     "13",
     "10",
     "7"
    ],
    "settings": {
     "axisx": [
      "Jun",
      "Jul",
      "Aug"
     ],
     "axisy": [
      "Min",
      "Max"
     ],
     "colour": "ff9900"
    }
}
  */
}

GeckoboardPush.prototype.sendGeckoMeter = function(){
  /*
  http://docs.geckoboard.com/api/custom-charts.html#geckometer
  { "item" : "23",
  "max" : { "text" : "Max value",
      "value" : "30"
    },
  "min" : { "text" : "Min value",
      "value" : "10"
    }
    "type" : "reverse" (standard|reverse)
}
  */
}

GeckoboardPush.prototype.sendFunnel = function(){
  /*
  http://docs.geckoboard.com/api/custom-charts.html#funnel
  { 
"type": "reverse", (standard|reverse)
"percentage": "hide", (show|hide)
"item": [ 
{ 
"value": "87809", 
"label": "Step1" 
}, 
{ 
"value": "70022", 
"label": "Step2" 
}, 
{ 
"value": "63232", 
"label": "Step 3" 
}, 
{ 
"value": "53232", 
"label": "Step 4" 
}, 
{ 
"value": "32123", 
"label": "Step 5" 
}, 
{ 
"value": "23232", 
"label": "Step 6" 
}, 
{ 
"value": "12232", 
"label": "Step 7" 
}, 
{ 
"value": "2323", 
"label": "Step 8" 
} 
] 
}
  */
}

GeckoboardPush.prototype.sendBullet = function(){
  /*
  http://docs.geckoboard.com/api/custom-charts.html#bullet
  http://blog.geckoboard.com/introduction-to-bullet-graphs
  {
    "orientation": "horizontal",
    "item": {
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
}
  */
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
      console.log(response);
    }).on('close', function(){
    
    });

  });

  req.on('error', function(e) {
    console.log('problem with request: ' + e.message, e);
  });

  // write data to request body
  req.write(JSON.stringify({
    api_key: self.api_key,
    data: data 
  );
  req.end();
}