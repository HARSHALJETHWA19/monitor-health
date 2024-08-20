import React, { useState, useEffect } from 'react';
import { getMonitors } from '../api/api';

const MonitorList = () => {
  const [monitors, setMonitors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getMonitors();
      setMonitors(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Monitors</h2>
      <ul>
        {monitors.map(monitor => (
          <li key={monitor.id}>{monitor.name} - {monitor.url}</li>
        ))}
      </ul>
    </div>
  );
};

export default MonitorList;
