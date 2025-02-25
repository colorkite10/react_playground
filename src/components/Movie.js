import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ id, coverImg, title, summary, genres }) => {
  return (
    <div key={id}>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      {<ul>{genres && genres.map((genre) => <li key={genre}>{genre}</li>)}</ul>}
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
