import React from 'react';
import Ball from './Ball'
import './App.css';

function App() {
  return (
    <div className="App">
      <Ball num={27}/>
      <Ball num={5}/>
      <Ball num={23}/>
      <Ball num={46}/>
    </div>
  );
}

export default App;
