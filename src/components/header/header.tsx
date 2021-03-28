/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import "./header.scss";
import searchImg from "./img/Search input small.png";
import fremeImg from "./img/Frame.png";
import logo from "./img/logo.png";

function Header() {
  const [toggle, toggleClass] = useState(true);

  return (
    <>
      <header className="header">
        <div className="header__row">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
          <div
            className={
              toggle ? "menu__icon icon-menu" : "menu__icon icon-menu active"
            }
            onClick={() => toggleClass(!toggle)}
          >
            <div className="search-alt-first">
              <img src={searchImg} alt="searchImg" />
            </div>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className="header__menu menu">
            <div className={toggle ? "menu__body" : "menu__body active"}>
              <ul className="menu__list">
                <li>
                  <a href="re" className="menu__link">
                    Discover
                  </a>
                </li>
                <li>
                  <a href="re" className="menu__link">
                    Diseases
                  </a>
                </li>
                <li>
                  <a href="re" className="menu__link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="re" className="menu__link">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="re" className="menu__link">
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="li-manu">
                <div className="search-alt">
                  <img src={searchImg} alt="searchImg" />
                </div>
                <div className="freme-img">
                  <img src={fremeImg} alt="mobileImg" />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
