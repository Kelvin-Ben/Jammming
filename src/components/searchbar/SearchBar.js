import React from "react";

import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="form-container">
      <form className="form">
        <input
          type="text"
          className="form-input"
          placeholder="Search for songs"
        />
        <button type="submit" className="btn btn-search">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
