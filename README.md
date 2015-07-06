#geckoboard-push#

##Install##

```
npm install geckoboard-push
```

##Usage##

```js
var Geckoboard = require('geckoboard-push');

var foo = new Geckoboard({api_key: 'geckoboard_api_key'});
```

###Options###

####Required####
* **api_key** The key given to you in your account settings under API

####Optional####
(These options should never need to be changed)
* **params.host** defaults to `push.geckoboard.com`
* **port** defaults to `443` for https
* **method** defaults to `POST`
* **path** defaults to `'/v1/send/' + current_widget_key`

##Methods##

Details of types can be found at geckoboards docs:

* http://www.geckoboard.com/developers/custom-widgets/widget-types/
* http://www.geckoboard.com/developers/widget-editor/advanced/

###Map###
```js
var bar = foo.map('map_widget_key');
bar.send(items, function(err, response){
  //callback with response from geckoboard
})
```

Items is an Array of Objects

```js
[
  {
    city: {
      city_name: "london",
      country_code: "GB",
      region_code: "P5",
    },
    size: 8, /*Optional. Default = 3 */
    color: "d8f709", /*Optional. Hex color.*/
    cssclass: "mycss" /*Optional. Allows for custom CSS on the geckoboard dashboard */
  },
  {
    city: {
      city_name: "San Francisco",
      region_code: "CA",
      country_code: "US"
    }
  },
  {
    latitude: "51.526263",
    longitude: "-0.092429"
  },
  {
    latitude: "-33.94336",
    longitude: "18.896484"
  },
  {
    host: "geckoboard.com"
  },
  {
    ip: "178.125.193.227"
  }
]
```

###Monitoring###

```js
var bar = foo.monitoring('number_widget_key');
bar.send(status, downTime, responseTime, function(err, response){
  //callback with response from geckoboard
});
```
status can have the values 'Up' and 'Down', downTime and responseTime are optional

###Number###
```js
var bar = foo.number('number_widget_key');
bar.send(items, absolute, type, function(err, response){
  //callback with response from geckoboard
});
```
Items is an Array of Objects
```js
[
  { 
    text : "Some Text",
    value : 123 
  },
  {
    text : "Some more Text",
    value : 238
    prefix: "&pound;"
  }
] 
```
Absolute allows you to show numerical differences instead of Percentage based - defaults to `false`, can be set to `true`
Type allows you to reverse the colours - defaults to `standard`, set to `reverse` or `standard`

###Text###
```js
var bar = foo.text('text_widget_key');
bar.send(items, function(err, response){
  //callback with response from geckoboard
});
```
Items is an Array of Objects
```js
[
  {text: "message c", type : 0},
  {text : "message d", type : 2},
  {text : "message e", type : 1}
]
```
Type has three different values:
* `0` - None (no corner icon)
* `1` - Alert (yellow corner icon)
* `2` - Info (grey corner icon)

There can be up to 10 of these Objects
The text can be plain or styled HTML

###Bullet###
```js
var bar = foo.bullet('bullet_widget_key');
bar.send(items, orientation, function(err, response){
  //callback with response from geckoboard
});
```
Items is an Array of Objects
```js
[
  {
    label: "Revenue 2011 YTD",
    sublabel: "(U.S. $ in thousands)",
    axis: {
      point: [
        0,
        200,
        400,
        600,
        800,
        1000
      ]
    },
    range:[
      { color: "red",
        start: 0,
        end: 400
      },
      {
        color: "amber",
        start: 401,
        end: 700
      },
      { 
        color: "green",
        start: 701,
        end: 1000
      }
    ],
    measure: {
      current: {
        start: 0,
        end: 500
      },
      projected: {
        start: 100,
        end: 900
      }
    },
    comparative: {
      point: 600
    }
  }
]
```
Orientation is the orientation you'd like the bullet widgets, default is `horizontal`, but can be changed to `vertical`

###Rag Column###
```js
var bar = foo.ragColumn('rag_column_widget_key');
bar.send(items, type, function(err, response){
  //callback with response from geckoboard
})
```
Items is an array of Objects
```js
[
  {
    value: 120,
    text: "Red description"
  },
  {
    value: 75,
    text: "Amber description"
  },
  {
    value: 5,
    text: "Green description"
  }
]
```
The type parameter accepts one value `reverse`. If supplied then the order of the items will be reversed.

###Rag###
```js
var bar = foo.rag('rag_widget_key');
bar.send(items, type, function(err, response){
  //callback with response from geckoboard
})
```
Items is an array of Objects
```js
[
  {
    value: 120,
    text: "Red description"
  },
  {
    value: 75,
    text: "Amber description"
  },
  {
    value: 5,
    text: "Green description"
  }
]
```
The type parameter accepts one value `reverse`. If supplied then the order of the items will be reversed.


