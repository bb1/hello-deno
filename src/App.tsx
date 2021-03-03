import React, { useState } from 'react';
import { LoginForm } from './components/login-form';
import { login } from './services/auth-service';
import { LoginCredentials } from './types/types';

import logo from './logo.svg';
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

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
      <header>
        <img src={logo} alt="logo" className="App-logo" />
      </header>
      <main>
        {!loggedIn && (<LoginForm onSubmit={handleLogin} loading={loading} />)}
      </main>
    </div>
  );
}

export default App;
