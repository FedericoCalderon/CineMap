import {
  GET_MOVIES, 
  ADD_MOVIE_FAVORITE, 
  REMOVE_MOVIE_FAVORITES, 
  GET_MOVIE_DETAIL,
  REMOVE_ALL_FAVORITES
} from "../actions/index";


const initialState = {
    movies: [],
    moviesLoaded: [],
    movieDetail: {}
  };

  function rootReducer(state = initialState, action) {
    switch(action.type) {
    case GET_MOVIES:
      return {
        ...state,
        moviesLoaded: action.payload.Search
      };
    case GET_MOVIE_DETAIL:
        return {
          ...state,
          movieDetail: action.payload
        };
    case ADD_MOVIE_FAVORITE:
      state.movies = state.movies.filter(movie => movie.imdbID !== action.payload.imdbID)
      return {
        ...state,
        movies: state.movies.concat(action.payload),
        moviesLoaded: state.moviesLoaded.filter(movie => movie.imdbID !== action.payload.imdbID)
      };
    case REMOVE_MOVIE_FAVORITES:
      state.moviesLoaded = state.moviesLoaded.filter(movie => movie.imdbID !== action.payload.imdbID)
        return {
          ...state,
          movies: state.movies.filter(movie => movie.imdbID !== action.payload.imdbID),
          moviesLoaded: state.moviesLoaded.concat(action.payload),
        };
    case REMOVE_ALL_FAVORITES:
      state.movies.map(movie => state.moviesLoaded.push(movie))
        return {
          ...state,
          movies: [],
        };
    default:
        return state;
  }
}
  export default rootReducer;

