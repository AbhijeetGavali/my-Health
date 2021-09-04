import React, { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = () => {};

  return (
    <form onSubmit={onSignUp}>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail(e.trarget.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button type="submit" title="Sign In" />
    </form>
  );
}

export default Login;
