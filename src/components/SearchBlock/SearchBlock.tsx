import React from "react";
import imgSearchIcon from "./img/search.png";
import imgSearch from "./img/s_image.png";
import "./SearchBlock.scss";

function SearchBlock() {
  return (
    <>
      <section>
        <div
          className="search__block"
          // style={{
          //   backgroundImage: `url(${background_section})`,
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "100%",
          // }}
        >
          <div className="search__text">
            <h2 className="title-text">
              Stay always tuned with planting trends
            </h2>
            <h5 className="info-text">
              Tips & Tricks selected specially for you!
            </h5>
            <input className="search-site" placeholder="Search"></input>
            <img src={imgSearchIcon} alt="search" className="img-search-icon" />
          </div>
          <div className="block-img">
            <img src={imgSearch} alt="searchImg" />
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchBlock;
