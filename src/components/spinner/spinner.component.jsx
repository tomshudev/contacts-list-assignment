import React from "react";

import "./spinner.styles.scss";

function Spinner() {
  return (
    <div className="container">
      <svg
        className="spinner"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-20 -20 40 40"
      >
        <circle
          r="15.9154943092"
          stroke-width="7"
          fill="none"
          stroke="#424242"
        />
      </svg>
    </div>
  );
}

export default Spinner;
