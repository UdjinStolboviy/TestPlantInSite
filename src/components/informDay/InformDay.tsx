import React from "react";

import "./InformDay.scss";

function InformDay({ informDayText }: { informDayText: string }) {
  return (
    <>
      <div className="inform-day">
        <div className="inform-day-hr"></div>
        <div className="inform-day-text">{informDayText}</div>
      </div>
    </>
  );
}

export default InformDay;
