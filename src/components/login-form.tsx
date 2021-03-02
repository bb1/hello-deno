import React, { useState } from 'react';
import { Paper, Button, TextField, Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export interface LoginFormInterface {
  onSubmit: (credentials: SubmitInterface) => void;
  loading: boolean;
}

export interface SubmitInterface {
  username: string;
  password: string;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 250,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    textAlign: 'center'
  },
  item: {
    flexGrow: 1,
  }
}));

export const LoginForm = ({ onSubmit, loading }: LoginFormInterface) => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const triggerSubmit = () => onSubmit({ username, password });

  return (
    <Paper className={classes.paper}>
      <form onSubmit={triggerSubmit} >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item className={classes.item}>
            <TextField label="username" onKeyDown={(ev: any) => setUsername(ev.target.value)} />
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item className={classes.item}>
          <TextField label="password" onKeyDown={(ev: any) => setPassword(ev.target.value)} />
          </Grid>
        </Grid>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item className={classes.item}>
          <Button color={!loading ? 'primary' : 'default'} onClick={triggerSubmit} variant="contained" disabled={loading}>
            {!loading && 'Login'}
            {loading && (<CircularProgress color="primary"/>)}
          </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
