import React from "react";

const Search = ({ keyword, setKeyword, filterPosts }) => {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setKeyword(keyword);
    filterPosts();
  };
  return (
    <div className="search">
      <h3>Search</h3>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="search"
          id="search-box"
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
