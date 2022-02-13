import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Board.css";

export default function Board() {
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState(Array(6).fill(Array(5).fill()));
  const [colors, setColors] = useState(Array(6).fill(Array(5).fill()));
  const word = "APAGA";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setResult(
      result.map((e, y) => {
        if (y === index) {
          return guess.split("");
        }
        return e;
      })
    );
  }, [guess]);
  useEffect(() => {
    didIWin();
  }, [result]);

  const cards = Array(6)
    .fill()
    .map((e, y) => {
      return Array(word.length)
        .fill()
        .map((e, i) => {
          return (
            <Card
              key={i + 5 * y}
              id={i}
              color={colors[y][i]}
              letter={result[y][i]}
            ></Card>
          );
        });
    });
  const handleInput = (e) => {
    setGuess(e.target.value);
  };
  const handleSend = (e) => {
    validate();
    setGuess("");
    setIndex(index + 1);
  };
  const didIWin = () => {
    let count = 0;
    colors.flat().forEach((e) => {
      if (e === "#6CA663") count++;
      else count = 0;
      if (count >= 5) {
        setTimeout(() => {
          alert("GANASTE!");
        }, 1500);
      }
    });
    if (index >= 6) {
      return setTimeout(() => {
        alert("Perdiste!");
      }, 1500);
    }
  };
  const validate = () => {
    setColors(
      colors.map((e, i) => {
        if (i === index) {
          return result[i].map((e, i) => {
            if (word[i] === e.toUpperCase()) {
              return "#6CA663"; // green
            } else if (word.includes(e.toUpperCase())) {
              return "rgb(201 180 88)"; // yellow
            } else {
              return "#787C7E"; // grey
            }
          });
        }
        return e;
      })
    );
  };

  return (
    <>
      <div className="board">{cards}</div>
      <input type="text" name="guess" value={guess} onChange={handleInput} />
      <button onClick={handleSend}>Enviar</button>
    </>
  );
}
