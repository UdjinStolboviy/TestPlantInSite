import React from "react";

import "./MaimSite.scss";

import Header from "../header";
import LinkSite from "../linkPag";
import SearchBlock from "../SearchBlock";
import LableNew from "../lableNew";
import NewCart from "../NewCart";
import InformDay from "../informDay";
import ItemCart from "../itemCart";
import Promo from "../Promo";
import Footer from "../footer";

import imgCart2 from "./img/image2.png";
import imgCart3 from "./img/image3.png";
import imgCart4 from "./img/image4.png";
import imgCart5 from "./img/image5.png";
import imgCart6 from "./img/image6.png";

// import ScrollAnimation from "react-animate-on-scroll";
const informDayText1 = "TOP of the Day",
  informDayText2 = "Interesting";

const textDate2 = " Feb 23 · 8 min read",
  titleText2 = "Professional Repot",
  InformTextCart2 =
    " Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...";

const textDate3 = " Feb 23 · 8 min read",
  titleText3 = "Professional Repot",
  InformTextCart3 =
    " Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...";

const textDate4 = " Feb 23 · 8 min read",
  titleText4 = "Watering mastery",
  InformTextCart4 =
    "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...";

const textDate5 = " Feb 23 · 8 min read",
  titleText5 = "Plant pot secrets",
  InformTextCart5 =
    "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...";

const textDate6 = " Feb 23 · 8 min read",
  titleText6 = "Professional Repot",
  InformTextCart6 =
    "Repotting a plant can seem like a difficult task because a lot of things can go wrong – you can damage...";

function MainSite() {
  return (
    <>
      <Header />
      <div className="body">
        <div className="container">
          <LinkSite />
          <SearchBlock />
          <LableNew />
          <NewCart />
          <InformDay informDayText={informDayText1} />
          <div className="block1">
            <div className="block1-item1">
              <ItemCart
                imgItem={imgCart2}
                textDate={textDate2}
                titleText={titleText2}
                InformTextCart={InformTextCart2}
              />
            </div>

            <div className="block1-item2">
              <ItemCart
                imgItem={imgCart3}
                textDate={textDate3}
                titleText={titleText3}
                InformTextCart={InformTextCart3}
              />
            </div>
          </div>
          <InformDay informDayText={informDayText2} />
          <div className="block2">
            <div className="block2-item1">
              <ItemCart
                imgItem={imgCart4}
                textDate={textDate4}
                titleText={titleText4}
                InformTextCart={InformTextCart4}
              />
            </div>

            <div className="block2-item2">
              <ItemCart
                imgItem={imgCart5}
                textDate={textDate5}
                titleText={titleText5}
                InformTextCart={InformTextCart5}
              />
            </div>
            <div className="block2-item3">
              <ItemCart
                imgItem={imgCart6}
                textDate={textDate6}
                titleText={titleText6}
                InformTextCart={InformTextCart6}
              />
            </div>
            <div className="block2-item4">
              <ItemCart
                imgItem={imgCart4}
                textDate={textDate4}
                titleText={titleText4}
                InformTextCart={InformTextCart4}
              />
            </div>
            <div className="block2-item5">
              <ItemCart
                imgItem={imgCart6}
                textDate={textDate6}
                titleText={titleText6}
                InformTextCart={InformTextCart6}
              />
            </div>
            <div className="block2-item6">
              <ItemCart
                imgItem={imgCart5}
                textDate={textDate5}
                titleText={titleText5}
                InformTextCart={InformTextCart5}
              />
            </div>
          </div>
          <Promo />
          <div className="block2">
            <div className="block2-item1">
              <ItemCart
                imgItem={imgCart5}
                textDate={textDate5}
                titleText={titleText5}
                InformTextCart={InformTextCart5}
              />
            </div>

            <div className="block2-item2">
              <ItemCart
                imgItem={imgCart6}
                textDate={textDate6}
                titleText={titleText6}
                InformTextCart={InformTextCart6}
              />
            </div>
            <div className="block2-item3">
              <ItemCart
                imgItem={imgCart4}
                textDate={textDate4}
                titleText={titleText4}
                InformTextCart={InformTextCart4}
              />
            </div>
            <div className="block2-item4">
              <ItemCart
                imgItem={imgCart6}
                textDate={textDate6}
                titleText={titleText6}
                InformTextCart={InformTextCart6}
              />
            </div>
            <div className="block2-item5">
              <ItemCart
                imgItem={imgCart4}
                textDate={textDate4}
                titleText={titleText4}
                InformTextCart={InformTextCart4}
              />
            </div>
            <div className="block2-item6">
              <ItemCart
                imgItem={imgCart5}
                textDate={textDate5}
                titleText={titleText5}
                InformTextCart={InformTextCart5}
              />
            </div>
          </div>
          <Footer />
        </div>

        {/* <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
        <App />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <App />
      </ScrollAnimation>
      <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
        <App />
      </ScrollAnimation>

      <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
        <App />
      </ScrollAnimation> */}
      </div>
    </>
  );
}

export default MainSite;
