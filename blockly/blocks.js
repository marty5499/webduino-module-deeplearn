// https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#yg6abn
Blockly.Blocks['deeplearn_classifier'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("載入模型 URL:")
        .appendField(new Blockly.FieldTextInput("http://codegen:3000/download/model-1530722287793/model.json"), "modelURL")
        .appendField("，影像來源：")
        .appendField(new Blockly.FieldTextInput("0"), "cameraURL");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};