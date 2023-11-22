import React from 'react';
import { createTheme, ThemeProvider, makeStyles } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Signup.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#03989E',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    background: '#FFFFFF',
    padding: 60,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 600,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    width: '90%',
    margin: 'auto',
    padding: 40,
    borderRadius: 10,
  },
  textField: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#7F00FF',
      },
      '&:hover fieldset': {
        borderColor: '#7F00FF',
      },
    },
    margin: '20px 0',
    width: '100%',
    fontSize: '1.5rem',
  },
  button: {
    marginTop: 40,
    width: '100%',
    fontSize: '1.5rem',
    padding: '15px',
    background: 'linear-gradient(to right, #E100FF, #7F00FF)',
    color: '#FFFFFF',
    '&:hover': {
      background: 'linear-gradient(to right, #E100FF, #7F00FF, #006D73)',
    },
  },
}));

const SignUpPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const openNewTab = () => {
    navigate('/login');
  };

  return (
    <div className='signup-container'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component="main" maxWidth={false} className={classes.container}>
          <Paper
            elevation={3}
            className={classes.paper}
          >
            <TextField
              className={classes.textField}
              required
              fullWidth
              label="Username"
              variant="outlined"
            />
            <TextField
              className={classes.textField}
              required
              fullWidth
              label="Email Address"
              type="email"
              variant="outlined"
            />
            <TextField
              className={classes.textField}
              required
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
            />
            <Button
              className={classes.button}
              type="submit"
              fullWidth
              variant="contained"
            >
              Sign Up
            </Button>
            <Grid container alignItems="center" justifyContent="center" style={{ marginLeft: 300 }}>
              <Grid item xs>
                <button onClick={openNewTab}>Already have an account? Login</button>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default SignUpPage;
