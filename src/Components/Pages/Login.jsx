import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("logged in");
    } catch (error) {
      const code = error.code;
      const message = error.message;
      console.log(message);
    }
  };

  return (
    <div className="page-container flex-centered">
      <form className="user-info-form" onSubmit={loginHandler}>
        <h3>Login</h3>
        <input
          placeholder="Email"
          type="email"
          required
          autoComplete="on"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          required
          autoComplete="on"
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>Forgot Password?</span>
        <input value="Login" type="submit" />
      </form>
    </div>
  );
};

export default Login;
