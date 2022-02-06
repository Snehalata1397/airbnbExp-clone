import React from "react";
// import CardImg from "../images/katie-zaferes.png";
// import StarImg from "../images/star.png";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={`../images/${props.coverImg}`} className="card-img" />
      <div className="card-stats">
        <img src="./images/star.png" className="card-star" />
        <span>{props.stats.rating}</span>
        <span className="grey">({props.stats.reviewCount}) •</span>
        <span className="grey">{props.location}</span>
      </div>
      <p className="card-title">{props.title}</p>
      <p className="card-price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
