/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import up from "./img/UP.png";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="link-footer ">
        <div className="link-grup">
          <a href="/" className="link-service">
            Terms of Service
          </a>
          <a href="/" className="link-privocy">
            Privacy Policy
          </a>
          <a href="/" className="link-subscriptions">
            Subscription Policy
          </a>

          <a href="/" className="link-copy">
            ©Copyright © 2020 PlantIn. All rights reserved
          </a>
        </div>

        <a href="/" className="link-botton">
          <img src={up} alt="botton-up" />
        </a>
      </footer>
    </>
  );
};

export default Footer;
