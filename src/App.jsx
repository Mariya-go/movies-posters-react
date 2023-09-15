import { useState } from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Search from "./components/Search";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const getSearchQuery = (val) => {
    setValue(val);
  };

  return (
    <div className="main-container">
      <Header text="🎥 Movie posters" />
      <Search getSearchQuery={getSearchQuery} />
      <MovieList searchQuery={value} />
    </div>
  );
}

export default App;
