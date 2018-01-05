import React from "react";
import { connect } from "react-redux";

import { getMovieReviews, getAllMovies } from "../actions/moviesActions";
import { MovieCard } from "../components/MovieCard";

class Movies extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllMovies();
  }

  render() {
    if (this.props.data.movies.results) {
      return (
        <div className="row">
          {this.props.data.movies.results.map((movie, index) => <MovieCard key={index} movie={movie} />)}
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    data: state.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovieReviews: id => {
      dispatch(getMovieReviews(id));
    },
    getAllMovies: () => {
      dispatch(getAllMovies());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
