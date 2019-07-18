import React, { Component } from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavBar from './NavBar.js';
import { Carousel } from 'react-bootstrap';
import ModalImage from 'react-modal-image';

class Life extends Component {
	constructor(props){
		super(props);
		this.state = {
			show: false,
			download: true,
			imageStatus: "loading"
		}
	}

	handleImageLoaded() {
		this.setState({ imageStatus: "loaded" });
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
							<img onLoad={this.handleImageLoaded.bind(this)}
							src={require('./images/life/_MG_6876.jpg')} />
						</div>
						<div>
							<img onLoad={this.handleImageLoaded.bind(this)} src={require('./images/life/06460008.jpg')} />
						</div>
						<div>
							<img onLoad={this.handleImageLoaded.bind(this)} src={require('./images/life/000022540019.jpg')} />
						</div>
						<div>
							<img onLoad={this.handleImageLoaded.bind(this)} src={require('./images/life/_MG_3375.jpg')} />
						</div>
						<div>
							<img onLoad={this.handleImageLoaded.bind(this)} src={require('./images/life/02960010.jpg')} />
						</div>
						<div>
							<img onLoad={this.handleImageLoaded.bind(this)} src={require('./images/life/03670007.jpeg')} />
						</div>
						<div>
							<img onLoad={this.handleImageLoaded.bind(this)} src={require('./images/life/06630010.jpg')} />
						</div>
						<div>
							<img onLoad={this.handleImageLoaded.bind(this)} src={require('./images/life/08650039.jpg')} />
						</div>
						<div>
							<img onLoad={this.handleImageLoaded.bind(this)} src={require('./images/life/000048800018.jpg')} />
						</div>

					</Carousel>
				</div>
				<div id="scrollview">
					<div class="column">
						<ModalImage
							className="mimage"
							small={require('./images/life/_MG_6876.jpg')}
							large={require('./images/life/_MG_6876.jpg')}
							hideDownload={this.state.download}
						/>
						<ModalImage
							className="mimage"
							small={require('./images/life/06460008.jpg')}
							large={require('./images/life/06460008.jpg')}
							hideDownload={this.state.download}
						/>
						<ModalImage
							className="mimage"
							small={require('./images/life/000022540019.jpg')}
							large={require('./images/life/000022540019.jpg')}
							hideDownload={this.state.download}
						/>
					</div>
					<div class="column">
						<ModalImage
						onLoad={this.handleImageLoaded.bind(this)}
							className="mimage"
							small={require('./images/life/_MG_1705.jpg')}
							large={require('./images/life/_MG_1705.jpg')}
							hideDownload={this.state.download}
						/>
						<ModalImage
						onLoad={this.handleImageLoaded.bind(this)}
							className="mimage"
							small={require('./images/life/_MG_3375.jpg')}
							large={require('./images/life/_MG_3375.jpg')}
							hideDownload={this.state.download}
						/>
						<ModalImage
						onLoad={this.handleImageLoaded.bind(this)}
							className="mimage"
							small={require('./images/life/02960010.jpg')}
							large={require('./images/life/02960010.jpg')}
							hideDownload={this.state.download}
						/>
					</div>
					<div class="column">
						<ModalImage
						onLoad={this.handleImageLoaded.bind(this)}
							className="mimage"
							small={require('./images/life/03670007.jpeg')}
							large={require('./images/life/03670007.jpeg')}
							hideDownload={this.state.download}
						/>
						<ModalImage
						onLoad={this.handleImageLoaded.bind(this)}
							className="mimage"
							small={require('./images/life/06630010.jpg')}
							large={require('./images/life/06630010.jpg')}
							hideDownload={this.state.download}
						/>
						<ModalImage
						onLoad={this.handleImageLoaded.bind(this)}
							className="mimage"
							small={require('./images/life/28280019.jpeg')}
							large={require('./images/life/28280019.jpeg')}
							hideDownload={this.state.download}
						/>
					</div>
					<div class="column">
						<ModalImage
						onLoad={this.handleImageLoaded.bind(this)}
							className="mimage"
							small={require('./images/life/000048800018.jpg')}
							large={require('./images/life/000048800018.jpg')}
							hideDownload={this.state.download}
						/>
						<ModalImage
						onLoad={this.handleImageLoaded.bind(this)}
							className="mimage"
							small={require('./images/life/08650039.jpg')}
							large={require('./images/life/08650039.jpg')}
							hideDownload={this.state.download}
						/>
						<ModalImage
						onLoad={this.handleImageLoaded.bind(this)}
							className="mimage"
							small={require('./images/life/000024670002.jpg')}
							large={require('./images/life/000024670002.jpg')}
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

// It may be conceivable to add prevArrowTemplate/nextArrowTemplate props? That way any React element can be passed to override the default arrows.
export default Life;
