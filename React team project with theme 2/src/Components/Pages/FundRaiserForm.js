import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFundraiser } from './FundraiserContext';
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
  const { updateFundraiserData } = useFundraiser();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fundraiserName: '',
    goalAmount: '',
    description: '',
    organizerName: '',
    contactEmail: '',
    startDate: '',
    endDate: '',
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFundraiserData({ ...formData, image });
    navigate('/browsefundraisers');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="md" style={styles.container}>
        <Paper elevation={3} style={styles.paper}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Fundraiser Name"
              variant="outlined"
              name="fundraiserName"
              value={formData.fundraiserName}
              onChange={handleChange}
              required
              fullWidth
              style={styles.textField}
            />
            <TextField
              label="Goal Amount"
              type="number"
              variant="outlined"
              name="goalAmount"
              value={formData.goalAmount}
              onChange={handleChange}
              required
              fullWidth
              style={styles.textField}
            />
            <TextField
              label="Description"
              multiline
              rows={3}
              variant="outlined"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              fullWidth
              style={styles.textField}
            />
            <TextField
              label="Organizer Name"
              variant="outlined"
              name="organizerName"
              value={formData.organizerName}
              onChange={handleChange}
              required
              fullWidth
              style={styles.textField}
            />
            <TextField
              label="Contact Email"
              type="email"
              variant="outlined"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              required
              fullWidth
              style={styles.textField}
            />
            <TextField
              label="Start Date"
              type="date"
              variant="outlined"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
              fullWidth
              style={styles.textField}
            />
            <TextField
              label="End Date"
              type="date"
              variant="outlined"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
              fullWidth
              style={styles.textField}
            />
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={handleImageChange}
              style={styles.textField}
            />
            <Button type="submit" variant="contained" fullWidth style={styles.button}>
              Create Fundraiser
            </Button>
          </form>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default FundraiserForm;