###Funnel###
```js
var bar = foo.funnel('funnel_widget_key');
foo.send(items, type, percentage, function(err, response){
  //callback with response from geckoboard
})
```
Items is an Array of Objects
```js
[
  { 
    value: "87809", 
    label: "Step1" 
  }, 
  { 
    value: "70022", 
    label: "Step2" 
  }, 
  { 
    value: "63232", 
    label: "Step 3" 
  }, 
  { 
    value: "53232", 
    label: "Step 4" 
  }, 
  { 
    value: "32123", 
    label: "Step 5" 
  }, 
  { 
    value: "23232", 
    label: "Step 6" 
  }, 
  { 
    value: "12232", 
    label: "Step 7" 
  }, 
  { 
    value: "2323", 
    label: "Step 8" 
  } 
]
```
Type allows you to reverse the colours - defaults to `standard`, set to `reverse` or `standard`
Percentage allows you to show or hide % - defaults to `show`, set to `show` or `hide`

###Pie###
```js
var bar = foo.pie('pie_widget_key');
bar.send(items, function(err, response){
  //callback with response from geckoboard
})
```
Items is an Array of Objects
```js
[ 
  { 
    value: "100", 
    label: "May", 
    colour: "FFFF10AA" 
  }, 
  { 
    value: "160", 
    label: "June", 
    colour: "FFAA0AAA" 
  }, 
  { 
    value: "300", 
    label: "July", 
    colour: "FF5505AA" 
  }, 
  { 
    value: "140", 
    label: "August", 
    colour: "FF0000AA" 
  } 
]
```
The last 2 digits in the hex colour attribute are entirely optional and represent the desired transparency.

###Gecko Meter###
```js
var bar = foo.geckoMeter('gecko_meter_widget_key');
bar.send(value, min, max, type, function(err, response){
  //callback with response from geckoboard
})
```
Value is the Value of the meter
Min is an Object
```js
{
  text : "Min value",
  value : "10"
}
```
Max is an Object
```js
{ 
  text: "Max value",
  value: "30"
}
```
Type allows you to reverse the colours - defaults to `standard`, set to `reverse` or `standard`

###Line###
```js
var bar = foo.line('line_widget_key');
bar.send(items, settings, function(err, response){
  //callback with response from geckoboard
})
```
Items is an Array of values
```js
[
    {
        "label": {
            "name": "Label1",
            "color": "#d4e1aa"
        },
        "title": {
            "text": "Important information 1",
            "highlight": true
        },
        "description": "A small description"
    },
    {
        "title": {
            "text": "Important information 2",
            "highlight": true
        }
    }
]
```
Settings is an Object which contains x and y axis detail and colour detail in hex format
```js
{
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
```

