import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 400,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '90%',
    margin: 'auto',
    padding: 20,
    borderRadius: 10,
  },
  textField: {
    margin: '10px 0',
    width: '100%',
    fontSize: '1rem',
    '&:hover': {
      '& fieldset': {
        borderColor: 'linear-gradient(to right, #E100FF, #7F00FF)',
        transition: 'border-color 0.3s ease-in-out',
      },
    },
  },
  button: {
    marginTop: 20,
    width: '100%',
    fontSize: '1rem',
    padding: '10px',
    background: 'linear-gradient(to right, #E100FF, #7F00FF)',
    color: '#FFFFFF',
    '&:hover': {
      background: 'linear-gradient(to right, #E100FF, #7F00FF, #006D73)',
    },
  },
};

const FundraiserForm = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="md" style={styles.container}>
        <Paper elevation={3} style={{ ...styles.paper }}>
          <TextField
            style={styles.textField}
            required
            fullWidth
            label="Fundraiser Name"
            variant="outlined"
          />
          <TextField
            style={styles.textField}
            required
            fullWidth
            label="Goal Amount"
            type="number"
            variant="outlined"
          />
          <TextField
            style={styles.textField}
            required
            fullWidth
            label="Description"
            multiline
            rows={3}
            variant="outlined"
          />
          <TextField
            style={styles.textField}
            required
            fullWidth
            label="Organizer Name"
            variant="outlined"
          />
          <TextField
            style={styles.textField}
            required
            fullWidth
            label="Contact Email"
            type="email"
            variant="outlined"
          />
          <TextField
            style={styles.textField}
            required
            fullWidth
            label="Start Date"
            type="date"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            style={styles.textField}
            required
            fullWidth
            label="End Date"
            type="date"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
          <Button style={styles.button} type="submit" fullWidth variant="contained">
            Create Fundraiser
          </Button>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default FundraiserForm;
