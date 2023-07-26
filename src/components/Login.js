import React, { useState } from "react";
import Signup from "./Signup";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password", password);
  };

  const handleSignupButtonClick = () => {
    setShowSignup(true);
  };
  return (
    <div>
      <h2>Giriş Yap</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Şifre:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Giriş Yap</button>
      </form>
      <button onClick={handleSignupButtonClick}>Kayıt Ol</button>
      {showSignup && <Signup />}
    </div>
  );
}

export default LoginForm;
