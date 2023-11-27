import React from 'react';
import { Button, TextField, Typography, Container, CssBaseline, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const DonationForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your donation submission logic here
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: theme.spacing(8),
            backgroundColor: '#fff', // Set background color to white
            padding: theme.spacing(3),
            borderRadius: '8px', // Optional: add border-radius for a nicer look
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Optional: add a subtle box shadow
          }}
        >
          <Typography component="h1" variant="h5">
            Donation Form
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: theme.spacing(1) }}>
            {/* Add your form fields here, for example: */}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="fullName"
              label="Full Name"
              name="fullName"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
            />
            {/* Other form fields go here */}
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="donation-amount-label">Donation Amount</InputLabel>
              <Select
                labelId="donation-amount-label"
                id="donation-amount"
                label="Donation Amount"
                required
              >
                <MenuItem value={10}>$10</MenuItem>
                <MenuItem value={20}>$20</MenuItem>
                <MenuItem value={50}>$50</MenuItem>
                {/* Add more options as needed */}
              </Select>
            </FormControl>
            {/* Add more form fields as needed */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{
                marginTop: theme.spacing(3),
                background: 'linear-gradient(to right, #E100FF, #7F00FF)',
                color: '#fff',
              }}
            >
              Donate
            </Button>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default DonationForm;
