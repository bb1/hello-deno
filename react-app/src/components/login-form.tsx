import React, { useState } from 'react';
import { Container, Button, Input } from '@material-ui/core';

export interface LoginFormInterface {
  onSubmit: (credentials :SubmitInterface) => void;
}

export interface SubmitInterface {
  username: string;
  password: string;
}

export const LoginForm = ({ onSubmit }: LoginFormInterface) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const triggerSubmit = () => onSubmit({username, password});

  return (
    <Container>
      <form onSubmit={triggerSubmit} >
        <Input placeholder="user" onKeyDown={(ev: any) => setUsername(ev.target.value)} value={username} />
        <Input placeholder="password" onKeyDown={(ev: any) => setPassword(ev.target.value)} value={password} />
        <Button color="primary" onClick={triggerSubmit}>Login</Button>
      </form>
    </Container>
  );
}
