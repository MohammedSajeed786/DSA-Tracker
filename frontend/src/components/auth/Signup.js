import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Signup.css";
import { ToastContainer, toast } from "react-toastify";
import LoadingContext from "../../context/Loading/LoadingContext";
export default function Signup() {
  let loadingContext = useContext(LoadingContext);
  let { updateLoader } = loadingContext;
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
    name: "",
    cpassword: "",
  });
  let navigate = useNavigate();
  const inputChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const register = async (e) => {
    if (!disable()) {
      // firebase.auth().signinW
      e.preventDefault();
      updateLoader(25);
      // console.log("name pwd email"+credentials.name,credentials.password,credentials.email);
      const response = await fetch(`auth/createuser`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: credentials.password,
          email: credentials.email,
          name: credentials.name,
        }), // body data type must match "Content-Type" header
      });
      const json = await response.json();
      updateLoader(50);
      // console.log(json);
      if (json.success) {
        localStorage.setItem("auth-token", json.authtoken);
        updateLoader(75);
        navigate("/");
        // showAlert("Registration successful", "success");
        toast.success("Registration successful");
      } else {
        // showAlert("invalid credentials", "danger");
        if (json.code == 1) toast.warn("user already exists with this email");
        else toast.info("server error occured");
        updateLoader(100);
      }
    }
    e.preventDefault();
    // console.log(credentials);
  };
  const disable = () => {
    //console.log("disable")
    if (credentials.name.length < 1) {
      // showAlert("name must be atleat 1 character", "info");
      toast.info("name must be atleat 1 character");

      return true;
    }
    if (credentials.password.length < 8) {
      //   showAlert("password must be atleat 8 characters", "info");
      toast.info("password must be atleat 8 characters");

      return true;
    }
    if (credentials.password !== credentials.cpassword) {
      console.log(credentials.password,credentials.cpassword)
      //   showAlert("password and confirm password doesn't match", "info");
      toast.info("password and confirm password doesn't match");

      return true;
    }
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!credentials.email.match(mailformat)) {
      //   showAlert("invalid email", "info");
      toast.info("invalid email");
      return true;
    }
    return false;
  };

  const [hidePassword, sethidePassword] = useState(true);
  const handlePassword = (e) => {
    //  e.preventDefault();
    // console.log("pass");
    if (hidePassword === true) sethidePassword(false);
    else sethidePassword(true);
    // console.log(hidePassword);
  };

 
  return (
    <div className="rsignup-screen">
      <div className="rcontainer">
        <div className="rwelcome-container">
          <h1>Create</h1>
          <h1>Your</h1>
          <h1>Account</h1>
        </div>
        <div className="rscreen">
          <div className="rscreen__content">
            <h1>Sign Up</h1>

            <form className="rlogin" onSubmit={register}>
              <div className="rlogin__field">
              <i class="rlogin__icon fa-solid fa-signature"></i>
                <input
                  type="text"
                  name="name"
                  className="rlogin__input"
                  placeholder="Name"
                  onChange={inputChange}
                />
              </div>
              <div className="rlogin__field">
                <i className="rlogin__icon fas fa-user"></i>
                <input
                  type="email"
                  name="email"
                  className="rlogin__input"
                  placeholder="Email"
                  onChange={inputChange}
                />
              </div>
              <div className="rlogin__field">
                  <i
                    className="rlogin__icon fas fa-lock"
                  ></i>

                <input
                  type={hidePassword ? "password" : "text"}
                  name="password"
                  className="rlogin__input"
                  placeholder="Password"
                  onChange={inputChange}
                />
              </div>
              <div className="rlogin__field">
                  <i
                    className="rlogin__icon fas fa-lock"
                  ></i>
                <input
                  type={hidePassword ? "password" : "text"}
                  name="cpassword"
                  className="rlogin__input"
                  placeholder="Confirm Password"
                  onChange={inputChange}
                />
              </div>
              {hidePassword ? (
                  <i  id="eye-icon1" 
                    className="rlogin__icon fa-solid fa-eye"
                    onClick={handlePassword}
                  ></i>
                ) : (
                  <i id="eye-icon1" 
                    class="rlogin__icon fa-solid fa-eye-slash"
                    onClick={handlePassword}
                  ></i>
                )}
              <button
                className="rbutton rlogin__submit"
                // onClick={(e) => {
                //   register();
                // }}
              >
                <span className="rbutton__text">Sign Up Now</span>
                <i className="rbutton__icon fas fa-chevron-right"></i>
              </button>
            </form>
            <Link to="/signin">
              <h4>Login</h4>
            </Link>
          </div>
          <div className="rscreen__background">
            <span className="rscreen__background__shape rscreen__background__shape4"></span>
            <span className="rscreen__background__shape rscreen__background__shape3"></span>
            <span className="rscreen__background__shape rscreen__background__shape2"></span>
            <span className="rscreen__background__shape rscreen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
