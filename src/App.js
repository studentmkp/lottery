import React from 'react';
import './App.css';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="四星彩" numBalls={4} maxNum={9}/>
    </div>
  );
}

export default App;
