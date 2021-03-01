import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const content = (<p>please login</p>);

  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo" className="App-logo" />
      </header>
      <main>
        {content}
      </main>
    </div>
  );
}

export default App;
