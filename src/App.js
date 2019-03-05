import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
/*
import matrix from './img/matrix.jpg';
import fullmetaljacket from './img/fullmetaljacket.jpg';
import oldboy from './img/oldboy.jpg';
import starwars from './img/starwars.jpg';
 --> function importAll로 해결
*/

function importAll(r){
  let images = {};
  r.keys().map((item, index) => { 
    return images[item.replace('./', '')] = r(item);
  });
  return images;
}
const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

class App extends Component {

  state = {
    // greeting: 'Hello!',
  }
    /*
    [ Component Lifecycle ]
    Render : componentWillMount() -> render() -> componentDidMount()
    Update : componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> component
  */
  // componentWillMount(){
  //   console.log('will mount');
  // }
  // componentDidMount(){
  //   console.log('did mount');
  //   // setTimeout(() => {
  //   //   // this.state.greeting = 'something';  // Do not mutate state directly
  //   //   this.setState({
  //   //     greeting: 'Hello again!'
  //   //   });
  //   // }, 2000);
  //   setTimeout(() => {
  //     this.setState({
  //       movies: [
  //         {
  //           title: "Matrix",
  //           poster: images['matrix.jpg']
  //         },
  //         {
  //           title: "Full Metal Jacket",
  //           poster: images['fullmetaljacket.jpg']
  //         },
  //         {
  //           title: "Oldboy",
  //           poster: images['oldboy.jpg']
  //         },
  //         {
  //           title: "Star Wars",
  //           poster: images['starwars.jpg']
  //         },
  //         {
  //           title: 'Frozen',
  //           poster: images['frozen.jpg']
  //         }
  //       ]
  //     });
  //   }, 2000);
  // }
  componentDidMount(){
    // [ fetch() : React에서 쓰는 ajax]
    // [ promise : javascript에서 비동기프로그래밍 시나리오 관리하게 해주는거(catch와 then으로) ]
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      //console.log(movie)
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
      />
    });
    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies) //화살표 함수는 return을 자동으로 해준다
    .catch(err => console.error(err));
  }

  render() {
    console.log('render');
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {/* {this.state.greeting} */}
        {/* {this.state.movies.map((movie, index) => {
          return <Movie key={index} title={movie.title} poster={movie.poster}/>
        })} */}
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
