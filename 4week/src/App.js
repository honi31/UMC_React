import Movie from './components/Movie/Movie';
import { movies } from './movieDummy';
import { Body, AppContainer } from './components/Movie/Movie.style';
import React from 'react';


function App() {
  return (
    <Body>
      <AppContainer>
        {
          movies.results.map((item, index) => {
            return (
              <Movie
                key={index}
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                title_overview={item.title}
                overview={item.overview}
              />
            )
          })
        }
      </AppContainer>
    </Body>
  );
}

export default App;


