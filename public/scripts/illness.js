function Illness(name) {
  this.illness = name;
  this.symptoms = [];
  this.remedies = [];
}


var cold = new Illness("cold");
  cold.symptoms = ["coughing", "sneezing"];
  cold.remedies = ["honey", "garlic"]

var soreThroat = new Illness("sore throat");
  soreThroat.symptoms = ["coughing", "painful swallowing"];
  soreThroat.remedies = ["honey", "garlic"]

var eczema = new Illness("eczema");
  eczema.symptoms = ["itchiness", "rash"];
  eczema.remedies = ["aloe", "oatmeal"]

var diarrhea = new Illness("diarrhea");
  diarrhea.symptoms = ["watery stool", "stomach pain"];
  diarrhea.remedies = ["bananas", "apple juice", "mint"]

var illness = [cold, soreThroat, eczema, diarrhea];

console.log("loaded illnesses:", illness)
