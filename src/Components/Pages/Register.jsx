import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

const Register = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: email,
          username: username,
        });
        console.log("registered");
      }
    } catch (error) {
      const code = error.code;
      const message = error.message;
      console.log(message);
    }
  };

  return (
    <div className="page-container flex-centered">
      <form className="user-info-form" onSubmit={registerHandler}>
        <h3>Register</h3>
        <input
          placeholder="Username"
          type="text"
          required
          autoComplete="on"
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <span>Already have account? Login</span>
        <input value="Register" type="submit" />
      </form>
    </div>
  );
};

export default Register;
