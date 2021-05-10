import React from "react"
import data from '../data/moviedata.json'


const MovieList = (props) => {
    const {setMovieTitle} = props
    return(
        <ul>
            {data.map(movie => <li onClick={()=>setMovieTitle({title:movie.title})}>{movie.title}</li>)}
        </ul>
    )
}
export default MovieList;
