import React, { useEffect, useContext, useState } from "react";
import QuestionContext from "../../context/Questions/QuestionContext";
import "./Profile.css";
import LoadingContext from "../../context/Loading/LoadingContext";
export default function Profile() {
  let loadingContext = useContext(LoadingContext);
  let { updateLoader } = loadingContext;
  let questionContext = useContext(QuestionContext);
  let { totalCount, fetchQuestions, getUser, userDetails } = questionContext;
  const [easy_frac, seteasy_frac] = useState(0);
  const [med_frac, setmed_frac] = useState(0);
  const [hard_frac, sethard_frac] = useState(0);
  const [coins, setcoins] = useState(0)
  // https://stackoverflow.com/a/59422750
  useEffect(() => {
    updateLoader(0);
    updateLoader(25);
    fetchQuestions();
    getUser();
    updateLoader(50);
    // console.log(userDetails,totalCount);
    let easy_frac1 = totalCount.solved_easy / totalCount.total_easy;
    // console.log(easy_frac1);
    easy_frac1 = easy_frac1 * 100;
    easy_frac1 = Math.round(easy_frac1);
    seteasy_frac(easy_frac1);
    let med_frac1 = totalCount.solved_medium / totalCount.total_medium;
    med_frac1 = med_frac1 * 100;
    med_frac1 = Math.round(med_frac1);
    updateLoader(75);
    setmed_frac(med_frac1);
    let hard_frac1 = totalCount.solved_hard / totalCount.total_hard;
    hard_frac1 = hard_frac1 * 100;
    hard_frac1 = Math.round(hard_frac1);
    sethard_frac(hard_frac1);
    updateLoader(100);
    let coins =
      totalCount.solved_easy * 5 +
      totalCount.solved_medium * 10 +
      totalCount.solved_hard * 20;
      setcoins(coins);
      
    // console.log(easy_frac1, med_frac1, hard_frac1);
  }, [totalCount.total_easy]);

  return (
    <div className="user-profile">
      <h3 className="prof-title">Your Details</h3>
      <div className="details">
        <div className="per-det">
          <span className="material-icons-outlined material-icons info">
            badge
          </span>
          <h3 className="per-det-title">Personal Details</h3>
        </div>

        <div>
          <div className="prof-name-title">
            Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
          </div>
          <div className="prof-name">{userDetails.name}</div>
        </div>
        <div>
          <div className="prof-email-title">
            Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
          </div>
          <div className="prof-email">{userDetails.email}</div>
        </div>
      </div>

      <div className="prof-problems">
        <div className="prob-det">
          <span className="material-icons-outlined material-icons info">
            assessment
          </span>
          <h3 className="prob-det-title">Problems Solved</h3>
          <h6 className="coins">{`🪙 Coins Earned :-\xa0\xa0${coins}`}</h6>
        </div>

        <div className="prof-easy">
          <div className="easy-count my-1">{`Easy \xa0\xa0\xa0\xa0\xa0 ${totalCount.solved_easy} / ${totalCount.total_easy}`}</div>
          <div className="progress pg-easy">
            <div
              className="progress-bar  pgb-easy"
              role="progressbar"
              style={{ width: `${easy_frac}%` }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        {/* <div className="progress container my-4">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            style={{"width": "50%"}}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div> */}

        <div className="prof-med my-3">
          <div className="medium-count my-1">{`Medium \xa0\xa0\xa0\xa0\xa0 ${totalCount.solved_medium} / ${totalCount.total_medium}`}</div>
          <div className="progress pg-med">
            <div
              className="progress-bar  pgb-med"
              role="progressbar"
              style={{ width: `${med_frac}%` }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div className="prof-hard my-3">
          <div className="hard-count my-1">{`Hard \xa0\xa0\xa0\xa0\xa0 ${totalCount.solved_hard} / ${totalCount.total_hard}`}</div>
          <div className="progress pg-hard ">
            <div
              className="progress-bar  pgb-hard"
              role="progressbar"
              style={{ width: `${hard_frac}%` }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        {/* <div className="prof-medium">{totalCount.solved_medium}</div>
        <div className="prof-hard">{totalCount.solved_hard}</div> */}
      </div>
    </div>
  );
}
