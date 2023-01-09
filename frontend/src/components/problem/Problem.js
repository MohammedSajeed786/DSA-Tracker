import React, { useEffect, useState } from "react";
import "./Problem.css";
export default function Problem() {
  const [lclink, setlclink] = useState({
    val: "",
  });
  let gfg_link = "https://practice.geeksforgeeks.org/problem-of-the-day";
  useEffect(() => {
    async function fetchData() {
      const LEETCODE_API_ENDPOINT = "https://leetcode.com/graphql";
      let gqlBody = {
        query: ` query questionOfToday {
               activeDailyCodingChallengeQuestion {
                           link
            }
           }`,
        variables: "{}",
      };
      const response = await fetch(LEETCODE_API_ENDPOINT, {
        method: "POST",

        headers: {
          Accept: "*/*",
          "Content-type": "application/json",
        },

        body: JSON.stringify(gqlBody),
      });
      const json_data = await response.json();
      let leetcode_link =
        "https://leetcode.com" +
        json_data.data.activeDailyCodingChallengeQuestion.link;
      //  console.log(leetcode_link);
      setlclink({ val: leetcode_link });
      //  console.log(lclink.val);
    }
    fetchData();
  }, []);
  return (
    <div className="prob-div">
      <div className="Problems">
        <h3 className="problems-title">Problems of the Day</h3>
        <div className="leetcode">
          <div className="daily_title">Solve daily Leetcode problem</div>
          <div className="lc-logo">
            <img
              src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg"
              alt="#"
              height={"30px"}
              width={"100px"}
            />
          </div>
          <div className="daily_link">
            <a href={lclink.val} target="_blank" className="anc">
              <button className="prob-button">Solve</button>
            </a>
          </div>
        </div>

        <div className="gfg">
          <div className="daily_title">Solve daily GeeksForGeeks problem </div>
          <div className="gfg-logo">
            <img
              src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png"
              alt="#"
              height={"30px"}
              width={"100px"}
            />
          </div>
          <div className="daily_link">
            <a href={gfg_link} target="_blank" className="anc">
              <button className="prob-button">Solve</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
