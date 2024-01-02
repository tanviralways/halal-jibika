import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
const Signup = () => {
  // const [error, setError] = useState("");
  // const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const nameOfUser = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(nameOfUser, email, password, confirmPassword);
    // if (/(?=.*[A-Z].*[A-Z])/.test(password)) {
    //   setError("Password must be at least 8 characters long");
    //   return;
    // }

    // setError("");
  };

  return (
    <div className="signup">
      <div className="signup-card">
        <div className="signup-card-header">
          <h2>Sign Up</h2>
        </div>
        <div className="signup-card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Full Name</label>
              <input
                type="text"
                name="name"
                id="username"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm your password"
              />
             
            </div>
            <button type="submit">Sign Up</button>
            <button className="google" type="submit">
              <FaGoogle />
              <span> Google</span>
            </button>
            <button className="github" type="submit">
              <FaGithub />
              <span> Github</span>
            </button>
          </form>
          <h3>
            Already have an account? <Link to="/login">Log In</Link>
          </h3>
        </div>
        <button onClick={backToHome}>Back to Home</button>
      </div>
    </div>
  );
};

export default Signup;
