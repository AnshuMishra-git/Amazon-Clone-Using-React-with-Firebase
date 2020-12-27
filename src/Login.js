import React from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import logo from "./logo4.png";
import "./Login.css";
import { easing } from "@material-ui/core";
import { useState } from "react";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={logo} alt="amazon_logo" />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="email"
          />
          <h5>Password</h5>
          <input
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            type="password"
          ></input>
          <button onClick={login} type="submit" className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>
          By Singing-in you agree to Amazon's Conditions of Use & Sale. Please
          see Our Privacy Norics,Our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button onClick={register} className="login_registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}
