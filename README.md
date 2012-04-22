#geckoboard-push

##Install

```
npm install geckoboard-push
```

##Usage

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
], function(response){
  console.log('map', response);
})

var number = gecko.number('number_widget_key');
number.send([ 
  { text : "Visitors",value : 300},
  { text : "",value : 280}
], function(response){
  console.log('number', response);
});

var text = gecko.text('text_widget_key');
text.send([
  {text: "message c", type : 0},
  {text : "message d", type : 2},
  {text : "message e", type : 1}
], function(response){
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
}],'vertical', function(response){
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
], 'reverse',function(response){
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
], 'standard', function(response){
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
], 'standard','show', function(response){
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
], function(response){
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
  function(response){
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
}, function(response){
  console.log('Line', response);
})
```

## NPM Maintainers

The npm module for this library is maintained by:

* [Dan Jenkins](http://github.com/danjenkins)

## License

geckoboard-push is licensed under the MIT license.
