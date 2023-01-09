import React from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import About from "./about/About";
import Categories from "./category/Categories";
import { useContext } from "react";
import QuestionContext from "../context/Questions/QuestionContext";
import Problem from "./problem/Problem";
import LoadingContext from "../context/Loading/LoadingContext";

export default function Home() {
  let  loadingContext = useContext(LoadingContext);
  let {updateLoader}=loadingContext;
  let navigate = useNavigate();
  let questionContext = useContext(QuestionContext);
  let { fetchQuestions } = questionContext;
  useEffect(() => {
    if (localStorage.getItem("auth-token") === null) {
      navigate("/signin");
    }
    fetchQuestions();
    updateLoader(100);
  }, []);

  return (
    <div>
      <About></About>
      <Categories></Categories>
      <Problem></Problem>
       
    </div>
  );
}


// mysql               mongodb
// relatiional         nosql

// table               collection 
// rows/tuples/records documents

// email name rollno

// email name

// frontend:- ui html css react
// backend:_node js express js

// nodejs expressjs

// php
// python django
