import React, { useState } from "react";
import { boilerPlateData } from "./data.js";
import TaroCard from "./components/TaroCard";
import "./App.css";

export default () => {
  const generateRandom3Cards = collection => {
    const collectionRandom = collection.sort(function() {
      return 0.5 - Math.random();
    });
    return collectionRandom
      .map(item => {
        return <TaroCard cardImage={item.image} />;
      })
      .slice(0, 3);
  };

  const [cardsOnTable, setCardsOnTable] = useState(
    generateRandom3Cards(boilerPlateData)
  );

  return <div className="generatedCards">{cardsOnTable}</div>;
};
