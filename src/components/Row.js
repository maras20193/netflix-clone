import React, {useState, useEffect} from 'react'
import axios from '../axios';

import './Row.css'

const Row = ({ title, fetchUrl, isLargeRow = false}) => {

  const baseUrl = 'https://image.tmdb.org/t/p/original/';

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData()

    console.log(movies)
  },[fetchUrl])

  console.log(movies)

  const moviesImg = movies.map(movie => {
    return (
      ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && 
    (<img 
      className={`row__poster ${isLargeRow && 'row__poster-large'}`}
      key={movie.id}
      src={`${baseUrl}${
        isLargeRow 
        ? movie?.poster_path 
        : movie?.backdrop_path}`} 
      alt={movie.name}/>)
    )
  })

  return (
  <div className='row'>
    <h2 className='row__title'>{title}</h2>
    <div className="row__posters">
    {moviesImg}
    </div>

  </div>
  );
}
export default Row;