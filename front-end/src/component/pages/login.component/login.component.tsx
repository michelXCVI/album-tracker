import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import './login.component.css'
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  })
);


export const LoginComponent: React.FC = () =>{
    const classes = useStyles();
    
    
    return (
        <div id="login-body">
          <h1 id="h1">Album Tracker</h1>
          <div className="hr" />
          <section className="wrapper">
            <div className="form-wrapper">
              <h4>Login</h4>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                />

                <TextField
                  id="outlined-basic"
                  label="Password"
                  type="password"
                  variant="outlined"
                />
              </form>
              <small>
                Don't have an account? Click <Link to="/signup">here</Link> to
                sign up
              </small>
              <br />
              <button type="submit">Log in</button>
            </div>
          </section>
          </div>
    );
}