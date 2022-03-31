const express = require ("express"); //import express
const Person = require("./model/Person");
const mongoose = require ("mongoose"); //import mongoose
require("dotenv").config();

//initialiser APP
const app = express();


// Port 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));
 
//console.log("hello safffffffff");
 const connexion= process.env.MONGO_URI;

 mongoose.connect(connexion,{ useNewUrlParser: true, useUnifiedTopology: true });


 //connecting to data base 

var db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connection:"));

db.once("open", ()=> {
  console.log("Successfully Connection !");
});



//Create and Save a Record of a Model: //

// var person = new Person({name : "Safa", age: 20, favoritefoods:["Lasagne", "Tagliatelle"]})


// person.save((err, data) => {
//  if (err) {
//   return    console.log("Error User name is already used");
 
//   } else
//  console.log("User Saved successfly")

//      });





//creating Many records with model.create() : //

//  var ArrayOfPeople =  

//       [{
//   name: "Najet",
//   age: 20,
// favoriteFoods: ["Pizza", "Pâtes"],

//   },

//   {
//      name: "Seddik",
//     age: 25,
//    favoriteFoods : ["Soupe", "Couscous"]
//  },

// {
//       name: "Mariem",
//       age: 15,
//       favoriteFoods : ["burritos"],
//    },

// {
//       name: "Mary",
//       age: 18,
//       favoriteFoods : ["Sushi", "Poisson"]
//    },

//     ];




//   Person.create(ArrayOfPeople, (err) => {
//     if(err) 
//    return console.log(err); 
//    console.log("done: People created");
//    });
   
 




//Use model.find() to Search Your Database : //


      // Person.find({name:"Safa"} , (err,data)=>{
      //   if(err) throw err 
      //  console.log(data)
      //    });





 //Use model.findOne() to Return a Single Matching Document from Your Database : //


// Person.findOne ({favoritefoods : "Lasagne"},  (err,data)=>{
//     if(err) throw err 
//    console.log(data)
//      });






//Use model.findById() to Search Your Database By _id : //

// Person.findById({_id : "6244fe1a04d6e7845f3576d3"}, (err,data)=>{
//       if(err) throw err 
//       console.log(data)
//      }); 




//Perform Classic Updates by Running Find, Edit, then Save : //

// Person.findById("6244fe558e50acd8fbc5b021", (err, p) => {
//   if (err) {
//       return console.log(err)}
//   else {
//       // add "hamburger"
//      p.favoritefoods.push("hamburger");
//      p.save();
//       console.log(p);

//   }
// });





//Perform New Updates on a Document Using model.findOneAndUpdate() : //

// Person.findOneAndUpdate ({name : "Safa"}, {age : 20}, {new: true}, (err,data)=>{
//         if(err) throw err 
//        console.log(data)
//       }); 





//Delete One Document Using model.findByIdAndRemove : //


// Person.findByIdAndRemove({_id :"6244f46d6d61da2cb91dba03"}, (err,data)=>{
//          if(err) throw err 
//         console.log(data)
//        }); 





//MongoDB and Mongoose - Delete Many Documents with model.remove() : //

// Person.remove({name: "Mary"}, (err,done)=>{
//            if(err) throw err 
//           console.log(done)
//         }); 





//Chain Search Query Helpers to Narrow Search Results :  //


// Person.find({favoriteFoods :{$all:["burritos"]}}).sort({name : "asc"}).limit(4).select("name age").exec((err,done) => {
//        if(err) throw err 
//          console.log(done)
//        })


