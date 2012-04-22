var Map = require('./GeckoboardPushMap');
var Number = require('./GeckoboardPushNumber');
var Rag = require('./GeckoboardPushRag');
var Text = require('./GeckoboardPushText');
var Highchart = require('./GeckoboardPushHighchart');
var Pie = require('./GeckoboardPushPie');
var Line = require('./GeckoboardPushLine');
var GeckoMeter = require('./GeckoboardPushGeckoMeter');
var Funnel = require('./GeckoboardPushFunnel');
var Bullet = require('./GeckoboardPushBullet');


module.exports = GeckoboardPush;

function GeckoboardPush(params){
  var params = params || {};
  this.options = {};

  this.options.api_key = params.api_key;
  this.options.hostname = params.host || 'push.geckoboard.com';
  this.options.port = params.port || '443';
  this.options.method = params.method || 'POST';
  if(params.path){
    this.options.path = params.path;
  }
}

GeckoboardPush.prototype.map = function(widget_key){
  return new Map(this.options,widget_key);
}
GeckoboardPush.prototype.number = function(widget_key){
  return new Number(this.options,widget_key);
}
GeckoboardPush.prototype.ragColumn = function(widget_key){
  return new Rag(this.options,widget_key);
}
GeckoboardPush.prototype.rag = function(widget_key){
  return new Rag(this.options,widget_key);
}
GeckoboardPush.prototype.text = function(widget_key){
  return new Text(this.options,widget_key);
}
GeckoboardPush.prototype.highchart = function(widget_key){
  return new Highchart(this.options,widget_key);
}
GeckoboardPush.prototype.pie = function(widget_key){
  return new Pie(this.options,widget_key);
}
GeckoboardPush.prototype.line = function(widget_key){
  return new Line(this.options,widget_key);
}
GeckoboardPush.prototype.geckoMeter = function(widget_key){
  return new GeckoMeter(this.options,widget_key);
}
GeckoboardPush.prototype.funnel = function(widget_key){
  return new Funnel(this.options,widget_key);
}
GeckoboardPush.prototype.bullet = function(widget_key){
  return new Bullet(this.options,widget_key);
}