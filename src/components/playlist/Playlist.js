import React from "react";

import "./Playlist.css";

const Playlist = () => {
  return (
    <div className="playlist">
      <input
        type="text"
        className="playlist-name"
        placeholder="How do want to save playlist?"
      />
      <ul className="selected-playlist">
        <li className="track">
          one
          <a href="#" role="button" className="btn-sub">
            <svg
              viewBox="0 0 24 24"
              className="sub-icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M5 11h14v2H5z" />
              </g>
            </svg>
          </a>
        </li>
      </ul>
      <button type="submit" className="btn btn-save">
        save to spotify
      </button>
    </div>
  );
};

export default Playlist;
