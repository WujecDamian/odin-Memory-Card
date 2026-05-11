import { use, useEffect, useState } from "react";
import Card from "./card.jsx";
import Scoreboard from "./scoreboard.jsx";

export default function GameComponent() {
  const [cardsObjects, setCardsObjects] = useState([]);
  const [seed, setSeed] = useState(1);
  //scoreboard
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [emote, setEmote] = useState("");
  //gamelogic
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    let ignore = false; // <- prevent mount-unmount-mount from strict mode
    let tempCharacters = [];

    async function getData() {
      if (!ignore) {
        for (let page = 1; page <= 7; page = page + 2) {
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
      let characters = charactersWithImages;
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
        array[Math.floor(Math.random() * 3)].data[
          Math.floor(Math.random() * 48)
        ],
      );
    }
    setCardsObjects(newCharArr);
  }
  function changeSeed() {
    setSeed(seed + 1);
    //! TODO: Set score to 0 (or call newGame function)
  }
  function shuffleArray() {
    let newArr = cardsObjects.sort(() => Math.random() - 0.5);
    setCardsObjects([...newArr]);
  }
  function handleOnClick(card) {
    shuffleArray();
    let id = card._id;
    if (clicked.includes(id)) {
      setScore(0);
      setClicked([]);
      setSeed(seed + 1);
    } else {
      setClicked([...clicked, id]);
      setScore(score + 1);
      if (score + 1 > bestScore) {
        setBestScore(score + 1);
      }
      if (bestScore + 1 > 0 && bestScore + 1 <= 3) {
        setEmote(" 🫵🤣");
      }
      if (bestScore + 1 > 3 && bestScore + 1 < 7) {
        setEmote(" 🤙");
      }
      if (bestScore + 1 >= 7 && bestScore + 1 < 10) {
        setEmote(" 🙉");
      }
      if (bestScore + 1 >= 10 && bestScore + 1 < 12) {
        setEmote(" 🧠");
      }
      if (bestScore + 1 === 12) {
        setEmote(" 👑");
      }
    }
  }
  return (
    <>
      <Scoreboard
        score={score}
        bestScore={bestScore}
        emote={emote}
      ></Scoreboard>
      <Card cardsObjects={cardsObjects} handleOnClick={handleOnClick}></Card>
    </>
  );
}
