// src/components/Settings.js
import React, { useState, useEffect } from 'react';
import {
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  FormControlLabel,
  Switch,
} from '@mui/material';
import axios from 'axios';

const Settings = () => {
  const [settings, setSettings] = useState({
    notificationEmail: '',
    alertThreshold: 5,
    autoResolve: false,
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get('/api/settings');
        setSettings(response.data);
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };

    fetchSettings();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put('/api/settings', settings);
      alert('Settings updated successfully!');
    } catch (error) {
      console.error('Error updating settings:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Paper style={{ padding: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Notification Email"
              name="notificationEmail"
              value={settings.notificationEmail}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Alert Threshold"
              name="alertThreshold"
              type="number"
              value={settings.alertThreshold}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={settings.autoResolve}
                  onChange={handleChange}
                  name="autoResolve"
                  color="primary"
                />
              }
              label="Enable Auto-Resolve"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save Settings
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Settings;
