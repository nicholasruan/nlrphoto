import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

function Home() {
  return (
    <div className="App">
		<Image src={require('./images/logo.png')} fluid id="title"/>
			<p id="portfolio"><Link to='/life'>View Portfolio</Link></p>
    </div>
  );
}

export default Home;
