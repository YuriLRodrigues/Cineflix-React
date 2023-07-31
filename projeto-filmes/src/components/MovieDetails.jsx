import { PropTypes } from "prop-types";
const imageUrl = "https://image.tmdb.org/t/p/w500/";
import "../style/pages/movieDetails.sass";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillStarFill,
  BsFillPeopleFill,
} from "react-icons/bs";

import { MdOutlineRocketLaunch, MdOutlineDescription } from "react-icons/md";

const MovieDetails = ({ movie }) => {
  console.log(movie)
  return (
    <section className="movie-details">
      <h1>{movie.title}</h1>
      <img src={imageUrl + movie.backdrop_path} alt={movie.title + "Img"} />
      <h5>{movie.tagline}</h5>
      <h4><MdOutlineRocketLaunch /> Lançamento</h4>
      <p>
        {movie.release_date.split("-").reverse().join("/")}
      </p>
      <h4><BsHourglassSplit /> Duração</h4>
      <p>
        {(+movie.runtime / 60).toFixed(2)} horas
      </p>
      <h4><BsFillPeopleFill /> Popularidade</h4>
      <p>
        {movie.popularity}
      </p>
      <h4><BsFillStarFill /> Avaliação</h4>
      <p>
        {movie.vote_average.toFixed(2)}
      </p>
      <h4><BsWallet2 /> Orçamento</h4>
      <p>
        {movie.budget.toLocaleString("pt-br", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <h4><BsGraphUp /> Receita</h4>
      <p>
        {movie.revenue.toLocaleString("pt-br", {
          style: "currency",
          currency: "USD",
        })}
      </p>
      <hr />
      <h4><MdOutlineDescription /> Descrição</h4>
      <p>
        {movie.overview}
      </p>
    </section>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.object,
};

export default MovieDetails;
