Blockly.JavaScript['deeplearn_classifier'] = function (block) {
  var text_modelurl = block.getFieldValue('modelURL');
  var text_cameraurl = block.getFieldValue('cameraURL');
  var code = 'getDeeplearn("' + text_modelurl + '","' + text_cameraurl + '");\n';
  return code;
};