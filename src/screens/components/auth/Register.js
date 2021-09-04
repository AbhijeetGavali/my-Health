import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSignUp = () => {};

  return (
    <form onSubmit={onSignUp}>
      <Row>
        <Col>
          <input
            type="text"
            placeholder="Enter your First Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.trarget.value);
            }}
          />
        </Col>
        <Col>
          <input
            type="text"
            placeholder="Enter your Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.trarget.value);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type="mail"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.trarget.value);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type="number"
            placeholder="Enter your email"
            value={phoneNo}
            onChange={(e) => {
              setPhoneNo(e.trarget.value);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <input
            type="password"
            placeholder="create your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Col>
        <Col>
          <input
            type="password"
            placeholder="confirm your password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <button type="submit" title="Sign Up" />
        </Col>
      </Row>
    </form>
  );
}
