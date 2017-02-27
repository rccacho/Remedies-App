var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var IllnessSchema = new Schema({
  illness: String,
  symptoms: [ String ],
  remedies: [ String ]
});

var Illness = mongoose.model('Illness', IllnessSchema);

module.exports = Illness;