import React from "react";
import Card from "../Card/Card";
import "./HowTo.css";

export default function HowTo() {
  return (
    <div className="howTo-container">
      <h3>CÓMO JUGAR </h3>
      <p>Adivina la palabra oculta en seis intentos.</p>
      <p>Cada intento debe ser una palabra válida de 5 letras.</p>
      <p>
        Después de cada intento el color de las letras cambia para mostrar qué
        tan cerca estás de acertar la palabra.
      </p>
      <h4>Ejemplos</h4>
      <div className="example">
        <Card letter={"G"} color="#6CA663"></Card>
        <Card letter={"A"}></Card>
        <Card letter={"T"}></Card>
        <Card letter={"O"}></Card>
        <Card letter={"S"}></Card>
      </div>
      <p>
        La letra <strong>G</strong> está en la palabra y en la posición
        correcta.
      </p>
      <div className="example">
        <Card letter={"V"}></Card>
        <Card letter={"O"}></Card>
        <Card letter={"C"} color="rgb(201 180 88)"></Card>
        <Card letter={"A"}></Card>
        <Card letter={"L"}></Card>
      </div>
      <p>
        La letra <strong>C</strong> está en la palabra pero en la posición
        incorrecta.{" "}
      </p>
      <div className="example">
        <Card letter={"C"}></Card>
        <Card letter={"A"}></Card>
        <Card letter={"N"}></Card>
        <Card letter={"T"}></Card>
        <Card letter={"O"} color="#787C7E"></Card>
      </div>
      <p>
        La letra <strong>O</strong> no está en la palabra.{" "}
      </p>
      <p>
        Puede haber letras repetidas. Las pistas son independientes para cada
        letra.
      </p>
    </div>
  );
}
