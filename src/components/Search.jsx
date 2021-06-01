import React from "react";

const Search = ({ keyword, setKeyword, filterCharacters }) => {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setKeyword(keyword);
    filterCharacters();
  };
  return (
    <div className="search">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="search"
          id="search-box"
          placeholder="search characters by name"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">Search</button>
        <button
          className="clear-search"
          onClick={() => {
            setKeyword("");
          }}
        >
          <span>Clear</span>
        </button>
      </form>
    </div>
  );
};

export default Search;
