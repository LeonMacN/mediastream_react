import React from "react";
import { connect } from "react-redux";

import { addToFavorites, getAllMovies } from "../actions/moviesActions";
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
          {this.props.data.movies.results.map((movie, index) => (
            <MovieCard
              key={index}
              movie={movie}
              addToFavorites={this.props.addToFavorites}
              favorites={this.props.data.favorites}
            />
          ))}
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    data: state.movies,
    favorites: state.favorites
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToFavorites: id => {
      dispatch(addToFavorites(id));
    },
    getAllMovies: () => {
      dispatch(getAllMovies());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
