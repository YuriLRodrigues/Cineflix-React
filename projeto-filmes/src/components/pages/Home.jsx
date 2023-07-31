import { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
const moviesUrl = "https://api.themoviedb.org/3/movie/";
const APIKey = "8e4eac282917b6616622bc74b63f3732";
import "../../style/pages/cards.sass";

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const getTopRatedMovies = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    setTopMovies(data.results);
  };
  useEffect(() => {
    const topRatedMovies = `${moviesUrl}top_rated?api_key=${APIKey}&language=pt-BR`;
    getTopRatedMovies(topRatedMovies);
  }, []);
  return (
    <section className="movies-container">
      {topMovies.length > 0 &&
        topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </section>
  );
};

export default Home;
