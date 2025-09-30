import React, { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUp, ArrowDown } from "lucide-react";
import Card from "./components/Card";
import "./App.css";
import { Data } from "./data/data";
const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="container">
      <h1>Hello World</h1>
      <p>
        How good of a plant parent are you ? Test all of your planty knowledge
        here!
      </p>
      <div>Card{Data.length - 1}</div>
      {Data[currentIndex] && (
        <Card
          src={Data[currentIndex].src}
          frontText={Data[currentIndex].title}
          backText={Data[currentIndex].answer}
          isStartCard={currentIndex === 0}
        />
      )}
      <div className="button">
        {" "}
        <button
          onClick={() => {
            if (currentIndex > 1) {
              setCurrentIndex((prev) => prev - 1);
            } else {
              setCurrentIndex(1);
            }
          }}
        >
          <ArrowLeft size={24} color="white" />
        </button>
        <button
          onClick={() => {
            // Generate random index, excluding current index and start card (index 0)
            let randomIndex;
            do {
              randomIndex = Math.floor(Math.random() * (Data.length - 1)) + 1; // Start from index 1 to exclude start card
            } while (randomIndex === currentIndex && Data.length > 2);
            setCurrentIndex(randomIndex);
          }}
        >
          {" "}
          <ArrowRight size={24} color="white" />
        </button>
      </div>
    </div>
  );
};

export default App;
