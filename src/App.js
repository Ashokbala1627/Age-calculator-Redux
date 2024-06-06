import React from 'react';
import AgeCalculator from './components/AgeCalculator';
import DisplayAge from './components/DisplayAge';

function App() {
  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <AgeCalculator />
      <DisplayAge />
    </div>
  );
}

export default App;
