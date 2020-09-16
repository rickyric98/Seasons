import React from "react";
import "./seasondis.css";
const seasonconfig = {
  summer: {
    text: "Let go the beach",
    seasonicon: "sun",
  },
  winter: {
    text: "Burr its chilly",
    seasonicon: "snowflake",
  },
};

const getseason = (lat, month) => {
  if (month > 2 && month < 9) return lat > 0 ? "summer" : "winter";
  else return lat > 0 ? "winter" : "summer";
};

const Seasondis = (props) => {
  const season = getseason(props.lat, new Date().getMonth());
  const { text, seasonicon } = seasonconfig[season];
  return (
    <div className={`seasondis ${season}`}>
      <i className={`icon-top massive ${seasonicon} icon`} />
      <h1>{text}</h1>
      <i className={`icon-bottom massive ${seasonicon} icon`} />
    </div>
  );
};

export default Seasondis;
