// src/components/MonitorList.js
import React, { useEffect, useState } from 'react';
// import { fetchMonitors, deleteMonitor } from '../api';
import {  fetchMonitors, deleteMonitor } from '../api/api';

const MonitorList = () => {
  const [monitors, setMonitors] = useState([]);

  useEffect(() => {
    const getMonitors = async () => {
      try {
        const data = await fetchMonitors();
        setMonitors(data);
      } catch (error) {
        console.error('Error fetching monitors:', error);
      }
    };

    getMonitors();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteMonitor(id);
      setMonitors(monitors.filter(monitor => monitor.id !== id));
    } catch (error) {
      console.error('Error deleting monitor:', error);
    }
  };

  return (
    <div>
      <h1>Monitors</h1>
      <ul>
        {monitors.map(monitor => (
          <li key={monitor.id}>
            {monitor.name} - {monitor.url}
            <button onClick={() => handleDelete(monitor.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MonitorList;
