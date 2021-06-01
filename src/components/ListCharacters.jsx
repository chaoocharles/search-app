import React from "react";
import CharacterProfile from "./CharacterProfile";

const ListCharacters = ({ characters }) => {
  return (
    <div>
      <h2 className="title">Rick and Morty Characters - {characters.length}</h2>
      <div>
        {characters &&
          characters.map((character) => {
            return (
              <div key={character.id}>
                <CharacterProfile character={character} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListCharacters;
