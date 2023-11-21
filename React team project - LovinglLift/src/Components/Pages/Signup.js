import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
      main: '#03989E', // Teal
    },
    secondary: {
      main: '#FFFFFF', // White
    },
  },
});

const styles = {
  paper: {
    
    background: '#FFFFFF', // White background
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
    margin: '20px 0',
    width: '100%',
    fontSize: '1.5rem',
    '&:hover': {
      borderColor: '#00FF00', // Green border on hover
    },
  },
  button: {
    marginTop: 40,
    width: '100%',
    fontSize: '1.5rem',
    padding: '15px',
    backgroundColor: '#03989E', // Teal background color
    color: '#FFFFFF', // White text color
    '&:hover': {
      backgroundColor: '#006D73', // Dark Teal on hover
    },
  },
};

const SignUpPage = () => {
  const navigate = useNavigate();
  const openNewTab = () => {
    navigate('/login');
  };

  return (
    <div className='signup-container'>
    <video src='./Videos/BGVIDEO.mp4' autoPlay loop muted />
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth={false} style={styles.container}>
        <Paper
          elevation={3}
          style={{
            ...styles.paper,
            background: '#FFFFFF', // White background
          }}
        >
          <TextField
            style={styles.textField}
            required
            fullWidth
            label="Username"
            variant="outlined"
          />
          <TextField
            style={styles.textField}
            required
            fullWidth
            label="Email Address"
            type="email"
            variant="outlined"
          />
          <TextField
            style={styles.textField}
            required
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
          />
          <Button
            style={styles.button}
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
