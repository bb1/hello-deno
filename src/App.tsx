import React, { useState } from 'react';
import { LoginForm } from './components/login-form';
import { login } from './services/auth-service';
import { LoginCredentials } from './types/types';
import { Presentation } from './components/presentation';
import { Button } from '@material-ui/core';

import logo from './logo.svg';
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [presentMode, setPresentMode] = useState(false);

  const handleLogin = async (credentials: LoginCredentials) => {
    setLoading(true);
    const success = await login(credentials);
    setLoggedIn(success);
    setLoading(false);
    if (!success) {
      // TODO: display error
      return;
    }
  };

  return (
    <div className="App">
      {!presentMode && (
        <header>
          <img src={logo} alt="logo" className="App-logo" />
        </header>
      )}

      <main>
        {!loggedIn && !presentMode && (<LoginForm onSubmit={handleLogin} loading={loading} />)}
        {presentMode && (<Presentation page={0}></Presentation>)}
      </main>

      <footer>
        <Button onClick={() => {
          setPresentMode(!presentMode);
        }}>
          toggle presentation
        </Button>
      </footer>
    </div>
  );
}

export default App;
