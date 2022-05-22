import React from "react";
import "./Cards.css";
import { cardsData } from './data/Data';
import SingleCard from "./SingleCard";

const Cards = () => {
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <SingleCard
              title={card.title}
              value={card.value}
              png={card.png}
              growth={card.growth}
              duration={card.duration}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;