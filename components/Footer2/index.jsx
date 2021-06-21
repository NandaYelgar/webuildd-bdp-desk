import React from "react";
import Group86222 from "../Group86222";
import Group324 from "../Group324";
import FacebookAppSymbol3 from "../FacebookAppSymbol3";
import Twitter3 from "../Twitter3";
import Frame53 from "../Frame53";
import Frame6 from "../Frame6";
import Frame7 from "../Frame7";
import "./Footer2.css";

function Footer2(props) {
  const {
    overlapGroup,
    vector2,
    group8622Props,
    facebookAppSymbol3Props,
    twitter3Props,
    frame53Props,
    frame6Props,
    frame7Props,
  } = props;

  return (
    <div className="footer">
      <div className="frame-1585">
        <div className="frame-1578">
          <Group86222 group85={group8622Props.group85} whiteProps={group8622Props.whiteProps} />
          <div className="frame-1584">
            <Group324 />
            <div className="frame-1583">
              <FacebookAppSymbol3 src={facebookAppSymbol3Props.src} />
              <div className="instagram-1">
                <div className="overlap-group1-1" style={{ backgroundImage: `url(${overlapGroup})` }}>
                  <img
                    className="vector-3"
                    src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-95@2x.svg"
                  />
                  <img className="vector-4" src={vector2} />
                </div>
              </div>
              <Twitter3 src={twitter3Props.src} />
            </div>
          </div>
        </div>
        <Frame53 text40={frame53Props.text40} frame4Props={frame53Props.frame4Props} />
        <Frame6
          text48={frame6Props.text48}
          frame42Props={frame6Props.frame42Props}
          frame422Props={frame6Props.frame422Props}
        />
      </div>
      <Frame7 text56={frame7Props.text56} frame4Props={frame7Props.frame4Props} />
    </div>
  );
}

export default Footer2;
