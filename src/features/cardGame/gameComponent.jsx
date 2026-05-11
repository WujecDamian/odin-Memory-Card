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

  useEffect(() => {
    //fetch data, create objects on component mount

    async function getData() {
      const url = "https://api.disneyapi.dev/character";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const characters = await response.json();
        console.table(characters);
      } catch (error) {
        console.error(error.message);
      }
    }
    getData();
  }, []);

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
