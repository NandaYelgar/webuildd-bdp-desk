import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button.css";

function Button(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x26012776TimelineData);
  }, []);

  return (
    <div className="x26012776 component component-wrapper not-ready">
      <div className="master-button-Bjvkei">
        <div className="button-i2601277651-RQP1VA valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x26012776TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".x26012776",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
    },
  },
];

export default Button;
