import React,{useContext,useState}from "react";
import QuestionContext from "../context/Questions/QuestionContext";
import { ToastContainer, toast } from 'react-toastify';

export default function Modal(props) {
  let questionContext = useContext(QuestionContext);
  let { notes,updateNotes } = questionContext;
  let { q_no, name } = props.question;
  let style = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.8)",
  };
  const [current_notes, setcurrent_notes] = useState(notes[q_no]);
  const inputChange=(e)=>{
      setcurrent_notes(e.target.value);
  }
  const changeNotes=()=>{
      updateNotes(q_no,current_notes);
      toast.success("Your notes will be saved!");
      // props.toggleModal();
  }
  return (
    <div
      className="modal show fade"
      style={style}
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {name}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="input-group">
              <textarea
                className="form-control"
                rows="10"
                aria-label="With textarea"
                style={{ overflow: "auto" }}
                value={current_notes}
                onChange={inputChange}
              ></textarea>
            </div>
          </div>
          <div className="modal-footer" onClick={props.toggleModal}>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={changeNotes}>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
