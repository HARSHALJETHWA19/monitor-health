// src/components/Settings.js
import React, { useEffect, useState } from 'react';
import { fetchSettings, updateSettings } from '../api/api';

const Settings = () => {
  const [settings, setSettings] = useState({ alertThreshold: 5, autoResolve: true });

  useEffect(() => {
    const getSettings = async () => {
      try {
        const data = await fetchSettings();
        setSettings(data);
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };

    getSettings();
  }, []);

  const handleSave = async () => {
    try {
      await updateSettings(settings);
      alert('Settings updated successfully');
    } catch (error) {
      console.error('Error updating settings:', error);
    }
  };

  return (
    <div>
      <h1>Settings</h1>
      <div>
        <label>Alert Threshold:</label>
        <input
          type="number"
          value={settings.alertThreshold}
          onChange={(e) => setSettings({ ...settings, alertThreshold: e.target.value })}
        />
      </div>
      <div>
        <label>Auto Resolve:</label>
        <input
          type="checkbox"
          checked={settings.autoResolve}
          onChange={(e) => setSettings({ ...settings, autoResolve: e.target.checked })}
        />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Settings;
