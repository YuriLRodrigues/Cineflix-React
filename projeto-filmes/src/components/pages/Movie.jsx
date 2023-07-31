import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import MovieCard from "../MovieCard";
import MovieDetails from "../MovieDetails";
const moviesUrl = "https://api.themoviedb.org/3/movie/";
const APIKey = "8e4eac282917b6616622bc74b63f3732";

const Movies = () => {
  const { movieId } = useParams();
  console.log(movieId)
  const [movie, setMovie] = useState(null);
  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovie(data);
  };

  useEffect(() => {
    const movieUrl = `${moviesUrl}${movieId}$?api_key=${APIKey}&language=pt-BR`;
    getMovie(movieUrl);
  }, [movieId]);
  return (
    <div className="movie-container">
      {movie ? <MovieDetails movie={movie} /> : <h2>Filme não encontrado</h2>}
    </div>
  );
};

export default Movies;
