import React, { useState, useEffect } from 'react';
import { getAlerts } from '../api/api';

const AlertList = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getAlerts();
      setAlerts(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Alerts</h2>
      <ul>
        {alerts.map(alert => (
          <li key={alert.id}>{alert.message} - {alert.created_at}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlertList;
