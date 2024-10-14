import React from "react";

const Login = () => {
  
  // For LOGIN
  var x = document.getElementById("login");
  var y = document.getElementById("register");
  var z = document.getElementById("btn");
  var a = document.getElementById("log");
  var b = document.getElementById("reg");
  var w = document.getElementById("other");

  function register() {
    // var x = document.getElementById("login");
    // var y = document.getElementById("register");
    // var z = document.getElementById("btn");
    // var a = document.getElementById("log");
    // var b = document.getElementById("reg");
    // var w = document.getElementById("other");
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
    w.style.visibility = "hidden";
    b.style.color = "#fff";
    a.style.color = "#000";
  }

  function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
    w.style.visibility = "visible";
    a.style.color = "#fff";
    b.style.color = "#000";
  }

  // CheckBox Function
  function goFurther() {
    if (document.getElementById("chkAgree").checked === true) {
      document.getElementById("btnSubmit").style =
        "background: linear-gradient(to right, #FA4B37, #DF2771);";
    } else {
      document.getElementById("btnSubmit").style = "background: lightgray;";
    }
  }

  function google() {
    window.location.assign(
      "https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession",
      "_blank"
    );
  }
  return (
    <>
      <div class="form-box">
        <div class="button-box ">
         
          <button
            type="button"
            class="toggle-btn active col-lg-6"
            id="log"
            onClick={login}
            style={{ color: "#fff" }}
          >
            Log In
          </button>
          <button type="button" class="toggle-btn col-lg-6" id="reg" onClick={register}>
            Register
          </button>
        </div>
        <div class="social-icons">
          <a href="/">
            <icon class="fab fa-instagram icon"></icon>
          </a>
          <a href="/">
            <icon class="fab fa-facebook-square icon"></icon>
          </a>
          <a href="/">
            <icon class="fab fa-twitter icon"></icon>
          </a>
        </div>

        <form id="login" class="input-group col" >
          <div class="inp d-flex align-items-center w-100">
            <i
              class="fa fa-user"
              style={{ fontSize: "20px", paddingright: "10px" }}
            ></i>
            <input
              type="text"
              id="email"
              class="input-field"
              placeholder="Username or Phone Number"
              style={{ width: "88%", border: "none" }}
              required="required"
            />
          </div>
          <div class="inp d-flex align-items-center mt-2 w-100">
            <i
              class="fas fa-lock w-1"
              style={{ fontSize: "20px", paddingright: "10px" }}
            ></i>
            <input
              type="password"
              id="password"
              class="input-field"
              placeholder="Password"
              style={{ width: "88%", border: "none" }}
              required="required"
            />
          </div>
          <div class="d-flex align-items-center mr-1 w-100">
          <input type="checkbox" class="check-box" id="checkbox" />
          <label for="checkbox">Remember Password</label>
          </div>
          <div className="d-flex w-100">
          <button type="submit" class="submit-btn w-100">
            Log In
          </button>
          </div>
        </form>

        <div class="other" id="other">
          <div class="instead">
            <h3>or</h3>
          </div>
          <button class="connect" onClick={google}>
            <img src="images/icon/google.png" />
            <icon class="fab fa-google"></icon>
            <span>Sign in with Google</span>
          </button>
        </div>

        <form id="register" class="input-group">
          <input
            type="text"
            class="input-field"
            placeholder="Full Name"
            required="required"
          />
          <input
            type="email"
            class="input-field"
            placeholder="Email Address"
            required="required"
          />
          <input
            type="password"
            class="input-field"
            placeholder="Create Password"
            name="psame"
            required="required"
          />
          <input
            type="password"
            class="input-field"
            placeholder="Confirm Password"
            name="psame"
            required="required"
          />
          <input
            type="checkbox"
            class="check-box"
            id="chkAgree"
            onClick={goFurther}
          />{" "}
          <label for="chkAgree">I agree to the Terms & Conditions</label>
          <button type="submit" id="btnSubmit" class="submit-btn reg-btn">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
