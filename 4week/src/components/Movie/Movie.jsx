import { useState } from 'react';
import React from 'react';
import {
  MovieContainer,
  MovieImg,
  MovieInfo,
  Overview,
} from './Movie.style';
import PropTypes from 'prop-types';

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function Movie({ title, poster_path, vote_average, overview }) {
  const [hovered, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };


  return (
    <MovieContainer
      className={hovered ? 'hovered' : ''}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >

      <MovieImg src={IMG_BASE_URL + poster_path} alt="영화포스터" />
      <MovieInfo>
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </MovieInfo>
      <Overview>
        <h4>{title}</h4>
        <p>{overview}</p>
      </Overview>
    </MovieContainer>
  );
}
