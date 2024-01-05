import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from "firebase/auth";

import app from "../../firebase/firebase.config";
import Header from "../../Layout/Header/Header";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Signup = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
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
    if (password !== confirmPassword) {
     return setError("Password dosn't match");
    }

    //create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        e.target.reset();
        setSuccess("successfully log in");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user); 
        <Header user={user}/>
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
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
              <h4>{success}</h4>
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
              {error}
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
            <button
              onClick={handleGoogleSignIn}
              className="google"
              type="submit">
              <FaGoogle />
              <span> Google</span>
            </button>
            <button
              onClick={handleGithubSignIn}
              className="github"
              type="submit">
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
