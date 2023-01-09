import React, { useEffect, useState, useContext } from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import LoadingContext from "../../context/Loading/LoadingContext";
export default function Signin() {
  let loadingContext = useContext(LoadingContext);
  let { updateLoader } = loadingContext;
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("auth-token") !== null) {
      navigate("/");
    }
  });

  //state for cred
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });
  const inputChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const login = async (e) => {
    //disable retuurns true if something is wrong
    if (!disable()) {
      e.preventDefault();
      updateLoader(25);
      const response = await fetch(`auth/signin`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: credentials.password,
          email: credentials.email,
        }), // body data type must match "Content-Type" header
      });
      const json = await response.json();
      updateLoader(50);
      // console.log(json);
      if (json.success) {
        localStorage.setItem("auth-token", json.authtoken);
        updateLoader(75);
        navigate("/");
        // showAlert("Login successful", "success");
        toast.success("Login successful");
        // console.log("inside signin")
        // console.log(localStorage.getItem("auth-token"));
      } else {
        // showAlert("invalid credentials", "danger");
        if (json.code == 3) toast.warn("invalid password");
        else if (json.code == 2)
          toast.warn("No user exists with this credentials");
        else toast.info("server error occured");

        updateLoader(100);
      }
    }
    e.preventDefault();
  };

  const disable = () => {
    if (credentials.password.length < 8) {
      //   showAlert("password must be atleat 8 characters", "info");
      toast.info("password must be atleast 8 characters");
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

  //state for hide password
  const [hidePassword, sethidePassword] = useState(true);
  const handlePassword = (e) => {
    //  e.preventDefault();
    // console.log("pass");
    if (hidePassword === true) sethidePassword(false);
    else sethidePassword(true);
    // console.log(hidePassword);
  };

  return (
    <div className="signin-screen">
      <div className="container">
        <div className="welcome-container">
          <h1>Welcome</h1>
          <h1>To</h1>
          <h1>DSA Tracker</h1>
        </div>
        <div className="screen">
          <div className="screen__content">
            <h1>Sign In</h1>
            <form className="login" onSubmit={login}>
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  className="login__input"
                  placeholder="Email"
                  onChange={inputChange}
                  type="email"
                  name="email"
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type={hidePassword ? "password" : "text"}
                  className="login__input"
                  placeholder="Password"
                  onChange={inputChange}
                  name="password"
                />
                {hidePassword ? (
                  <i
                    className="login__icon fa-solid fa-eye"
                    onClick={handlePassword}
                  ></i>
                ) : (
                  <i
                    class="login__icon fa-solid fa-eye-slash"
                    onClick={handlePassword}
                  ></i>
                )}
              </div>
              <button className="button login__submit">
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
            <Link to="/signup">
              <h4>Create Account</h4>
            </Link>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

//<i class="fa-solid fa-eye"></i>  <i class="fa-solid fa-eye-slash"></i>
