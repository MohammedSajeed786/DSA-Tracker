import React from "react";
import "./Dialog.css";
export default function (props) {
    let {showDialog,noClick,yesClick,dialogTitle,dialogDesc}=props;
    if(showDialog===false) {
        // console.log(showDialog);
        return <></>;
    }
    else{
  return (
    <div className="overlay">
      <div className="dialog">
        <div className="dialog__content">
          <h2 className="dialog__title">{dialogTitle}</h2>
          <p className="dialog__description">
            {dialogDesc}
          </p>
        </div>

        <hr />

        <div className="dialog__footer">
          <button className="dialog__cancel" onClick={noClick}>No</button>
          <button className="dialog__confirm" onClick={yesClick}>Yes</button>
        </div>
      </div>
    </div>
  );
}
}
