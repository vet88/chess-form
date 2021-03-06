import React from 'react';
import Header from '../components/Header';
import { Link } from "react-router-dom";
import nextVector from '/assets/btn-vector.png';


function Home(){

	document.title = "Redberry Chess | Home";
	
	return (
		<div className="home-div">

	        <div className="home-left">
          		<Header />
	        </div>

	        <div className="home-right">
	          <div className="home-intro">
	            <p className="home-text">chess says <span className="home-text-span">a lot about</span><br></br> who we are </p>
	          </div>
	          <div className="home-btn">
	            <Link to="/personal-information">
	            	<button> Get Started &nbsp; <img src={nextVector}></img></button>
            	</Link>
	          </div>
	        </div>

      	</div>

  )
}

export default Home;