import React, { useState, useEffect } from 'react';
import { getSettings, updateSettings } from '../api/api';

const Settings = () => {
  const [settings, setSettings] = useState({
    alertThreshold: '',
    autoResolve: false,
  });

  useEffect(() => {
    async function fetchData() {
      const data = await getSettings();
      setSettings(data);
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateSettings(settings);
    alert('Settings updated');
  };

  return (
    <div>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Alert Threshold (ms):</label>
          <input
            type="number"
            name="alertThreshold"
            value={settings.alertThreshold}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Auto Resolve:</label>
          <input
            type="checkbox"
            name="autoResolve"
            checked={settings.autoResolve}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;
