const movieReducer = (state = {
    movies: [],
    reviews: [],
    favorites: []
}, action) => {
    switch (action.type) {
        case "getAllMovies_FULFILLED":
            state = {
                ...state,
            };
            state.movies = action.payload;
            break;
        case "getMovieReviews_FULFILLED":
            state = {
                ...state,
            };
            state.reviews = action.payload
            break;
        case "addToFavorites":
            state = {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
            break;
    }
    return state;
};

export default movieReducer;