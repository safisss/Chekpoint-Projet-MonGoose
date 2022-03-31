const mongoose = require('mongoose');   // importer mongoose


//Create a person with this prototype: //
// //Create Schema : Person / const variable

 const Person = new mongoose.Schema({
  name: {
    type: String,
     required: true, //pour dire obligatoire
   },

   age: {
    type: Number,
   // unique: true,
  // required: true,
  },

  favoritefoods: {
       type: [String]
  },
 });



 module.exports = mongoose.model('person', Person); // person = nom du table que je vais créer dans ma base de donnée: collection.
// // Person = nom du variable ou on a ajouté les informations (les règles qui vont etre structurés ou des instructions à suivre pour ajouter les données dans notre table).