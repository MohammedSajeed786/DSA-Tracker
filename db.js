const mongoose = require("mongoose");

let uri =
  "mongodb+srv://Sharfuddin:Sajeed07@cluster0.wwaae.mongodb.net/DSA-eTracker?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(uri, () => {
    console.log("connected to mongo successfully");
  });
};
module.exports=connectToMongo;

//php==express
//sql==mongoose