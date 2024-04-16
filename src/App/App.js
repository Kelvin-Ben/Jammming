import React from "react";

import "./App.css";
import SearchBar from "../components/searchbar/SearchBar";
import SearchResults from "../components/searchResults/SearchResults";
import Playlist from "../components/playlist/Playlist";

const App = () => {
  return (
    <div className="container">
      <header>
        <h3 id="title">jammming</h3>
      </header>
      <SearchBar />
      <main className="main">
        <SearchResults />
        <Playlist />
      </main>
    </div>
  );
};

export default App;
