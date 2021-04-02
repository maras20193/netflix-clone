import React, {useState, useEffect} from 'react'
import './Banner.css'
import axios from '../axios'
import requests from '../requests'

function Banner() {

  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]);
      return request;
    }
    fetchData()
  }, [])

  console.log(movie)

  const truncate = (string, n) => {
    return string?.length > n ? string.substring(0,n-1) +' ...' : string;
  }

  return (
    <header className='banner' 
    style={{
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,}}>

        <div className="banner__content">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}</h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My Last</button>
          </div>
          <h1 className="banner_description">{truncate(movie?.overview, 200)}</h1>
        </div>
        <div className="banner--fadeBottom"></div>
    </header>
  )
}

export default Banner

