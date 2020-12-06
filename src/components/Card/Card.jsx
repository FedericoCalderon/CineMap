import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
import './Card.css'

export default class Card extends Component {
    handleAdd(e,props){
        props.addMovieFavorite(
            {
                Title: props.movie.Title,
                imdbID: props.movie.imdbID,
                Poster: props.movie.Poster
            })
        swal("Movie added to favorites !!", `"${props.movie.Title}" has been added to the favorites tab!!`);
    }
    handleRemove(props){
        props.removeMovieFavorite({
            Title: props.favoriteMovie.Title,
            imdbID: props.favoriteMovie.imdbID,
            Poster: props.favoriteMovie.Poster
        })
        swal("Movie removed from favorites !!", `"${props.favoriteMovie.Title}" has been added to the catalog tab`);
    }
    render (props) {
        if(this.props.type === 'browser'){
            return (
                <div>
                    <div className='movieCard' key={this.props.index}>
                            <div className='divTitle'>
                            <Link to={`/movie/:${this.props.movie.imdbID}`}>
                                <h3>{this.props.movie.Title}</h3>
                            </Link>
                            </div>
                            {
                                this.props.movie.Poster !== "N/A" ? 
                                <div className='imgSearch' >
                                    <Link to={`/movie/:${this.props.movie.imdbID}`}>
                                        <img src={this.props.movie.Poster}></img>
                                    </Link>
                                </div>
                                :
                                <div className='imgSearch'>
                                    <Link to={`/movie/:${this.props.movie.imdbID}`}>
                                        <img src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" alt=""/>
                                    </Link>
                                </div>
                            }
                            <div className='divButton'>
                                <button
                                    id={this.props.movie.imdbID}
                                    className='btn'
                                    type='button'
                                    onClick={(e) => this.handleAdd(e, this.props)}
                                >
                                    Add to favorites
                                </button>
                            </div>
                        </div>
                </div>
                )
        } 
        if (this.props.type ==='Favorites') {
            return (
                <div>
                    <div className='movieCard' key={this.props.index}>
                        <div className='divTitle'>
                            <Link to={`/movie/:${this.props.favoriteMovie.imdbID}`}><h3>{this.props.favoriteMovie.Title}</h3></Link>
                        </div>
                        {
                            this.props.favoriteMovie.Poster !== "N/A" ? 
                            <div className='imgSearch' >
                                <Link to={`/movie/:${this.props.favoriteMovie.imdbID}`}>
                                    <img src={this.props.favoriteMovie.Poster}></img>
                                </Link>
                            </div>
                            :
                            <div className='imgSearch'>
                                <Link to={`/movie/:${this.props.favoriteMovie.imdbID}`}>
                                    <img src="https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" alt=""/>
                                </Link>
                            </div>
                        }
                        <div className='divButton'>
                            <button
                                className='btnRemove'
                                type='button'
                                onClick={() => this.handleRemove(this.props)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}