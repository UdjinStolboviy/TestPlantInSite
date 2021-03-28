import React from "react";
import "./linkPag.scss";

import { withRouter, Link } from "react-router-dom";

const LinkSite = () => {
  return (
    <>
      <section className="link-site ">
        <div className="container">
          <Link className="link" to="/">
            Home {">"}
          </Link>
          <Link className="link active" to="/">
            Blog {">"}
          </Link>
        </div>
      </section>
    </>
  );
};

export default withRouter(LinkSite);
