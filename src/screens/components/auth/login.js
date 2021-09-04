import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import docTETEscope from "../../img/doctorsTetscope.jpg";
import auth from "./authentication"

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");

  const onSignUp = (e) => {
    e.preventDefault();
    auth.login(() => {
      props.history.push("/Dashboard");
    });
  };

  return (
    <>
      <img src={docTETEscope} className="BackgroundLandingPAge" />
      <form className="card-form" onSubmit={onSignUp}>
        <div className="text-center Secondary-heading">
          <i className="fas fa-user-circle" />
          <h3>Get sign in</h3>
        </div>
        <select
          name="category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className="input text-center px-2"
          id="category"
          required
        >
          <option defaultValue value={null}>
            Select category
          </option>
          <option value="Doctor">Doctor</option>
          <option value="User">User</option>
          <option value="Organization">Organization</option>
        </select>
        <input
          className="input text-center px-2"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <input
          className="input text-center px-3"
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <input type="submit" className="btn input" value="Sign In" />
        <p className="text-center">
          Not a Member? <Link to="/Register"> Register Here</Link>
        </p>
      </form>
    </>
  );
}

export default Login;
