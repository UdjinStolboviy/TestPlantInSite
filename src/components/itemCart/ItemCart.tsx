import React from "react";

import "./ItemCart.scss";

function ItemCart({
  imgItem,
  textDate,
  titleText,
  InformTextCart,
  styleCart,
  styleH2Cart,
  styleInform,
}: {
  imgItem: any;
  textDate: string;
  titleText: string;
  InformTextCart: string;
  styleCart?: any;
  styleH2Cart?: any;
  styleInform?: any;
}) {
  return (
    <>
      <div className="item__block block__cart" style={styleCart}>
        <div className="img-item">
          <img src={imgItem} alt="imgItem" />
        </div>
        <div className="inform-text" style={styleInform}>
          <div className="date-cart">{textDate}</div>
          <div className="title-cart">
            <h2 style={styleH2Cart}>{titleText}</h2>
          </div>
          <div className="cart-text">
            <p>{InformTextCart}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCart;
