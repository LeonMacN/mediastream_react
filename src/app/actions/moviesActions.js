import axios from "axios";

export function getAllMovies() {
  return {
    type: "getAllMovies",
    payload: axios
    .get("https://api.themoviedb.org/3/movie/popular", {
      params: {
        page: 1,
        language: "en-US",
        api_key: "b8bfb063f5462c337986b4bdf16572bf"
      }
    })
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    })
  };
}

export function getMovieReviews(id) {
  return {
    type: "getMovieReviews",
    payload: axios
    .get("https://api.themoviedb.org/3/movie/" + id + "/reviews", {
      params: {
        page: 1,
        language: "en-US",
        api_key: "b8bfb063f5462c337986b4bdf16572bf"
      }
    })
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    })
  };
}
