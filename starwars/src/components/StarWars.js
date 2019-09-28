import React from "react";
import StarWarsCard from "./StarWarsCard.js";
import axios from "axios";

export default function StarWars() {
  const [people, setPeople] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const peopleList = await axios.get("https://swapi.co/api/people");
        console.log(peopleList);
      } catch (err) {
        console.log(err);
      }
    }
  });

  return (
    <div>
      <StarWarsCard />
    </div>
  );
}
