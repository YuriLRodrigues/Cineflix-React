import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const imageUrl = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <article className="movie-card">
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h4>{movie.title}</h4>
      <p>
        <FaStar className="stars" /> {(+movie.vote_average).toFixed(1)}
      </p>
      {showLink && (
        <Link className="viewMovie" to={`/movie/${movie.id}`}>
          Detalhes
        </Link>
      )}
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
  showLink: PropTypes.bool,
};

export default MovieCard;
