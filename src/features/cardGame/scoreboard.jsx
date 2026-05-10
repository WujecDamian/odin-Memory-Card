import { useState } from "react";

export default function Scoreboard() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <section className="score_board">
      <span>Score: {score}</span>
      <span>Best score: {bestScore}</span>
    </section>
  );
}
