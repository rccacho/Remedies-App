var db = require("./models");

var illnessList =[];
illnessList.push({
              illness: 'cold',
              symptoms: ["coughing", "sneezing"],
              remedies: ['honey', 'garlic']
            });
illnessList.push({
              illness: 'sore throat',
              symptoms: ["coughing", "painful swallowing"],
              remedies: ['honey', 'garlic', 'salt water gargle']
            });
illnessList.push({
              illness: 'eczema',
              symptoms: ["itchiness", "rash"],
              remedies: ['aloe', 'oatmeal']
            });
illnessList.push({
              illness: 'diarrhea',
              symptoms: ["watery stool", "stomach pain"],
              remedies: ['bananas', 'apple juice', 'mint']
            });


db.Illness.remove({}, function(err, illnesses){

  db.Illness.create(illnessList, function(err, illnesses){
    if (err) { return console.log('ERROR', err); }
    console.log("all illnesses:", illnesses);
    console.log("created", illnesses.length, "illnesses");
    process.exit();
  });

});

