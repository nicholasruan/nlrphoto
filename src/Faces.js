import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-bootstrap';
import ModalImage from 'react-modal-image';

class Faces extends Component {
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
              <img src={require('./images/faces/_MG_4328.jpg')} />
            </div>
						<div>
							<img src={require('./images/faces/sidebyside.jpg')} />
						</div>
					</Carousel>
				</div>
				<div id="scrollview">
					<div class="column">
						<ModalImage
							className="mimage"
							small={require('./images/faces/_MG_0461.jpg')}
							large={require('./images/faces/_MG_0461.jpg')}
							hideDownload={this.state.download}
						/>
						<ModalImage
							className="mimage"
							small={require('./images/faces/_MG_0781.jpg')}
							large={require('./images/faces/_MG_0781.jpg')}
							hideDownload={this.state.download}
						/>
						<ModalImage
							className="mimage"
							small={require('./images/faces/_MG_0888.jpg')}
							large={require('./images/faces/_MG_0888.jpg')}
							hideDownload={this.state.download}
						/>
            <ModalImage
							className="mimage"
							small={require('./images/faces/_MG_2003.jpg')}
							large={require('./images/faces/_MG_2003.jpg')}
							hideDownload={this.state.download}
						/>
					</div>
					<div class="column">
						<ModalImage
							className="mimage"
							small={require('./images/faces/_MG_0940.jpg')}
							large={require('./images/faces/_MG_0940.jpg')}
							hideDownload={this.state.download}
						/>
						<ModalImage
							className="mimage"
							small={require('./images/faces/_MG_5461-2.jpg')}
							large={require('./images/faces/_MG_5461-2.jpg')}
							hideDownload={this.state.download}
						/>
						<ModalImage
							className="mimage"
							small={require('./images/faces/_MG_1067.jpg')}
							large={require('./images/faces/_MG_1067.jpg')}
							hideDownload={this.state.download}
						/>
            <ModalImage
							className="mimage"
							small={require('./images/faces/_MG_1927.jpg')}
							large={require('./images/faces/_MG_1927.jpg')}
							hideDownload={this.state.download}
						/>
					</div>
					<div class="column">
						<ModalImage
							className="mimage"
							small={require('./images/faces/_MG_1155.jpg')}
							large={require('./images/faces/_MG_1155.jpg')}
							hideDownload={this.state.download}
						/>
						<ModalImage
							className="mimage"
							small={require('./images/faces/_MG_1504.jpg')}
							large={require('./images/faces/_MG_1504.jpg')}
							hideDownload={this.state.download}
						/>
            <ModalImage
							className="mimage"
							small={require('./images/faces/3.jpg')}
							large={require('./images/faces/3.jpg')}
							hideDownload={this.state.download}
						/>
            <ModalImage
							className="mimage"
							small={require('./images/faces/08650013.jpg')}
							large={require('./images/faces/08650013.jpg')}
							hideDownload={this.state.download}
						/>
					</div>
					<div class="column">
						<ModalImage
							className="mimage"
							small={require('./images/faces/_MG_1505.jpg')}
							large={require('./images/faces/_MG_1505.jpg')}
							hideDownload={this.state.download}
						/>
						<ModalImage
							className="mimage"
							small={require('./images/faces/_MG_1820.jpg')}
							large={require('./images/faces/_MG_1820.jpg')}
							hideDownload={this.state.download}
						/>
            <ModalImage
							className="mimage"
							small={require('./images/faces/_MG_4310.jpg')}
							large={require('./images/faces/_MG_4310.jpg')}
							hideDownload={this.state.download}
						/>
            <ModalImage
							className="mimage"
							small={require('./images/faces/_MG_5592.jpg')}
							large={require('./images/faces/_MG_5592.jpg')}
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

export default Faces;
