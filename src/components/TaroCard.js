import React, { useState } from "react";
import { imageRoster } from "../images/imageRoster";

const TaroCard = ({ cardImage }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="cardContainer"
      onClick={() => {
        setFlipped(true);
      }}
    >
      <img
        className="cardImage"
        src={flipped ? cardImage : imageRoster.backOfCard}
        alt=""
      />
    </div>
  );
};

export default TaroCard;
