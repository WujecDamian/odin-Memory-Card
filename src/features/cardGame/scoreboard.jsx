import { useState } from "react";

export default function Scoreboard({ score, bestScore, emote }) {
  return (
    <section className="scoreboard">
      <span>Score: {score}</span>
      <span>
        Best score: {bestScore} {emote}
      </span>
    </section>
  );
}
