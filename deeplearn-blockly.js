+(function (window, webduino) {

  'use strict';

  window.getDeeplearn = function (modelURL,cameraURL) {
    return new webduino.module.deeplearn(modelURL,cameraURL);
  };

}(window, window.webduino));


