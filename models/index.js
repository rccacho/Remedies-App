var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Remedies-App");

var Illness = require('./illness');

module.exports.Illness = Illness;