import MovieList from "./components/MovieList";
import React, { useState, useEffect } from "react";
import MovieTitleContext from "./MovieTitleContext";
import './App.css';
import Movie from "./components/Movie";

function App() {
  const [ movieTitle, setMovieTitle ] = useState({})

  useEffect( () =>{

  },[])

  return (
    <div className="App">
      <MovieTitleContext.Provider value={movieTitle}>
        <div className="row">
          <div className="col-6"><MovieList setMovieTitle={setMovieTitle} /></div>
          <div className="col-6"><Movie /></div>
        </div>
      </MovieTitleContext.Provider>
    </div>
  )
}

export default App;
