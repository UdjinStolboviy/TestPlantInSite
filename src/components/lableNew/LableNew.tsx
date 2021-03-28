import React from "react";
import newBadge from "./img/new_badge.png";
import "./LableNew.scss";

// import ScrollAnimation from "react-animate-on-scroll";

function LableNew() {
  return (
    <>
      <div className="img-lable">
        <img src={newBadge} alt="lableNew" />
      </div>
    </>
  );
}

export default LableNew;
