import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import ReactDOM from 'react-dom';

class Home extends Component{

	state = {
		img: require('./images/logonav.png'),
	}
	render() {


		return (
			<div id="homepage">
		  <div className="App">
				<Link to='/places'>
				<div class="container">
				<img
					src={this.state.img} class="title"

				/>
				<img src={require('./images/logo.png')} class="title" />
				</div>
				</Link>
			</div>
			</div>
		);
	}
}


export default Home;
