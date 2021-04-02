import React from 'react';
import "./HomeScreen.css"

import Nav from "./Nav"
import Banner from './Banner'

const HomeScreen = () => {
  return ( 
    <div className="homeScreen">
      <Nav/>
      <Banner/>

      {/* {row} */}
    </div> );
}


export default HomeScreen;