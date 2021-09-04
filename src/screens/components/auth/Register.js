import React, { useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import WelcomeScreen from "./WelcomeScreen";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [category, setCategory] = useState("");

  const onSignUp = (e) => {
    e.preventDefault();
    var div = document.getElementById("ResistrationForm");
  };

  return (
    <>
      <Row style={{ height: "100%" }}>
        <Col>
          <WelcomeScreen />
        </Col>
        <Col id="ResistrationForm">
          <form className="card-form" onSubmit={onSignUp}>
            <div className="text-center Secondary-heading">
              <h3>
                <i className="far fa-address-card" /> Join
              </h3>
              <p>Be a part for mentaning and mentoring the health.</p>
            </div>
            <Row>
              <Col>
                <input
                  type="text"
                  className="input px-2"
                  placeholder="Enter your First Name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  required
                />
              </Col>
              <Col>
                <input
                  type="text"
                  className="input px-2"
                  placeholder="Enter your Last Name"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  type="mail"
                  className="input px-2"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  type="number"
                  className="input px-2"
                  placeholder="Enter your phone no"
                  value={phoneNo}
                  onChange={(e) => {
                    setPhoneNo(e.target.value);
                  }}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <select
                  name="category"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  className="input text-center px-2"
                  id="category"
                >
                  <option defaultValue value={null}>
                    Select category
                  </option>
                  <option value="Doctor">Doctor</option>
                  <option value="User">User</option>
                  <option value="Organization">Organization</option>
                </select>
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  type="password"
                  className="input px-2"
                  placeholder="create your password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </Col>
              <Col>
                <input
                  type="password"
                  className="input px-2"
                  placeholder="confirm your password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <input type="submit" className="btn input" value="let's Join" />
              </Col>
            </Row>
            <p className="text-center">
              Already a Member? <Link to="/Login">Login</Link>
            </p>
          </form>
        </Col>
      </Row>
    </>
  );
}
