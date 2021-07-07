import React from "react";
import StarWarsCard from "./StarWarsCard.js";
import axios from "axios";
import "./StarWars.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 960px;
  max-width: 1200px;
  justify-content: center;
  margin: 0 auto;
`;

export default function StarWars() {
  const [people, setPeople] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const peopleList = await axios.get("https://swapi.co/api/people");
        console.log(peopleList);
        const promises = peopleList.data.results.map(async person => {
          try {
            const planet = await axios.get(person.homeworld);
            return planet;
          } catch (err) {
            console.log(`error getting planet for ${person.name} : ${err}`);
          }
        });

        const planets = await Promise.all(promises);
        planets.map((planet, idx) => {
          peopleList.data.results[idx].homePlanet = planet
            ? planet.data
            : { name: "error retrieving." };
        });

        setPeople(peopleList.data.results);
      } catch (err) {
        console.log(`error getting list of people: ${err}`);
        throw err;
      } // try..catch
    } // function fetchData()

    fetchData();
  }, []); // useEffect()

  return (
    <Container>
      {people.map((person, index) => {
        return (
          <StarWarsCard
            name={person.name}
            homePlanet={person.homePlanet.name}
          />
        );
      })}
    </Container>
  );
}

/* .card-container {
  display: flex;
  flex-wrap: wrap;
  min-width: 960px;
  max-width: 1200px;
  justify-content: center;
  margin: 0 auto;
}

.card {
  width: 300px;
  margin: 10px;
  background: rgba(100, 40, 50, 0.7);
  color: rgb(240, 220, 240);
  border-radius: 10px;
} */
