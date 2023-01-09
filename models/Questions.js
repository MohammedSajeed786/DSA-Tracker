const mongoose = require("mongoose");

let question_schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  solved:{
      type:Array,
      default:[]
  },
  notes:{
    type:Array,
    default:[]
  }
});

const Questions=mongoose.model('questions',question_schema);
module.exports=Questions;
