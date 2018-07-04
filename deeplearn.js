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
    loadJS('https://marty5499.github.io/webduino-module-deeplearn/videoClassifier.js');
    console.log("create deeplearn...");
    this.canvas = createCanvas();
    this.status = createStatus();
    startDetect();
  }

  function createStatus() {
    var elem = document.createElement('div');
    elem.id = 'status';
    document.body.appendChild(elem);
    return elem;
  }

  function createCanvas() {
    var elem = document.createElement('canvas');
    elem.id = 'c1';
    elem.width = '224px';
    elem.height = '224px';
    document.body.appendChild(elem);
    return elem;
  }

  function startDetect() {
    var url = 'http://codegen:3000/download/model-1530722287793/model.json';
    var imageDL = new ImageDL();

    window.predict = function () {}

    imageDL.load(url, function () {
      console.log("start...");
      window.predict = async function (img, callback) {
        imageDL.predict(img, callback);
      }
    });
    var self = this;
    new Camera(0).onCanvas('c1', function (canvas) {
      //new Camera('ws://192.168.0.199:8889/rws/ws').onCanvas('c1', function (canvas) {
      //new Camera('ws://192.168.43.204:8889/rws/ws').onCanvas('c1', function (canvas) {
      var img = new Image();
      img.src = canvas.toDataURL();
      img.onload = function () {
        predict(img, function (idx, c) {
          self.status.innerHTML = "辨識標籤為..." + idx + ",信心水準：" + parseInt(c * 1000000) / 10000.0 + " %";
        });
      };
    });
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