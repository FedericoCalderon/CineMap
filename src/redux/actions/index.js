export const GET_MOVIES = "GET_MOVIES";
export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const REMOVE_MOVIE_FAVORITES = "REMOVE_MOVIE_FAVORITES";
export const REMOVE_ALL_FAVORITES = "REMOVE_ALL_FAVORITES";


export function getMovies(title) {
    return function(dispatch) {
        return fetch(`https://www.omdbapi.com/?apikey=20dac387&s=${title}`)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: GET_MOVIES, payload: json });
        });
    };
}

export function getMovieDetail(id){
    return function (dispatch) {
        return fetch(`https://www.omdbapi.com/?apikey=20dac387&i=${id}`)
        .then(data => data.json())
        .then(movie => {
            dispatch({ type: GET_MOVIE_DETAIL, payload:movie })
        })
    }
}    

export function addMovieFavorite(payload) {
    return { type: ADD_MOVIE_FAVORITE, payload };
}
export function removeMovieFavorite(payload){
    return { type: REMOVE_MOVIE_FAVORITES, payload }
}
export function removeAllFavorites(){
    return { type: REMOVE_ALL_FAVORITES }
}



