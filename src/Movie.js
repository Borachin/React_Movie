import React , { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import {Link} from "react-router-dom";

// function Movie({ year,title,summary,poster,genres}) {
//     return (
//         <Link to={{
//             pathname:"/Detail",
//             state: {
//                 year,
//                 title,
//                 summary,
//                 poster,
//                 genres
//             }
//         }}>
//             <div className="movie">
//                 <img src={poster} alt={title} title={title} />
//                 <div className="movie__data">
//                     <h3 className="movie__title">{title}</h3>
//                     <h5 className="movie__year">{year}</h5>
//                     <ul className="genres">
//                         {genres.map((genres, index) => (
//                             <li key={index} className="genres__genre">{genres}</li>
//                         ))}    
//                     </ul>
//                     <p className="movie__summary">{summary.slice(0,140)}...</p>
//                 </div> 
//             </div>    
//         </Link>    
//     ); 
// }

// class Movie extends React.Component() {
//     // constructor(props) {
//     //     super(props);
//     //     // this.state.year = year;
//     //     // this.state.title = title;
//     //     // this.state.summary = summary;
//     //     // this.state.poster = poster;
//     //     // this.state.genres = genres;
//     // }

//     // eslint-disable-next-line
//     render() {

//         //console.log(this.props);
//         return (
        
            
//             <Link to={{
//                 pathname:"/Detail",
//                 state: {
//                     year,
//                     title,
//                     summary,
//                     poster,
//                     genres
//                 }
//             }}>
//                 <div className="movie">
//                     <img src={poster} alt={title} title={title} />
//                     <div className="movie__data">
//                         <h3 className="movie__title">{title}</h3>
//                         <h5 className="movie__year">{year}</h5>
//                         <ul className="genres">
//                             {genres.map((genres, index) => (
//                                 <li key={index} className="genres__genre">{genres}</li>
//                             ))}    
//                         </ul>
//                         <p className="movie__summary">{summary.slice(0,140)}...</p>
//                     </div> 
//                 </div>    
//             </Link>   
            
//         )
//     };
// }

// Movie.propTypes = {
//     id: PropTypes.number.isRequired,
//     year: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     summary:PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired,
//     genres: PropTypes.arrayOf(PropTypes.string).isRequired
// };

// export default Movie;

class Movie extends Component {  
    
    constructor(props) {
        super(props);
        console.log(props);
    }

    // class  형 컴포넌트, 함수형 컴포넌트  stete 설정 방법 찾아보기 !
    state= {
        year:this.props.year,
        title:this.props.title,
        summary:this.props.summary,
        poster:this.props.poster,
        genres:this.props.genres

    }



    render() {

        const {title, year, summary,poster, genres} = this.props;  // destructuring  할당 
        
        return (
            <Link to={{
                pathname:"/Detail",
                state: {
                    year:year,
                    title:title,
                    summary:summary,
                    poster:poster,
                    genres:genres
                }
            }}>
                <div className="movie">
                    <img src={poster} alt={title} title={title} />
                    <div className="movie__data">
                        <h3 className="movie__title">{title}</h3>
                        <h5 className="movie__year">{this.state.year}</h5>
                        <ul className="genres">
                            {genres.map((genres, index) => (
                                <li key={index} className="genres__genre">{genres}</li>
                            ))}    
                        </ul>
                        <p className="movie__summary">{summary.slice(0,140)}...</p>
                    </div> 
                </div>    
            </Link>   
        );
    }
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};


export default Movie;