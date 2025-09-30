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
      <div>
        Card {currentIndex} of {Data.length - 1}
      </div>
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
            if (currentIndex < Data.length - 1) {
              setCurrentIndex((prev) => prev + 1);
            } else {
              setCurrentIndex(1);
            }
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
