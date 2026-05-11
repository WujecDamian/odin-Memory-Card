import { useEffect, useState } from "react";
import Card from "./card.jsx";
import Scoreboard from "./scoreboard.jsx";

export default function GameComponent() {
  const [cardsObjects, setCardsObjects] = useState([]);
  let characters = [];

  useEffect(() => {
    //fetch data, create objects on component mount

    async function getData() {
      for (let page = 1; page <= 3; page++) {
        const url = "https://api.disneyapi.dev/character?page=" + page;
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }

          characters.push(await response.json());
        } catch (error) {
          console.error(error.message);
        }
      }
    }
    getData().then(() => {
      console.table(characters);
      getRandomCharacters();
    });
  }, []);

  function getRandomCharacters() {
    if (characters !== []) {
      let newCharArr = [];
      for (let i = 0; i < 12; i++) {
        newCharArr.push(
          characters[Math.floor(Math.random() * 5)].data[
            Math.floor(Math.random() * 48)
          ],
        );
      }
      console.table(newCharArr);
      setCardsObjects(newCharArr);
    } else {
      console.error("Wait for fetch to finish.");
    }
  }

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
      <Card cardsObjects={cardsObjects}></Card>
      <button onClick={getRandomCharacters}>Roll characters</button>
    </>
  );
}
