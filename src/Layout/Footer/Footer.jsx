import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import "./footer.css";
const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="footer-row">
          <div className="footer-col">
            <h4>About</h4>
            <ul className="links">
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur,
                  <br /> adipisicing elit. Placeat beatae perspiciatis <br />
                  suscipit. Ex similique voluptate fugiat eos, <br /> impedit
                  tempore harum corrupti hic.
                </p>
              </li>
              <div>
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Employers</h4>
            <ul className="links">
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
              <li>
                <a href="#">Post a Job</a>
              </li>
              <li>
                <a href="#">Advance Skill Search</a>
              </li>
              <li>
                <a href="#">Recruiting Service </a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>How It Works</h4>
            <ul className="links">
              <li>
                <a href="#">Register</a>
              </li>
              <li>
                <a href="#">Post Your Skills</a>
              </li>
              <li>
                <a href="#">Job Search </a>
              </li>
              <li>
                <a href="#">Emplorer Search</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Have a Question</h4>
            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            <p>+2 392 3929 210</p>
            <form action="#">
              <input type="text" placeholder="Your email" required />
              <button type="submit" id="subs-btn">SUBSCRIBE</button>
            </form>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
