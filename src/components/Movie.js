import PropTypes from "prop-types";

const Movie = ({ id, medium_cover_image, title, summary, genres }) => {
  return (
    <div key={id}>
      <img src={medium_cover_image} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      {<ul>{genres && genres.map((genre) => <li key={genre}>{genre}</li>)}</ul>}
    </div>
  );
};

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
