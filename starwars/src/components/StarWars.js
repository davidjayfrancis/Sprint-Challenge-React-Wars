import React from "react";
import StarWarsCard from "./StarWarsCard.js";
import axios from "axios";
import "./StarWars.css";

export default function StarWars() {
  const [people, setPeople] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const peopleList = await axios.get("https://swapi.co/api/people");
        // .data = obj; .results=array;
        console.log(peopleList.data.results);
        setPeople(peopleList.data.results);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="card-container">
      {people.map(person => {
        return <StarWarsCard name={person.name} homeworld={person.homeworld} />;
      })}
    </div>
  );
}
