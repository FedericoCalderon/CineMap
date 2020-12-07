import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite, removeAllFavorites } from "../../redux/actions/index";
import Card from '../Card/Card.jsx'
import './Favorites.css';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

export class ConnectedList extends Component {
  handleRemoveAll(e, props) {
    props.removeAll();
    swal('All movies was removed!!', 'the movies are in catalogue tab');
    return
  }
  render(props) {
    return (
      <div className='divFavorites'>
        <div className='containerFavDiv'>
          <h1 className='h1Favorites'>Favorites</h1>
          <button
            className='btnRemove'
            type='button'
            onClick={(e) => this.handleRemoveAll(e, this.props)}
            >
              Remove All
            </button>
        </div>
        <div className='containerCards'>
          {
            this.props.movies.length ? this.props.movies.map((favoriteMovie, index) => {
              return (
                <Card
                  key={index}
                  type='Favorites'
                  favoriteMovie={favoriteMovie}
                  removeMovieFavorite={this.props.removeMovieFavorite}
                />
              )
            }) : <div className='divNoFavMovies'>
               <p className='pNoMovies'>You have not favorites movies :/ </p>
               <Link to='/Catalogue' ><p className='pSelectMovie'>** Click here to select movies **</p></Link>
            </div>
          }
        </div>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    movies: state.movies,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie)),
    removeAll: () => dispatch(removeAllFavorites()),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ConnectedList);
