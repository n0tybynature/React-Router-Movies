import React from 'react';
import {useRouteMatch, Link, useHistory} from "react-router-dom";




export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;



  const {movieList} = props;
  
  
  const history = useHistory();


  const routeToMovie = () => {
    history.push(`/movies/${props.movie.id}`)
  }





  return (
    <div onClick={routeToMovie} className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
