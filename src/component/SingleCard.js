import React from "react";
import "./SingleCard.css";

const SingleCard = (props) => {
  return (
    <div className="SingleCard">
      <div className="top">
        <div className="left">
          <h4>{props.title}</h4>
          <p className="value">{props.value}</p>
        </div>
        <div className="right">
              <img src={props.png} alt="" />
        </div>
      </div>

      <div className="bottom">
        <div className="growth">{props.growth}</div>        
        <div className="duration">{props.duration}</div>
      </div>
    </div>
  );
};


export default SingleCard;