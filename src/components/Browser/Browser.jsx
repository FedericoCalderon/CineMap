import React, { Component } from "react";
import { connect } from "react-redux";
import './Browser.css';
import {addMovieFavorite, getMovies} from '../../redux/actions/index';
import Card from '../Card/Card.jsx'

export class Browser extends Component {
  constructor(props) {
    super(props);
    this.movies = ['home', 'dogs', 'battle', '300', 'ice age', 'avengers', 'war', 'bad', 'man'];
    this.random = Math.floor(Math.random()*this.movies.length);
    this.state = {
      title: ""
    };
  }
  componentDidMount() {
    this.props.getMovies(this.movies[this.random])
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleRandom(){
    const cont = document.getElementById('divContainerCards').innerHTML;    
    if (cont === '') {
      this.props.getMovies(this.movies[this.random])
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    if(!this.state.title) alert('Plese search a movie')
    else this.props.getMovies(this.state.title);
    this.handleRandom()
  }
  render() {
    
    const { title } = this.state;
    return (
      <div>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <input
            className='inpSearch'
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
              placeholder='Search a movie'
            />
          </div>
          <button type="submit" className='btn'>SEARCH</button>
        </form>
        <div id='divContainerCards' className='containerCards'>
         {
            this.props.moviesLoaded ? this.props.moviesLoaded.map( (movie,index) => {
              return <Card
              type='browser'
              addMovieFavorite={this.props.addMovieFavorite}
              getMovies={this.props.getMovies}
              movie={movie}
              index={index}
              key={index}
              />
            })
            : <h4 className='noRes'>No search results found</h4>
         }
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    moviesLoaded: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Browser);
