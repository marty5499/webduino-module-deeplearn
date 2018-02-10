// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#xke6ye
Blockly.Blocks['deeplearn_new'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.WEBDUINO_DEEPLEARN, "載入 deeplean");
        this.setOutput(true);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('https://webduino.io');
    }
};
