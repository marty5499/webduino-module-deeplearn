+(function(window, webduino) {
    'use strict';
    window.getDeeplearn = function(eleId) {
        return new webduino.module.deeplearn(eleId);
    };
}(window, window.webduino));