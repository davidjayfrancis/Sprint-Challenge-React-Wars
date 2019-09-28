import React from "react";
import "./StarWars.css";

export default function StarWarsCard(props) {
  return (
    <div className="card">
      <h1>Name: {props.name}</h1>
      <p>Homeworld: {props.homeworld}</p>
    </div>
  );
}
