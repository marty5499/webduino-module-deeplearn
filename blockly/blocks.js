//https: //blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#ckpupe
Blockly.Blocks['deeplearn_classifier'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("影像串流來源 :")
      .appendField(new Blockly.FieldTextInput("ws://192.168.43.204:8889/rws/ws"), "cameraURL");
    this.appendDummyInput()
      .appendField("載入模型 URL:")
      .appendField(new Blockly.FieldTextInput("http://codegen:3000/download/model-1530722287793/model.json"), "modelURL");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['deeplearn_label'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("deeplearn"), "name")
      .appendField("當標籤為")
      .appendField(new Blockly.FieldTextInput("0"), "label")
      .appendField("時");
    this.appendStatementInput("name")
      .setCheck(null)
      .appendField("執行");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};