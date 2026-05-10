import { useEffect } from "react";
import Card from "./card.jsx";
import Scoreboard from "./scoreboard.jsx";

export default function GameComponent() {
  const [cardsObjects, setCardsObjects] = [
    { name: "", src: "", hasBeenClicked: false },
    { name: "", src: "", hasBeenClicked: false },
    { name: "", src: "", hasBeenClicked: false },
    { name: "", src: "", hasBeenClicked: false },
    { name: "", src: "", hasBeenClicked: false },
    { name: "", src: "", hasBeenClicked: false },
    { name: "", src: "", hasBeenClicked: false },
    { name: "", src: "", hasBeenClicked: false },
    { name: "", src: "", hasBeenClicked: false },
    { name: "", src: "", hasBeenClicked: false },
    { name: "", src: "", hasBeenClicked: false },
    { name: "", src: "", hasBeenClicked: false },
  ];

  function shuffleArray() {
    let i = Array.length,
      random,
      temp;
    while (i > 1) {
      random = Math.floor(Math.random() * (i + 1));
      temp = cardsObjects[random];
      cardsObjects[random] = cardsObjects[i];
      cardsObjects[i] = temp;
      i--;
    }
  }

  return (
    <>
      <Scoreboard></Scoreboard>
      <Card></Card>
    </>
  );
}
is;
