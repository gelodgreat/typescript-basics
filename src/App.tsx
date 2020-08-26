import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonSearch from './components/PokemonSearch';

function App() {
  return (
    <div className="App">
      <PokemonSearch name="Angelo" numberOfPokemons={4} />
    </div>
  );
}

export default App;
