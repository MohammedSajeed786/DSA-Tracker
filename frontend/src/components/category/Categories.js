import React from "react";
import "./Categories.css";
import {categories} from "../../helper/helper";
import CategoryItem from "./CategoryItem";
export default function Categories() {
  return (
    <div className="categories my-5">
      <div className="cat-title">180 Questions Spanning 12 Categories</div>
      <div className="cat-desc">If you want to ace the coding interviews, being well-versed in all common data structures and popular problem-solving methods is paramount. With 180 questions spanning 12 categories and 3 difficulty levels, we've got you covered</div>
      {/* <div className="container">  */}
      <div className="row cat-row">
        {categories.map((category) => {
          return <CategoryItem category={category}></CategoryItem>;
        })}
        </div>
      {/* </div> */}
    </div>
  );
}
