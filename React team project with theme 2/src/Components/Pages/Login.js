import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css';

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

const styles = {
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
    width: '80%',
    margin: 'auto',
    padding: 40,
    borderRadius: 10,
  },
  textField: {
    margin: '20px 0',
    width: '100%',
    fontSize: '1.5rem',
    '&:hover': {
      '& fieldset': {
        borderColor: 'linear-gradient(to right, #E100FF, #7F00FF)',
        transition: 'border-color 0.3s ease-in-out',
      },
    },
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
};

const LoginPage = () => {
  const navigate = useNavigate();
  const openNewTab = () => {
    navigate('/signup');
  };

  return (
    <div className='login-container'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component="main" maxWidth={false} style={styles.container}>
          <Paper
            elevation={3}
            style={{
              ...styles.paper,
            }}
          >
            <TextField
              style={styles.textField}
              required
              fullWidth
              label="Username or Email"
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
              Log In
            </Button>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default LoginPage;
