import { Link } from "react-router-dom";
import "../Signup/signup.css";
const Signin = () => {
  return (
    <div className="signup">
      <div className="signup-card">
        <div className="signup-card-header">
          <h2>Sign In</h2>
        </div>
        <div className="signup-card-body">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">Sign IN</button>
          <button className="google" type="submit">
            Google
          </button>
          <button className="github" type="submit">
            Github
          </button>
          <h3>
            Dont have an account? <Link to="/signup">Register</Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Signin;
