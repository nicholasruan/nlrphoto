import React from 'react';
import './App.css';
import Places from './Places.js';
import Faces from './Faces.js';
import Life from './Life.js';
import Home from './Home.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/faces" exact component={Faces}/>
          <Route path="/life" exact component={Life}/>
          <Route path="/places" exact component={Places}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
