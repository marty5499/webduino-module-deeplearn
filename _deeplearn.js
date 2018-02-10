
+(function(factory) {
    if (typeof exports === 'undefined') {
        factory(webduino || {});
    } else {
        module.exports = factory;
    }
}(function(scope) {
    'use strict';
    var self;
    var proto;
    var Module = scope.Module;

    function deeplearn(eleId) {
        self = this;
        Module.call(this);
        document.getElementById(eleId).innerHTML = '';
    }

    deeplearn.prototype = proto = Object.create(Module.prototype, {
        constructor: {
            value: deeplearn
        }
    });

    scope.module.deeplearn = deeplearn;
}));
