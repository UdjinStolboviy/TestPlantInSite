import React from "react";

import imgNewCart from "./img/image1.png";
import "./NewCart.scss";

function NewCart() {
  return (
    <>
      <div className="new-cart__block block__cart-new">
        <div className="img-new-cart">
          <img src={imgNewCart} alt="imgNewCart" />
        </div>
        <div className="inform-textnew-cart">
          <div className="date-new-cart">Feb 23 · 8 min read</div>
          <div className="title-cart-new-cart">
            <h2>Tips & Tricks For Cutting</h2>
          </div>
          <div className="cart-text-new-cart">
            <p>
              Pruning, like any other skill, requires knowing what you are doing
              to achieve success. The old idea that anyone with a chain saw or a
              pruning saw can be a landscape pruner is far from the truth. More
              trees are killed or ruined each year from improper pruning than by
              pests. Remember that pruning is the removal or...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewCart;
