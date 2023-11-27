import React,{useState} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
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

const SignUpPage = () => {
  const navigate = useNavigate();

  const openNewTab = () => {
    navigate('/login');
  };
  const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [pass,setpass]=useState('');
    const handc =(e)=>{
          // console.log('Signed in successfully')
         e.preventDefault();
        axios.post('http://localhost:8001/users',{
          name,email,pass
        })
        .then(res=>alert('sign up succesful'))
        .catch(err=>console.log(err)); 
    }
  return (
    <div className='signup-container'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component="main" maxWidth={false} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', width: '90%', margin: 'auto', padding: 40, borderRadius: 10 }}>
          <Paper elevation={3} style={{ background: '#FFFFFF', padding: 60, display: 'flex', flexDirection: 'column', alignItems: 'center', width: 600 }}>
            <TextField
              style={{ margin: '20px 0', width: '100%', fontSize: '1.5rem' }}
              required
              fullWidth
              label="Username"
              variant="outlined"
              value={name} 
              onChange={(event)=>{setname(event.target.value)}}
              />
            <TextField
              style={{ margin: '20px 0', width: '100%', fontSize: '1.5rem' }}
              required
              fullWidth
              label="Email Address"
              type="email"
              variant="outlined"
              value={email} 
              onChange={(event)=>{setemail(event.target.value)}}
              />
            <TextField
              style={{ margin: '20px 0', width: '100%', fontSize: '1.5rem' }}
              required
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={pass} 
              onChange={(event)=>{setpass(event.target.value)}}
            />
            <Button
              style={{ marginTop: 40, width: '100%', fontSize: '1.5rem', padding: '15px', background: 'linear-gradient(to right, #E100FF, #7F00FF)', color: '#FFFFFF' }}
              type="submit"
              fullWidth
              variant="contained"
              onClick={handc}
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