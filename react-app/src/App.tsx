import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LoginForm } from './components/login-form';

function App() {
  const content = (<LoginForm onSubmit={console.log}></LoginForm>);

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
