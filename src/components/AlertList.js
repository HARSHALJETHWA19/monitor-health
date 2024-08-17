// src/components/AlertList.js
import React, { useEffect, useState } from 'react';
// import { fetchAlerts } from '../api';
import { fetchAlerts } from '../api/api';
const AlertList = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const getAlerts = async () => {
      try {
        const data = await fetchAlerts();
        setAlerts(data);
      } catch (error) {
        console.error('Error fetching alerts:', error);
      }
    };

    getAlerts();
  }, []);

  return (
    <div>
      <h1>Alerts</h1>
      <ul>
        {alerts.map(alert => (
          <li key={alert.id}>
            {alert.alert_type} - {alert.message} - {alert.created_at}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertList;
