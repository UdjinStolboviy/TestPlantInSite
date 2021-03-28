import React from "react";
import imgLogoPromo from "./img/logoPromo.png";
import imgSearch from "./img/s_image2.png";
import "./Promo.scss";

function Promo() {
  return (
    <>
      <section>
        <div
          className="promo__block"
          // style={{
          //   backgroundImage: `url(${background_section})`,
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "100%",
          // }}
        >
          <div className="promo__text">
            <img src={imgLogoPromo} alt="promo" className="img-promo-icon" />
            <h2 className="title-text-promo">
              Get unlimited access to exclusive articles
            </h2>
            <h5 className="info-text-promo">
              Get rid of limits and read everything you wish
            </h5>
            <button className="promo-site">Try For Free</button>
          </div>
          <div className="block-img-promo">
            <img src={imgSearch} alt="promoImg" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Promo;
