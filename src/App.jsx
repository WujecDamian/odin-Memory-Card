import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import GameComponent from "./features/cardGame/gameComponent.jsx";
import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <h1>Memory card game</h1>
      </header>
      <main className="main">
        <GameComponent></GameComponent>
      </main>
      <footer className="footer"></footer>
    </>
  );
}

export default App;
