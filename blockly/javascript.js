Blockly.JavaScript['deeplearn_classifier'] = function (block) {
  var text_cameraurl = block.getFieldValue('cameraURL');
  var text_modelurl = block.getFieldValue('modelURL');
  var code = 'getDeeplearn("' + text_modelurl + '","' + text_cameraurl + '")';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['deeplearn_label'] = function (block) {
  var text_label = block.getFieldValue('label');
  var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('name'), Blockly.Variables.NAME_TYPE);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'name');
  var code = variable_name + '.onLabel(' + text_label + ',function(label){\n';
  code += statements_name + '\n';
  code += '});\n';
  return code;
};