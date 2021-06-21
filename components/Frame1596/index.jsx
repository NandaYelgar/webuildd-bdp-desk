import React from "react";
import Twitter3 from "../Twitter3";
import Button from "../Button";
import TextInputsNormal4 from "../TextInputsNormal4";
import TextInputsNormal2 from "../TextInputsNormal2";
import Footer2 from "../Footer2";
import "./Frame1596.css";

function Frame1596(props) {
  const {
    text1,
    group182,
    address,
    text2,
    line4,
    line5,
    line6,
    line7,
    line8,
    rectangle97,
    rectangle98,
    followUs,
    f1,
    instagram,
    vector2,
    line56,
    ellipse105,
    spanText,
    spanText2,
    text4,
    line57,
    leaveAReply,
    twitter3Props,
    buttonProps,
    textInputsNormal4Props,
    textInputsNormal2Props,
    textInputsNormal22Props,
    textInputsNormal23Props,
    footer2Props,
  } = props;

  return (
    <div className="frame-1596">
      <div className="overlap-group">
        <h1 className="text-1 valign-text-middle">{text1}</h1>
        <div className="group-182" style={{ backgroundImage: `url(${group182})` }}></div>
        <div className="group-196">
          <div className="address valign-text-middle typographybody16-regular">{address}</div>
          <p className="text-2">{text2}</p>
        </div>
        <div className="group-89">
          <img className="line-4" src={line4} />
          <img className="line" src={line5} />
          <img className="line" src={line6} />
          <img className="line" src={line7} />
          <img className="line-8" src={line8} />
        </div>
        <img className="rectangle-97" src={rectangle97} />
        <img className="rectangle-98" src={rectangle98} />
        <div className="group-198">
          <div className="follow-us valign-text-middle">{followUs}</div>
          <div className="frame-1561">
            <div className="facebook-app-symbol">
              <img className="f-1" src={f1} />
            </div>
            <div className="instagram" style={{ backgroundImage: `url(${instagram})` }}>
              <div className="overlap-group1">
                <img
                  className="vector"
                  src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-160@2x.svg"
                />
                <img className="vector-1" src={vector2} />
              </div>
            </div>
            <Twitter3 src={twitter3Props.src} />
          </div>
        </div>
        <div className="frame-200">
          <img className="line-56" src={line56} />
          <div className="frame-1646">
            <img className="ellipse-105" src={ellipse105} />
            <div className="frame-199">
              <div className="text-3 valign-text-middle">
                <span>
                  <span className="span0 ">{spanText}</span>
                  <span className="span1 ">{spanText2}</span>
                </span>
              </div>
              <p className="text-4 typographybodycaption-14-semi-bold">{text4}</p>
            </div>
          </div>
          <img className="line-57" src={line57} />
        </div>
        <Button>{buttonProps.children}</Button>
        <div className="frame-1649">
          <div className="leave-a-reply valign-text-middle typographyheadlineh2-extrabold-40">{leaveAReply}</div>
          <div className="frame-1648">
            <TextInputsNormal4>{textInputsNormal4Props.children}</TextInputsNormal4>
            <div className="frame-1647">
              <TextInputsNormal2>{textInputsNormal2Props.children}</TextInputsNormal2>
              <TextInputsNormal2 className={textInputsNormal22Props.className}>
                {textInputsNormal22Props.children}
              </TextInputsNormal2>
              <TextInputsNormal2 className={textInputsNormal23Props.className}>
                {textInputsNormal23Props.children}
              </TextInputsNormal2>
            </div>
          </div>
        </div>
        <Footer2 {...footer2Props} />
      </div>
    </div>
  );
}

export default Frame1596;
