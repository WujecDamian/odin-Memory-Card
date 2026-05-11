import { useState } from "react";

export default function Scoreboard({ score, bestScore }) {
  return (
    <section className="scoreboard">
      <span>Score: {score}</span>
      <span>Best score: {bestScore}</span>
    </section>
  );
}
