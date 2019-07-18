import React from 'react';
import './App.css';
import Places from './Places.js';
import Faces from './Faces.js';
import Life from './Life.js';
import Home from './Home.js';
import Story from './Story.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/faces" exact component={Faces}/>
          <Route path="/life" exact component={Life}/>
          <Route path="/places" exact component={Places}/>
          <Route path="/story" exact component={Story}/>
        </Switch>
      </Router>
    </div>
  );
}

// about me  (Story) section
export default App;
