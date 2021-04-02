import React from 'react'
import './Banner.css'

function Banner() {

  const truncate = (string, n) => {
    return string.length > n ? string.substring(0,n-1) +' ...' : string;
  }
  return (
    <header className='banner' 
    style={{
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")',}}>

        <div className="banner__content">
          <h1 className="banner__title">Movie Name</h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My Last</button>
          </div>
          <h1 className="banner_description">{truncate('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime perspiciatis velit adipisci pariatur voluptatibus quas tempore tempora impedit, obcaecati itaque nisi quasi atque repellat ullam debitis facere, reprehenderit commodi beatae!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime perspiciatis velit adipisci pariatur voluptatibus quas tempore tempora impedit, obcaecati itaque nisi quasi atque repellat ullam debitis facere, reprehenderit commodi beatae!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime perspiciatis velit adipisci pariatur voluptatibus quas tempore tempora impedit, obcaecati itaque nisi quasi atque repellat ullam debitis facere, reprehenderit commodi beatae!', 150)}</h1>
        </div>
        <div className="banner--fadeBottom"></div>
    </header>
  )
}

export default Banner

