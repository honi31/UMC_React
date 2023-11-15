import React from 'react'
import { movies } from '../movieDummy';
import Movie from '../components/Movie';

export default function Movies() {
  return (
    <div>
      <div className="bg-blue-500 flex flex-wrap justify-center">
        {movies.results.map((item) => (
          <Movie
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
            title_overview={item.title}
            overview={item.overview}
          />
        ))}
      </div>
    </div>
  );
}
