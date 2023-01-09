import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import CategoryQuestions from "./components/questions/CategoryQuestions";
import QuestionState from "./context/Questions/QuestionState";

import Profile from "./components/profile/Profile";
import { ToastContainer, toast } from "react-toastify";
import Loading from "./components/Loading";
import LoadingState from "./context/Loading/LoadingState";
import Editor from "./components/editor/Editor";
export default function App() {
  return (
    <>
      <ToastContainer />
      <LoadingState>
        <QuestionState>
          <BrowserRouter>
            <Navbar></Navbar>
            <Loading></Loading>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/categoryQuestions"
                element={<CategoryQuestions />}
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/editor" element={<Editor />} />

              
              
            </Routes>
            {/* </ToastContainer> */}
          </BrowserRouter>
        </QuestionState>
      </LoadingState>
    </>
  );
}
