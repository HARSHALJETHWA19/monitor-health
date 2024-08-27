import React, { useState, useEffect } from 'react';
import { getSettings, updateSettings } from '../api/api';
import './Settings.css';  // Custom CSS for styling

const Settings = () => {
    const [settings, setSettings] = useState({ alertThreshold: 5, autoResolve: true });

    useEffect(() => {
        const fetchSettings = async () => {
            const data = await getSettings();
            setSettings(data);
        };
        fetchSettings();
    }, []);

    const handleUpdate = async () => {
        const updatedSettings = await updateSettings(settings);
        setSettings(updatedSettings);
    };

    return (
        <div className="settings">
            <h2>Settings</h2>
            <div className="settings-item">
                <label>Alert Threshold</label>
                <input
                    type="number"
                    value={settings.alertThreshold}
                    onChange={(e) => setSettings({ ...settings, alertThreshold: e.target.value })}
                />
            </div>
            <div className="settings-item">
                <label>Auto Resolve</label>
                <input
                    type="checkbox"
                    checked={settings.autoResolve}
                    onChange={(e) => setSettings({ ...settings, autoResolve: e.target.checked })}
                />
            </div>
            <button onClick={handleUpdate}>Update Settings</button>
        </div>
    );
};

export default Settings;
