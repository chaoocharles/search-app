import React from "react";

const CharacterProfile = ({ character }) => {
  return (
    <>
      <div className="profile">
        <div className="pic">
          <img src={character.image} alt="" />
        </div>
        <div className="profile-in">
          <h2 className="name">{character.name}</h2>
          <p className="status-species">
            <span
              className={
                "status " +
                (character.status === "Alive"
                  ? "alive"
                  : character.status === "Dead"
                  ? "dead"
                  : "unknown")
              }
            >
              {character.status}
            </span>{" "}
            - {character.species}
          </p>
          <p className="gender">
            <span className="desc">Gender: </span>
            {character.gender}
          </p>
          <p className="location">
            <span className="desc">Location: </span>
            {character.location.name}
          </p>
        </div>
      </div>
    </>
  );
};

export default CharacterProfile;
