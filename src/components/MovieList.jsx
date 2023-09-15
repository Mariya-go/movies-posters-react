import PropTypes from "prop-types";

import "./MovieList.css";

import films from "../film.json";

import Movie from "./Movie";

const MovieList = ({ searchQuery }) => {
  const filteredFilms = (movies, inputValue) => {
    if (!inputValue) {
      return movies;
    } else {
      return movies.filter((film) =>
        film.Title.toLowerCase().includes(inputValue)
      );
    }
  };

  const myMovies = filteredFilms(films, searchQuery);

  return (
    <div className="movie-list">
      {myMovies.map((film, index) => (
        <Movie key={index} film={film} />
      ))}
    </div>
  );
};

MovieList.propTypes = {
  searchQuery: PropTypes.string,
};

export default MovieList;
