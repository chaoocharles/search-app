import React, { useState, useEffect } from "react";
import ListCharacters from "./components/ListCharacters";
import Search from "./components/Search";

import "./App.css";

const App = () => {
  const [keyword, setKeyword] = useState("");
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, [keyword]);

  console.log(characters);
  const filterCharacters = () => {
    const filteredCharacters = characters.filter((character) => {
      if (keyword === "") {
        return character;
      }

      const newCharacter = character.name
        .toLowerCase()
        .includes(keyword.toLowerCase());

      return newCharacter;
    });

    setCharacters(filteredCharacters);
  };

  return (
    <div className="App">
      <Search
        keyword={keyword}
        setKeyword={setKeyword}
        filterCharacters={filterCharacters}
      />
      <ListCharacters characters={characters} />
    </div>
  );
};

export default App;
