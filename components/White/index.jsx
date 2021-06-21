import React from "react";
import "./White.css";

function White(props) {
  const { src } = props;

  return (
    <div className="white">
      <img className="vector-5" src={src} />
    </div>
  );
}

export default White;
