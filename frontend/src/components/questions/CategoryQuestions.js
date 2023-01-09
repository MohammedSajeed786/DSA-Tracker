import React, { useContext, useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { all_questions } from "../../helper/helper";

import QuestionItem from "./QuestionItem";
import QuestionContext from "../../context/Questions/QuestionContext";

import "./CategoryQuestions.css";
import LoadingContext from "../../context/Loading/LoadingContext"
export default function CategoryQuestions() {
  const location = useLocation();
  const { category } = location.state;
  let questionContext = useContext(QuestionContext);
  let { fetchQuestions, updateSolved, solved, notes, countQuestions } =
    questionContext;
  let category_count = countQuestions[category];
  const [scroll, setscroll] = useState(false);
  const [count, setcount] = useState(null);

  const [checked, setchecked] = useState({
    easy: true,
    medium: true,
    hard: true,
    unsolved: false,
  });
  let  loadingContext = useContext(LoadingContext);
  let {updateLoader}=loadingContext;
  useEffect(() => {
    //  console.log("category-question")

    // fetchQuestions();
     
    
    if (scroll === false) {
      window.scrollTo(0, 0);
      setscroll(true);
    }
     
    if (countQuestions !== null) {
      // window.scrollTo(0,0);
      category_count = countQuestions[category];
      if (category_count) {
        //console.log(category_count.total)
        let easy = category_count.easy;
        let medium = category_count.medium;
        let hard = category_count.hard;
        // if(count.easy!=easy && count.medium!=medium && count.hard!=hard){
        setcount({
          easy: easy,
          medium: medium,
          hard: hard,
        });
        
        // }
        //  console.log(count);
        // prevCountRef.current = count;
      }
    }
    document.title="DSA-Tracker-"+category;
     
  }, [countQuestions]);

  const checkboxChecked = () => {
    let x = document.querySelector(".easy-check");
    let y = document.querySelector(".med-check");
    let z = document.querySelector(".hard-check");
    let r = document.querySelector(".unsolved-check");
    // console.log(x.checked,y.checked,z.checked);
    setchecked({
      easy: x.checked,
      medium: y.checked,
      hard: z.checked,
      unsolved: r.checked,
    });
  };
  let questions = all_questions[category];
  return (
    <div className="category-questions">
      
      <div className="cat-head">
        {" "}
        <h1>{category}</h1>
      </div>
      {count !== null ? (
        <div className="show-count">
          <h3 className="count-title">Solved</h3>
          <h3 className="count-easy">{`EASY - ${count.easy}`}</h3>
          <h3 className="count-medium">{`MEDIUM - ${count.medium}`}</h3>
          <h3 className="count-hard">{`HARD - ${count.hard}`}</h3>
        </div>
      ) : (
        <></>
      )}
      <div className="check">
        <div className="form-check-inline">
          <input
            className="form-check-input unsolved-check"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={checkboxChecked}
            checked={checked.unsolved}
          />
          <label className="form-check-label" for="flexCheckDefault">
            &nbsp; Unsolved
          </label>
        </div>
        <div className="form-check-inline">
          <input
            className="form-check-input easy-check"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={checkboxChecked}
            checked={checked.easy}
          />
          <label className="form-check-label" for="flexCheckDefault">
            &nbsp; Easy
          </label>
        </div>
        <div className="form-check-inline">
          <input
            className="form-check-input med-check"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={checkboxChecked}
            checked={checked.medium}
          />
          <label className="form-check-label" for="flexCheckDefault">
            &nbsp; Medium
          </label>
        </div>
        <div className="form-check-inline">
          <input
            className="form-check-input hard-check"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={checkboxChecked}
            checked={checked.hard}
          />
          <label className="form-check-label" for="flexCheckDefault">
            &nbsp;Hard
          </label>
        </div>
      </div>
      <div className="cat-probs">
        {questions.map((question) => {
          // console.log(question);
          return (!checked.unsolved ||
            (checked.unsolved && !solved[question.q_no])) &&
            checked[question.difficulty] === true ? (
            <QuestionItem
              question={question}
              key={question.q_no}
            ></QuestionItem>
          ) : (
            <></>
          );
        })}
      </div>
    </div>
  );
}
// unsolved==true solved[q_no]==false
// unsolved ==false
