import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import episodeList from './episode-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        { episodeList.map( (episode) => <h1>{episode.title}</h1> )}
      </div>
    );
  }
}

export default App;
