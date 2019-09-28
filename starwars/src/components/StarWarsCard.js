import React from "react";

export default function StarWarsCard(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <p>Homeworld: {props.homeworld}</p>
    </div>
  );
}
