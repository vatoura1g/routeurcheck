import React from 'react';
import MovieCard from '../movieCard/MovieCard';


const MovieList = ({movieData,handleDelete}) => {
  return (
    <div>
      {movieData.map((elt) =>{ return <MovieCard key={elt.id} Movie={elt} handleDelete={handleDelete}/> })}
    </div>
  )
}

export default MovieList