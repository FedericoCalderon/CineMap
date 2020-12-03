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
      state.movies = state.movies.filter(movie => movie.id !== action.payload.id)
      return { ...state, movies: state.movies.concat(action.payload) };
    case REMOVE_MOVIE_FAVORITES:
        return {
          ...state,
          movies: state.movies.filter(movie => movie.title !== action.payload.title)
        };
    case REMOVE_ALL_FAVORITES:
        return {
          ...state,
          movies: [],
        };
    default:
        return state;
  }
}
  export default rootReducer;

