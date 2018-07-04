+(function (factory) {
  if (typeof exports === 'undefined') {
    factory(webduino || {});
  } else {
    module.exports = factory;
  }
}(function (scope) {
  'use strict';
  var self;
  var proto;
  var Module = scope.Module;

  function loadJS(filePath) {
    var req = new XMLHttpRequest();
    req.open("GET", filePath, false); // 'false': synchronous.
    req.send(null);

    var headElement = document.getElementsByTagName("head")[0];
    var newScriptElement = document.createElement("script");
    newScriptElement.type = "text/javascript";
    newScriptElement.text = req.responseText;
    headElement.appendChild(newScriptElement);
  }


  function deeplearn(modelURL, cameraURL) {
    Module.call(this);
    loadJS('https://aframe.io/releases/0.7.0/aframe.min.js');
    console.log("create deeplearn...");
  }

  deeplearn.prototype = proto =
    Object.create(Module.prototype, {
      constructor: {
        value: deeplearn
      }
    });

  proto.dosomething = function (txt) {

  }

  scope.module.deeplearn = deeplearn;
}));