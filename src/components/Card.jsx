import { useState } from "react";
import "./Card.css";

const colors = ["#e6e26fd9", "#a7eaaed9", "#ea9177d9"];

const Card = ({ frontText, backText, src, isStartCard }) => {
  const [flipped, setFlipped] = useState(false);
  const [color] = useState(colors[Math.floor(Math.random() * colors.length)]);

  return (
    <div className="card-container" onClick={() => setFlipped(!flipped)}>
      <div
        className={`cards-flip ${flipped ? "flipped" : ""} ${
          isStartCard ? "start-card" : ""
        }`}
      >
        <div className="card-front" style={{ backgroundColor: color }}>
          <div className="card-content">
            <h3 className="card-text">{frontText}</h3>
            {src && <img src={src} alt="Geography" className="card-image" />}
          </div>
        </div>
        <div className="card-back" style={{ backgroundColor: color }}>
          <div className="card-content">
            <p className="card-text">{backText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
