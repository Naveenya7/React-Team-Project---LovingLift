import React,{useState} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css';
import axios from 'axios';

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
  const  [email,setemail]=useState('');
  const [pass,setpass]=useState('');
  const handlec = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:8001/users?email=${email}`)
      .then(res => {
        if (res.data.length > 0) {
          axios.get(`http://localhost:8001/users?pass=${pass}`)
            .then(res => {
              if (res.data.length > 0) {
                alert('Login successful');
              } else {
                alert('Invalid password');
              }
            })
            .catch(err => console.log(err));
        } else {
          alert('Invalid username');
        }
      })
      .catch(err => console.log(err));
  }
  
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
              value={email}  
              onChange={res=>{setemail(res.target.value)}}
              />
            <TextField
              style={styles.textField}
              required
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={pass}  
              onChange={res=>{setpass(res.target.value)}}
            />
            <Button
              style={styles.button}
              type="submit"
              fullWidth
              variant="contained"
              onClick={handlec}
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