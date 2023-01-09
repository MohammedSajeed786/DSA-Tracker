import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import Dialog from "./dialog/Dialog";
export default function Navbar() {
  let navigate = useNavigate();
  const logout=()=>{
    // console.log("logout clicked");
    localStorage.removeItem('auth-token')
    navigate("/signin");
  }
  const [showDialog, setshowDialog] = useState(false);
  const [dialogTitle, setdialogTitle] = useState("");
  const [dialogDesc, setdialogDesc] = useState("");
  const noClick=()=>
  {
    setshowDialog(false);
    // console.log(showDialog);
  }
  const yesClick=()=>
  {
    setshowDialog(false);
    logout();
  }
  const logoutClick=(e)=>
  {
    e.preventDefault();
    setshowDialog(true);
    setdialogTitle("Logout?")
    setdialogDesc("Are you sure you want to logout?");
  }
  if(localStorage.getItem('auth-token')===null) return<></>
  return (
    <>
      <div className="container-fluid Navbar">
        <div className="header">
          <h1 className="logo">DSA-eTracker</h1>
          <h6 className="des">Ace the Coding Interviews</h6>
        </div>
        {localStorage.getItem("auth-token") === null ? (
          <></>
        ) : (
          <div className="profile">
            <Link
              className="dropdown-toggle"
              to="#"
              // role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: " #b7bff8" }}
            >
              <span
                className="material-icons-outlined material-icons"
                style={{ fontSize: "40px" }}
              >
                account_circle
              </span>
            </Link>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
                <Link className="dropdown-item dpd" to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link className="dropdown-item dpd" to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item dpd" to="/signin" onClick={logoutClick}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <Dialog showDialog={showDialog} dialogTitle={dialogTitle} dialogDesc={dialogDesc} noClick={noClick} yesClick={yesClick}></Dialog>
    </>
  );
}
