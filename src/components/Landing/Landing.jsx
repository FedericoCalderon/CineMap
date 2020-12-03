import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMovies } from '../../redux/actions/index';
import './Landing.css';

export class Landing extends Component {
    constructor (props){
        super(props)
        this.movies = ['home', 'dogs', 'terminator', '300', 'age', 'war', 'bad', 'man'];
        this.random = Math.floor(Math.random()*this.movies.length);
    }
    componentDidMount() {
            this.props.getMovies(this.movies[this.random])
    }
    render(props){
        console.log('render ',this.props.moviesLoaded)
        return (
            <div className='landingContainer'>
                {
                    <div className='mapImgs'>
                        {
                            this.props.moviesLoaded && this.props.moviesLoaded.map((movie, index) =>{
                            if(index < 3)
                                return <Link to={`/movie/:${movie.imdbID}`} ><img className='landingImg' src={movie.Poster !== 'N/A' && movie.Poster} alt="No Image"/></Link>
                                // return <img className='landingImg' src={movie.Poster !== 'N/A' && movie.Poster} alt="Nada"/>
                            })
                        }
                    </div>
                }
                <div className='containerLandingDivContainerP'>
                    <div className='landingDivContainerP'>
                        <p className='landingP'>
                            All the information totally free, 
                            go to catalogue and look for the movies that you like the most and add them to favorites, 
                            I hope you enjoy it!
                        </p>
                    </div>
                </div>
                {
                    <div className='mapImgs'>
                        {
                            this.props.moviesLoaded && this.props.moviesLoaded.map((movie, index) =>{
                                if(index >= 3 && index < 6)
                                    return <Link to={`/movie/:${movie.imdbID}`} ><img className='landingImg' src={movie.Poster !== 'N/A' && movie.Poster} alt="No Image"/></Link>
                                    // return <img className='landingImg' src={movie.Poster} alt="Nada"/>
                            })
                        }
                    </div>
                }
            </div>
        )
    }    
}
function mapStateToProps(state) {
    return {
      moviesLoaded: state.moviesLoaded
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      getMovies: title => dispatch(getMovies(title))
    };
  }
export default connect(mapStateToProps,mapDispatchToProps)(Landing);