import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../MovieCard";
import NotFound from "./404NotFound";

const searchUrl = "https://api.themoviedb.org/3/search/movie";
const APIKey = "8e4eac282917b6616622bc74b63f3732";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([""]);

  const query = searchParams.get("q");

  const getSearchedMovie = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryUrl = `${searchUrl}?api_key=${APIKey}&query=${query}&language=pt-BR`;

    getSearchedMovie(searchWithQueryUrl);
  }, [query]);

  return (
    <>
      {movies.length > 0 && <h2>
        Resultados para <span>{query}</span>
      </h2>}
      <div className="movies-container">
        {movies.length > 0 ?
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />) : (<NotFound />)}
      </div>
    </>
  );
};

export default Search;
