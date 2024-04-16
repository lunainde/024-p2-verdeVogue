import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { SocialIcon } from "react-social-icons";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer>
      <hr />
      <div className="logo-footer">
        {/* <img src={logo} alt="verdeVogue Logo" className="logo" /> */}
      </div>
      <div>
        {/* <SocialIcon className="social" url="https://twitter.com/" />
        <SocialIcon url="https://facebook.com/" />
        <SocialIcon url="https://instagram.com/" />
        <SocialIcon url="https://linkedin.com/in/" /> */}
      </div>
      <div>
        <Link to="/">About</Link>
      </div>
    </footer>
  );
}
