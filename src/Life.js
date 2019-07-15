import React, { Component } from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavBar from './NavBar.js';
import { Carousel } from 'react-bootstrap';

class Life extends Component {
	render() {
	  return (
	    <div className="App">
				<NavBar />
				<div id="carouselview">
					<Carousel>
						<div>
							<img src={require('./images/life/_MG_6876.jpg')} />
						</div>
						<div>
							<img src={require('./images/life/06460008.jpg')} />
						</div>
						<div>
							<img src={require('./images/life/000022540019.jpg')} />
						</div>
					</Carousel>
				</div>
				<div id="scrollview">
						<img src={require('./images/life/_MG_6876.jpg')} />
						<img src={require('./images/life/06460008.jpg')} />
						<img src={require('./images/life/000022540019.jpg')} />
						<img src={require('./images/life/_MG_1705.jpg')} />

				</div>
	    </div>
	  );
	}
}

// It may be conceivable to add prevArrowTemplate/nextArrowTemplate props? That way any React element can be passed to override the default arrows.
export default Life;
