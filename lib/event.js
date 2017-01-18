define(function () {
  var event = {};

  event.on = function (type, callback) {
    chrome.runtime.onMessage.addListener(function (message) {
      if(message.event === type) {
        callback(message.options);
      }
    });
  }

  event.trigger = function (type, options) {
    chrome.runtime.sendMessage({
      event: type,
      options: options
    });
  }

  return event;
});
