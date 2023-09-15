import PropTypes from "prop-types";
import { useState } from "react";

import { BsCalendarDate } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

import "./Movie.css";

const Movie = ({ film }) => {
  const [likeHeart, setLikeHeart] = useState(false);

  const clickLikeHandler = () => {
    setLikeHeart((prevLikeHeart) => !likeHeart);
  };
  return (
    <div className={`movie-container ${likeHeart ? "liked" : "un-liked"}`}>
      <h2>{film.Title}</h2>
      <div className="date">
        <BsCalendarDate color="white" size={25} />
        <p>{film.Year}</p>
      </div>

      <img src={film.Poster} alt={film.Title} />
      <button onClick={clickLikeHandler} className="like-heart">
        <AiOutlineHeart color={likeHeart ? "red" : "white"} size={27} />
      </button>
    </div>
  );
};

Movie.propTypes = {
  film: PropTypes.object.isRequired,
};

export default Movie;