###List###
```js
var bar = foo.list('list_widget_key');
bar.send(items, function(err, response){
  //callback with response from geckoboard
})
```
Items is an Array of values as defined by the [Geckoboard API](https://developer.geckoboard.com/#list)
```js
[
  {
    "title": {
      "text": "Chrome"
    },
    "label": {
      "name": "New!",
      "color": "#ff2015"
    },
    "description": "40327 visits"
  },
  {
    "title": {
      "text": "Safari"
    },
    "description": "11577 visits"
  },
  {
    "title": {
      "text": "Firefox"
    },
    "description": "10296 visits"
  },
  {
    "title": {
      "text": "Internet Explorer"
    },
    "description": "3587 visits"
  },
  {
    "title": {
      "text": "Opera"
    },
    "description": "499 visits"
  }
]
```

###Highchart###
```js
var bar = foo.highchart('highchart_widget_key');
bar.send(highchart, function(err, response){
  //callback with response from geckoboard
})
```
highchart is a Highchart configuration object - see: http://www.geckoboard.com/developers/custom-widgets/widget-types/highcharts/
```js
{
  chart: {
    renderTo: 'container'
  },
  credits: {
    enabled: false
  },
  series: {
    your_stuff
  }
}
```


##Examples##

```js

var Geckoboard = require('geckoboard-push');

var gecko = new Geckoboard({api_key: 'geckoboard_api_key'});

var map = gecko.map('map_widget_key');
map.send([
  { 
    latitude: 1.00000,
    longitude: 1.0000,
    size: 10
  }
], function(err, response){
  console.log('map', response);
})

var number = gecko.number('number_widget_key');
number.send([ 
  { text : "Visitors",value : 300},
  { text : "",value : 280}
], true, 'reverse', function(err, response){
  console.log('number', response);
});

var text = gecko.text('text_widget_key');
text.send([
  {text: "message c", type : 0},
  {text : "message d", type : 2},
  {text : "message e", type : 1}
], function(err, response){
  console.log('text', response);
});

var bullet = gecko.bullet('bullet_widget_key');
bullet.send([{
  label: "Revenue 2011 YTD",
  sublabel: "(U.S. $ in thousands)",
  axis: {
    point: [
      0,
      200,
      400,
      600,
      800,
      1000
    ]
  },
  range:[
    { color: "red",
      start: 0,
      end: 400
    },
    {
      color: "amber",
      start: 401,
      end: 700
    },
    { 
      color: "green",
      start: 701,
      end: 1000
    }
  ],
  measure: {
    current: {
      start: 0,
      end: 500
    },
    projected: {
      start: 100,
      end: 900
    }
  },
  comparative: {
    point: 600
  }
}, {
  label: "Revenue 2012 YTD",
  sublabel: "(££££ in thousands)",
  axis: {
    point: [
      0,
      200,
      400,
      600,
      800,
      1000
    ]
  },
  range:[
    { color: "red",
      start: 0,
      end: 400
    },
    {
      color: "amber",
      start: 401,
      end: 700
    },
    { 
      color: "green",
      start: 701,
      end: 1000
    }
  ],
  measure: {
    current: {
      start: 0,
      end: 500
    },
    projected: {
      start: 100,
      end: 900
    }
  },
  comparative: {
    point: 600
  }
}],'vertical', function(err, response){
  console.log('bullet', response);
});

var ragColumn = gecko.ragColumn('rag_column_widget_key');
ragColumn.send([
  {
    value: 120,
    text: "Red description"
  },
  {
    value: 75,
    text: "Amber description"
  },
  {
    value: 5,
    text: "Green description"
  }
], 'reverse',function(err, response){
  console.log('rag column', response);
})

var rag = gecko.rag('rag_widget_key');
rag.send([
  {
    value: 132,
    text: "Red description"
  },
  {
    value: '80',
    text: "Amber description"
  },
  {
    value: 3,
    text: "Green description"
  }
], 'standard', function(err, response){
  console.log('RAG', response);
})

var funnel = gecko.funnel('funnel_widget_key');
funnel.send([
  { 
    value: "87809", 
    label: "Step1" 
  }, 
  { 
    value: "70022", 
    label: "Step2" 
  }, 
  { 
    value: "63232", 
    label: "Step 3" 
  }, 
  { 
    value: "53232", 
    label: "Step 4" 
  }, 
  { 
    value: "32123", 
    label: "Step 5" 
  }, 
  { 
    value: "23232", 
    label: "Step 6" 
  }, 
  { 
    value: "12232", 
    label: "Step 7" 
  }, 
  { 
    value: "2323", 
    label: "Step 8" 
  } 
], 'standard','show', function(err, response){
  console.log('Funnel', response);
})

var pie = gecko.pie('pie_widget_key');
pie.send([ 
  { 
    value: "100", 
    label: "May", 
    colour: "FFFF10AA" 
  }, 
  { 
    value: "160", 
    label: "June", 
    colour: "FFAA0AAA" 
  }, 
  { 
    value: "300", 
    label: "July", 
    colour: "FF5505AA" 
  }, 
  { 
    value: "140", 
    label: "August", 
    colour: "FF0000AA" 
  } 
], function(err, response){
  console.log('pie', response);
})

var geckometer = gecko.geckoMeter('gecko_meter_widget_key');
geckometer.send(
  23,
  {
    text : "Min value",
    value : "10"
  },
  { 
    text: "Max value",
    value: "30"
  },
  'reverse',
  function(err, response){
  console.log('geckometer', response)
})

var line = gecko.line('line_widget_key');
line.send([
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
{
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
}, function(err, response){
  console.log('Line', response);
})

var highchart = gecko.highchart('line_widget_key');
highchart.send({
  chart: { type: 'bar' },
  title: { text: 'Unique visits by Country' },
  subtitle: { text: 'Today' },
  xAxis: {
    categories: ['USA', 'Canada', 'France', 'Australia', 'Germany'],
    title: { text: null }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Visits',
      align: 'high'
    },
    labels: { overflow: 'justify' }
  },
  tooltip: { valueSuffix: null },
  plotOptions: {
    bar: {
      dataLabels: { enabled: true }
    }
  },
  credits: { enabled: false },
  series: [{
    name: 'Visits',
    data: [107, 31, 635, 203, 2]
  }]
}, function(err, response){
  console.log('Line', response);
})
```

###Leaderboard###
```js
var bar = foo.leaderboard('leaderboard_widget_key');
bar.send(items, format, unit, function(err, response){
  //callback with response from geckoboard
})
```
Items is an Array of values
```js
[
    {
        "label": "Something gaining",
        "value": 100,
        "previous_rank": 3,
    },
    {
        "label": "Something staying",
        "value": 90
    },
    {
        "label": "Something losing",
        "value": 80,
        "previous_rank": 1
    }
]
```

Format allows you to optionally change the number format.  Defaults to decimal.

Unit is a ISO 4217 currency code.  Required when format is currency.

##NPM Maintainers##

The npm module for this library is maintained by:

* [Dan Jenkins](http://github.com/danjenkins)

##License##

geckoboard-push is licensed under the MIT license.
