import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

export default class Card extends Component {
    handleAdd(e,props){
        props.addMovieFavorite(
            {
                title: this.props.movie.Title,
                id: this.props.movie.imdbID,
                poster: this.props.movie.Poster
            })
        const btn = e.target;
        if (btn) {
            btn.id = 'addedToFav';
            btn.innerText = 'Added ✔';
        }
    }
    handleRemove(props){
        props.removeMovieFavorite({
            title: this.props.favoriteMovie.title,
            id: this.props.favoriteMovie.imdbID
        })
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
                            <Link to={`/movie/:${this.props.favoriteMovie.id}`}><h3>{this.props.favoriteMovie.title}</h3></Link>
                        </div>
                        {
                            this.props.favoriteMovie.poster !== "N/A" ? 
                            <div className='imgSearch' >
                                <Link to={`/movie/:${this.props.favoriteMovie.id}`}>
                                    <img src={this.props.favoriteMovie.poster}></img>
                                </Link>
                            </div>
                            :
                            <div className='imgSearch'>
                                <Link to={`/movie/:${this.props.favoriteMovie.id}`}>
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