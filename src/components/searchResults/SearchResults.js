import React from "react";

import "./SearchResults.css";

const SearchResults = () => {
  return (
    <div className="results-container">
      <h3 className="results-heading">results</h3>
      <ul className="results-list">
        <li className="track">
          <p className="track-name">One</p>
          <p className="track-details">Derulo | Pop music</p>
          <a href="#" role="button" className="btn-add">
            <svg
              enable-background="new 0 0 50 50"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 50 50"
              className="add-icon"
            >
              <line
                fill="none"
                stroke="#000000"
                stroke-miterlimit="10"
                stroke-width="4"
                x1="9"
                x2="41"
                y1="25"
                y2="25"
              />
              <line
                fill="none"
                stroke="#000000"
                stroke-miterlimit="10"
                stroke-width="4"
                x1="25"
                x2="25"
                y1="9"
                y2="41"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SearchResults;
