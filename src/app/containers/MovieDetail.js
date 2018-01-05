import React from "react";
import { connect } from "react-redux";

import { getMovieReviews } from "../actions/moviesActions";
import { Review } from "../components/Review";

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getMovieReviews(this.props.id);
  }

  render() {
    if (this.props.data.results && this.props.data.results.length > 0) {
      return (
        <div className="row"  style={{ marginTop: 20 + "px" }}>
          <div className="col-sm-12 col-md-11">
            <div className="list-group">
              {this.props.data.results.map((review, index) => (
                <Review key={index} review={review} />
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return <h4>No review available</h4>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.params.id,
    data: state.movies.reviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovieReviews: id => {
      dispatch(getMovieReviews(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
