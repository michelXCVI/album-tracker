import React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import './signup.component.css';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

export const SignupComponent: React.FC = () => {
  const classes = useStyles();

  return (
    <body>
      <div className="wrapper">
        <div className="form-wrapper">
          <h4>Create An Account</h4>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />

            <TextField
              id="outline-basic"
              label="Last Name"
              variant="outlined"
            />

            <TextField
              id="outline-basic"
              label="Email"
              type="email"
              variant="outlined"
            />

            <TextField id="outline-basic" label="Usermame" variant="outlined" />

            <TextField
              id="outline-basic"
              label="Password"
              type="password"
              variant="outlined"
            />

            <TextField
              id="outline-basic"
              label="Confirm Password"
              type="password"
              variant="outlined"
            />
          </form>
          <small>
            Already have an account? <Link to="/"> Sign in!</Link>
          </small>
          <br />
          <button type="submit">Sign Up</button>
        </div>
      </div>
    </body>
  );
};
