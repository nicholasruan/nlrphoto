import React from 'react';
import './App.css';
import NavBar from './NavBar.js';

function Story() {
  return (
    <div id="page-container">
    <div id="body">
    <div className="App">

			<NavBar />

			<h1>About Me</h1>
      <img src={require('./images/profile.jpg')} id="profile"/>
      <div id="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

      <div id="footer">
        <p id="footertext"> Copyright © 2019 NICHOLAS RUAN. All Rights Reserved. </p>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Story;
