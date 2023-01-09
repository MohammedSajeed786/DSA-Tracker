const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Questions = require("../models/Questions");
const User=require("../models/User")


//endpoint to fetch user details
router.get("/userDetails",fetchuser,async(req,res)=>{
  try{
    let user_id = req.user.id;
    let user =await User.findById(user_id);
    return res.json({
      success: true,
      user:user,
    });
  }
  catch(e){
    return res.status(500).json({
      success: false,
      error: "internal server occured",
    });
  }
})


//endpoint to fetch questions
router.get("/fetchQuestions", fetchuser, async (req, res) => {
  try {
    let user_id = req.user.id;
    let questions = await Questions.findOne({
      user: user_id,
    });
    return res.json({
      success: true,
      questions: questions,
    });
  } catch (e) {
   return res.status(500).json({
      success: false,
      error: "internal server occured",
    });
  }
});

//end point to update solved questions
router.put("/updateSolved/:question_no", fetchuser, async (req, res) => {
  try {
    let user_id = req.user.id;

    //fetch questions
    let questions = await Questions.findOne({
      user: user_id,
    });

    // change solved value of question_no question
    let solved = questions.solved;
    if (solved[req.params.question_no] == false)
      solved[req.params.question_no] = true;
    else solved[req.params.question_no] = false;

    //new data is given a value
    let new_data = {};
    new_data.solved = solved;
    let new_questions = await Questions.findByIdAndUpdate(
      questions._id,
      { $set: new_data },
      { new: true }
    );
   return  res.json({
      success: true,
      questions: new_questions,
    });
  } catch (e) {
   return  res.status(500).json({
      success: false,
      error: "internal server occured",
    });
  }
});


//end point to update notes
router.put("/updateNotes/:question_no", fetchuser, async (req, res) => {
  try {
    let user_id = req.user.id;

    //fetch questions
    let questions = await Questions.findOne({
      user: user_id,
    });

    // change notes of question_no 
    let notes = questions.notes;
  
      notes[req.params.question_no] = req.body.notes;
  

    //new data is given a value
    let new_data = {};
    new_data.notes = notes;
    let new_questions = await Questions.findByIdAndUpdate(
      questions._id,
      { $set: new_data },
      { new: true }
    );
   return  res.json({
      success: true,
      questions: new_questions,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      error: "internal server occured",
    });
  }
});


module.exports = router;
