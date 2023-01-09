import React from "react";
import "./About.css";
export default function About() {
  return (
    <div className="container-fluid about my-3">
      <h2 className="heading my-3 container-fluid">What is DSA-eTracker?</h2>
      <div className="container-fluid my-3">
        <div className="row my-3 mx-3">
          <div className="col about-card  mx-3">
            <span
              className="material-icons-outlined material-icons"
              style={{
                fontSize: "40px",
                color: " #5f3eac",
                paddingBottom: "0.5em",
              }}
            >
              checklist
            </span>
            <h3 className="about-heading">180 hand picked questions</h3>
            <p className="about-data">
              Coding interview prep is a numbers game that many candidates lose.
              We've hand-picked 180 of the best coding interview questions to
              truly prepare you.
            </p>
          </div>
          <div className="col about-card mx-3">
            <span
              className="material-icons-outlined material-icons"
              style={{
                fontSize: "40px",
                color: " #5f3eac",
                paddingBottom: "0.5em",
              }}
            >
              category
            </span>
            <h3 className="about-heading">
              Seperation according to Categories
            </h3>
            <p className="about-data">
              Solve problems of your favourite categories like Arrays, Strings,
              Graphs,etc. We have arranged the categories in the order of
              diffculty.
            </p>
          </div>
          <div className="col about-card  mx-3">
            <span
              className="material-icons-outlined material-icons"
              style={{
                fontSize: "40px",
                color: " #5f3eac",
                paddingBottom: "0.5em",
              }}
            >
              sort
            </span>
            <h3 className="about-heading">Sorted based on difficulty level</h3>
            <p className="about-data">
              Problems are sorted based on difficulty as Easy, Medium and Hard.
              Solve problems from easy to hard to ace the category.
            </p>
          </div>
        </div>
        <div className="row my-3 mx-3">
          <div className="col about-card mx-3">
            <span
              className="material-icons-outlined material-icons"
              style={{
                fontSize: "40px",
                color: " #5f3eac",
                paddingBottom: "0.5em",
              }}
            >
              link
            </span>
            <h3 className="about-heading">
              Problem links of top coding platforms
            </h3>
            <p className="about-data">
              For each problem we provide links of top coding platforms like
              Leetcode and GeeksForGeeks. Solve the problem in your favourite
              platform and increase your rating.
            </p>
          </div>
          <div className="col about-card mx-3">
            <span
              className="material-icons-outlined material-icons"
              style={{
                fontSize: "40px",
                color: " #5f3eac",
                paddingBottom: "0.5em",
              }}
            >
              ondemand_video
            </span>
            <h3 className="about-heading">Solutions from best resources</h3>
            <p className="about-data">
              We provide Solution links to problems from best resources available on internet. 
            </p>
          </div>
          <div className="col about-card mx-3">
          <span
              className="material-icons-outlined material-icons"
              style={{
                fontSize: "40px",
                color: " #5f3eac",
                paddingBottom: "0.5em",
              }}
            >
              event_note
            </span>
            <h3 className="about-heading">Take Notes for a problem</h3>
            <p className="about-data">
             Take notes for each problem. Write approach you followed to solve them, which makes easy for you to revise during coding interviews.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
