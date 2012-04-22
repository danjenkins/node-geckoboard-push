var Base = require('./GeckoboardPushSend');

module.exports = GeckoboardPushHighchart;

function GeckoboardPushHighchart(params,widget_key){
  this.options = params;
  this.options.widget_key = widget_key;
  this.prototype = new Base(this.options);
}

GeckoboardPushHighchart.prototype.send = function(chart, colors, credits, title, tooltip, legend, plotOptions, series, callback){
  
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

  this.prototype.send(data, callback);
}