import QuestionContext from "./QuestionContext";
import React from "react";
import { useState } from "react";
import { all_questions, categories } from "../../helper/helper";
export default function QuestionState(props) {
  let count_solved = new Map();
  const [solved, setsolved] = useState([]);
  const [notes, setnotes] = useState([]);
  const [countQuestions, setcountQuestions] = useState(new Map());
  const [userDetails, setuserDetails] = useState({
    name: "",
    email: "",
  });
  const [totalCount, settotalCount] = useState({
    total_problems: 0,
    solved_problems: 0,
    total_easy: 0,
    solved_easy: 0,
    total_medium: 0,
    solved_medium: 0,
    total_hard: 0,
    solved_hard: 0,
  });
  let helpSolved = [];
  let s = 0,
    e = 0,
    m = 0,
    h = 0,
    t = 0,
    total=0,
    solve=0,
    tot_easy=0,
    tot_medium=0,
    tot_hard=0,
    sol_easy=0,
    sol_medium=0,
    sol_hard=0;

// counting easy medium hard questions
  const updateCountSolved = () => {
    // console.log(solved);
    total=0;
    solve=0;
    tot_easy=0;
    tot_medium=0;
    tot_hard=0;
    sol_easy=0;
    sol_medium=0;
    sol_hard=0;
    categories.forEach(countSolved);
  };
  function countSolved(val, ind) {
    let questions = all_questions[val];
    s = 0;
    e = 0;
    m = 0;
    h = 0;
    t = 0;
    questions.forEach(countCategorySolved);
    let count = {
      total: t,
      solved: s,
      easy: e,
      medium: m,
      hard: h,
    };
    count_solved[val] = count;
    // console.log(totalCount)
  }
  function countCategorySolved(val, ind) {
    //  console.log(val["q_no"],helpSolved[val["q_no"]]);
    if (helpSolved[val["q_no"]]) {
      // console.log("hello");
      s++;
      solve++;
      // settotalCount({
      //   ...totalCount,
      //   solved_problems: totalCount.solved_problems + 1,
      // });
      if (val.difficulty == "easy") {
        e++;
        tot_easy++;
        sol_easy++;
        // settotalCount({
        //   ...totalCount,
        //   total_easy: totalCount.total_easy + 1,
        //   solved_easy: totalCount.solved_easy + 1,
        // });
      } else if (val.difficulty == "medium") {
        m++;
        tot_medium++;
        sol_medium++;
        // settotalCount({
        //   ...totalCount,
        //   total_medium: totalCount.total_medium + 1,
        //   solved_medium: totalCount.solved_medium + 1,
        // });
      } else {
        h++;
        tot_hard++;
        sol_hard++;
        // settotalCount({
        //   ...totalCount,
        //   total_hard: totalCount.total_hard + 1,
        //   solved_hard:totalCount.solved_hard + 1,
        // });
      }
    } else {
      if (val.difficulty == "easy") {
        // settotalCount({
        //   ...totalCount,
        //   total_easy: totalCount.total_easy + 1,
        // });
        tot_easy++;
      } else if (val.difficulty == "medium") {
        // settotalCount({
        //   ...totalCount,
        //   total_medium: totalCount.total_medium + 1,
        // });
        tot_medium++;
      } else {
        // settotalCount({
        //   ...totalCount,
        //   total_hard: totalCount.total_hard + 1,
        // });
        tot_hard++;
      }
    }
    t++;
    total++;
    // settotalCount({
    //   ...totalCount,
    //   total_problems: totalCount.total_problems + 1,
    // });
  }




  // to get user details
 const getUser=async()=>{
  let response = await fetch(
    "questions/userDetails/",
    {
      method: "GET",
      headers: {
        "Content-type": "application-json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    }
  );
  let data = await response.json();
  setuserDetails({
    name:data.user.name,
    email:data.user.email
  })
  // console.log(data.user)
  
  // return data;
 }

  // fetching questions from DB
  const fetchQuestions = async () => {
    // console.log("fetchquestion")
    // console.log(localStorage.getItem('auth-token'));
    let response = await fetch(
      "questions/fetchQuestions/",
      {
        method: "GET",
        headers: {
          "Content-type": "application-json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      }
    );
    let data = await response.json();

    setsolved(data.questions.solved);
    setnotes(data.questions.notes);
    helpSolved = data.questions.solved;
    updateCountSolved();
    //console.log(count_solved);

    setcountQuestions(count_solved);
    settotalCount({
      total_problems:total,
      solved_problems:solve,
      total_easy:tot_easy,
      solved_easy:sol_easy,
      total_medium:tot_medium,
      solved_medium:sol_medium,
      total_hard:tot_hard,
      solved_hard:sol_hard
      
    })
    // console.log(totalCount);
  };
  // update question status as solved in DB
  const updateSolved = async (q_no) => {
    let response = await fetch(
      `questions/updateSolved/${q_no}`,
      {
        method: "PUT",
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      }
    );
    let data = await response.json();
    fetchQuestions();
    // setsolved(data.questions.solved);
    // setnotes(data.questions.notes);
    // helpSolved=data.questions.solved;
    // updateCountSolved();
    //console.log(count_solved);
    // setcountQuestions(count_solved);
    //console.log(solved);
  };

    // update notes in DB
  const updateNotes = async (q_no, updatedNotes) => {
    // console.log(q_no,updatedNotes);

    let response = await fetch(
      `questions/updateNotes/${q_no}`,
      {
        method: "PUT",
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          notes: updatedNotes,
        }),
      }
    );
    let data = await response.json();
    fetchQuestions();
  };
  return (
    <QuestionContext.Provider
      value={{
        fetchQuestions,
        updateSolved,
        updateNotes,
        getUser,
        solved,
        notes,
        countQuestions,
        totalCount,
        userDetails
      }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
}
