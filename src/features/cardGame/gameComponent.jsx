import { useEffect } from "react";
import Card from "./card.jsx";
import Scoreboard from "./scoreboard.jsx";

export default function GameComponent() {
  return (
    <>
      <Scoreboard></Scoreboard>
      <Card></Card>
    </>
  );
}
