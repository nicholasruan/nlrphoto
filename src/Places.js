import React, { Component } from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavBar from './NavBar.js';
import { Carousel } from 'react-bootstrap';
import ModalImage from 'react-modal-image';

class Places extends Component {
  constructor(props){
		super(props);
		this.state = {
			show: false,
			download: true
		}
	}
	render() {
	  return (
			<div id="page-container">
			<div id="body">
	    <div className="App">
				<NavBar />
				<div id="carouselview">
					<Carousel>
            <div>
              <img src={require('./images/places/IMG_6713.jpg')} />
            </div>
            <div>
              <img src={require('./images/places/IMG_8963.jpg')} />
            </div>
						<div>
							<img src={require('./images/places/_MG_6175.jpg')} />
						</div>
            <div>
							<img src={require('./images/places/_MG_3461.jpg')} />
						</div>
					</Carousel>
				</div>
				<div id="scrollview">
					<div class="column">
						<ModalImage
							className="mimage"
							small={require('./images/places/_MG_0422.jpg')}
							large={require('./images/places/_MG_0422.jpg')}
							hideDownload={this.state.download}
						/>
            <ModalImage
							className="mimage"
							small={require('./images/places/_MG_1270.jpg')}
							large={require('./images/places/_MG_1270.jpg')}
							hideDownload={this.state.download}
						/>
            <ModalImage
              className="mimage"
              small={require('./images/places/_MG_2044.jpg')}
              large={require('./images/places/_MG_2044.jpg')}
              hideDownload={this.state.download}
            />
					</div>
					<div class="column">
						<ModalImage
							className="mimage"
							small={require('./images/places/_MG_1347.jpg')}
							large={require('./images/places/_MG_1347.jpg')}
							hideDownload={this.state.download}
						/>
						<ModalImage
							className="mimage"
							small={require('./images/places/_MG_2019.jpg')}
							large={require('./images/places/_MG_2019.jpg')}
							hideDownload={this.state.download}
						/>
            <ModalImage
							className="mimage"
							small={require('./images/places/_MG_1091.jpg')}
							large={require('./images/places/_MG_1091.jpg')}
							hideDownload={this.state.download}
						/>
					</div>
					<div class="column">
						<ModalImage
							className="mimage"
							small={require('./images/places/_MG_2438.jpg')}
							large={require('./images/places/_MG_2438.jpg')}
							hideDownload={this.state.download}
						/>
						<ModalImage
							className="mimage"
							small={require('./images/places/_MG_2827.jpg')}
							large={require('./images/places/_MG_2827.jpg')}
							hideDownload={this.state.download}
						/>
            <ModalImage
							className="mimage"
							small={require('./images/places/IMG_6200.jpg')}
							large={require('./images/places/IMG_6200.jpg')}
							hideDownload={this.state.download}
						/>
					</div>
					<div class="column">
						<ModalImage
							className="mimage"
							small={require('./images/places/_MG_2934.jpg')}
							large={require('./images/places/_MG_2934.jpg')}
							hideDownload={this.state.download}
						/>
						<ModalImage
							className="mimage"
							small={require('./images/places/_MG_3005.jpg')}
							large={require('./images/places/_MG_3005.jpg')}
							hideDownload={this.state.download}
						/>
            <ModalImage
							className="mimage"
							small={require('./images/places/_MG_3411.jpg')}
							large={require('./images/places/_MG_3411.jpg')}
							hideDownload={this.state.download}
						/>
            <ModalImage
							className="mimage"
							small={require('./images/places/IMG_6755.jpg')}
							large={require('./images/places/IMG_6755.jpg')}
							hideDownload={this.state.download}
						/>
					</div>
				</div>
				<div id="footer">
					<p id="footertext"> Copyright © 2019 NICHOLAS RUAN. All Rights Reserved. </p>
				</div>
		    </div>
			</div>
			</div>
	  );
	}
}

export default Places;
