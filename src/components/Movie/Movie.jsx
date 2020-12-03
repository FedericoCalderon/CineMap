import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../redux/actions/index';
import './Movie.css';

class Movie extends React.Component {
    componentDidMount() {
      const movieId = this.props.match.params.id.split(':')[1]; 
      this.props.getMovieDetail(movieId);
    }
    render(props) {
      return (
            <div className = "movieDivDetail">
                <div className = 'movieDivTitle'>
                  <p className = 'moviePTitle'>{this.props.movie.Title}</p>
                </div>
                <div className = 'div-Container-Detail'>
                  <div className = 'divImg'>
                    <img src = {this.props.movie.Poster} alt = ""/>
                  </div>
                  <div className = 'Container-description'>
                    <p className = 'pProps'>Type: {this.props.movie.Type}</p>
                    <p className = 'pProps'>Genre: {this.props.movie.Genre}</p>
                    <p className = 'pProps'>Writer: {this.props.movie.Writer}</p>
                    <p className = 'pProps'>Director: {this.props.movie.Director}</p>
                    <p className = 'pProps'>Actors: {this.props.movie.Actors}</p>
                    <p className = 'pProps'>Production: {this.props.movie.Production}</p>
                    <p className = 'pProps'>Awards: {this.props.movie.Awards}</p>
                    <p className = 'pProps'>Metascore: {this.props.movie.Metascore}</p>
                    <p className = 'pProps'>Votes: {this.props.movie.imdbVotes}</p>
                    <p className = 'pProps'>Language: {this.props.movie.Language}</p>
                  </div>

                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    movie: state.movieDetail
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: id => dispatch(getMovieDetail(id))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Movie);

