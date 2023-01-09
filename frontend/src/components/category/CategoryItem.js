import React, { useContext,useEffect,useState } from "react";
import CategoryQuestions from "../questions/CategoryQuestions";
import "./CategoryItem.css";
import { Link } from "react-router-dom";
 
import QuestionContext from "../../context/Questions/QuestionContext";
import { categories } from "../../helper/helper";
export default function CategoryItem(props) {
  let questionContext = useContext(QuestionContext);
  let { solved,countQuestions,updateSolved } = questionContext;
  let category = props.category;
  let category_count = countQuestions[category];
  const [count, setcount] = useState({
    total:1,
    solve:1,
    percent:100,
  })
  useEffect(() => {
   
    // console.log("category-item")
  if(countQuestions!==null){
    category_count=countQuestions[category];
    if(category_count){
    //console.log(category_count.total)
    let total=category_count.total;
    let solve=category_count.solved;
    let percent= Math.round((solve / total)* 100);
    setcount({
      total:total,
      solve:solve,
      percent:percent
    })
    // console.log(count);
    }
  }
  
  }, [countQuestions])
  
  return (
    <>
      <div className="col-md-4 column">
        <Link
          className="category-card"
          to="/categoryQuestions"
          state={{ category: category }}
        >
          <div className="card-title ">{category}</div>
          <div className="progress pg-cat">
            <div
              className="progress-bar pgb-cat"
              role="progressbar"
              style={{ width:  "100%"  }}
              aria-valuenow={count.solve}
              aria-valuemin="0"
              aria-valuemax={count.total}
            >
              {count.percent}%
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
