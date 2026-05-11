import { use, useEffect, useState } from "react";
import Card from "./card.jsx";
import Scoreboard from "./scoreboard.jsx";

export default function GameComponent() {
  const [cardsObjects, setCardsObjects] = useState([]);
  const [seed, setSeed] = useState(1);

  useEffect(() => {
    let ignore = false; // <- prevent mount-unmount-mount from strictmode
    let tempCharacters = [];
    //fetch data, create objects on component mount

    async function getData() {
      if (!ignore) {
        for (let page = 1; page <= 3; page++) {
          const url = "https://api.disneyapi.dev/character?page=" + page;
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
            }
            let result = await response.json();
            tempCharacters.push(result);
          } catch (error) {
            console.error(error.message);
          }
        }
      }
    }
    getData().then(() => {
      let charactersWithImages = tempCharacters.filter(
        (character) => character.imageUrl != "",
      );
      let characters = tempCharacters;
      getRandomCharacters(characters);
    });
    return () => {
      ignore = true;
      tempCharacters = [];
    };
  }, [seed]);

  function getRandomCharacters(array) {
    let newCharArr = [];
    for (let i = 0; i < 12; i++) {
      newCharArr.push(
        array[Math.floor(Math.random() * 2)].data[
          Math.floor(Math.random() * 48)
        ],
      );
    }
    setCardsObjects(newCharArr);
  }
  function changeSeed() {
    setSeed(seed + 1);
    console.table(cardsObjects);
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
      <button onClick={changeSeed}>Roll characters</button>
    </>
  );
}
