import React, { Component } from 'react';
import PropTypes from 'prop-types'; //yarn add prop-types
import LinesEllipsis from 'react-lines-ellipsis'; //yarn add react-lines-ellipsis
import './Movie.css';

class Movie extends Component{

    static propTypes = {
        title: PropTypes.string,//number
        poster: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        synopsis: PropTypes.string.isRequired
    }
    render(){
        //console.log(this.props);
        return (
            <div className="Movie">
                <div className="Movie__Column">
                    <MoviePoster poster={this.props.poster} alt={this.props.title}/>
                </div>
                <div className="Movie__Column">
                    <h1>{this.props.title}</h1>
                    <div className="Movie__Genres">
                        {this.props.genres.map((genre, index) => 
                            <MovieGenre genre={genre} key={index}/>)}
                    </div>
                    <div className="Movie__Synopsis">
                        <LinesEllipsis
                            text={this.props.synopsis}
                            maxLine='3'
                            ellipsis=' ...'
                            trimRight
                            basedOn='letters'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

// class MoviePoster extends Component{

//     static propTypes = {
//         poster: PropTypes.string.isRequired
//     }
//     render(){
//         //console.log(this.props);
//         return(
//             <img src={this.props.poster} alt="poster"/>
//         );
//     }
// }
function MoviePoster({poster, alt}){
    /*
        functional component
        : 단순히 html만 리턴하는 기능만 필요할때(리턴만 있음)
        : state 없고, function render 없고, 라이프사이클도 없음
    */
    return(
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    );
}
function MovieGenre({genre}){
    return (
        <span className="Movie__Genre">{genre} </span>
    )
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}
MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;