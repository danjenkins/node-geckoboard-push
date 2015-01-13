var Base = require('./GeckoboardPushSend');

module.exports = GeckoboardPushLeaderboard;

function GeckoboardPushLeaderboard(params, widget_key){
  this.options = params;
  this.options.widget_key = widget_key;
  this.prototype = new Base(this.options);
}

GeckoboardPushLeaderboard.prototype.send = function(items, callback){
  /*
  https://developer.geckoboard.com/#leaderboard
  items = [ {'label': 'label', 'value': 123, 'previous_rank': 3 }, ... ]
  */

  var data = {
    items: items
  };
  this.prototype.send(data, callback);
}
