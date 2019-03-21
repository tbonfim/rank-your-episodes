import React from 'react';
import EpisodeList from './components/EpisodeList/EpisodeList';
import './App.css';

export default function App () {
  return (
    <div className="mt-5">
      <h1 className="text-info">Black Mirror</h1>
      <h4 className="text-secondary">Episodes List</h4>
      <EpisodeList />
    </div>
  );
  
}