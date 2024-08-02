import PropTypes from "prop-types";

const MovieDetail = ({ coverImg, title, rating, runtime, year }) => {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h1>{title}</h1>
      <span>{year}</span>
      <div>rating: {rating}</div>
      <div>runtime: {runtime}</div>
    </div>
  );
};

MovieDetail.protoTypes = {
  coverImg: PropTypes.string,
  title: PropTypes.string,
};

export default MovieDetail;
