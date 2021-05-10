import React,{useContext, useEffect,useState} from "react";
import MovieTitleContext from "../MovieTitleContext"; 
import axios from 'axios';

const Movie = props => {
    const[ movieData, setMoiveData ] = useState()
    const { title } = useContext(MovieTitleContext);

    useEffect( () => {
        if(title) { 
            axios.get(`http://www.omdbapi.com/?t=${title}&apikey=2eaf1289`)
            .then(res =>{
                console.log(res.data)
                setMoiveData(res.data)
            })
        }
    },[title])


    return(
        <>
            { movieData ?
                <div className ="movie-display">
                    Title:{movieData.Title}
                    Genre:{movieData.Genre}
                    Ratings:{movieData.Ratings[0].Value}
                </div> :
                <div> No data to show </div>
            }
        </>
    )
}

export default Movie;