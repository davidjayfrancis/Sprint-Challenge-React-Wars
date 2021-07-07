import React from "react";
import "./StarWars.css";
import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  margin: 10px;
  background: rgba(100, 40, 50, 0.7);
  color: rgb(240, 220, 240);
  border-radius: 10px;
`;

export default function StarWarsCard(props) {
  return (
    <Card>
      <h1>Name: {props.name}</h1>
      <p>Homeworld: {props.homePlanet}</p>
    </Card>
  );
}
