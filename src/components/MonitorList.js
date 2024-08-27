import React, { useEffect, useState } from 'react';
import { getMonitors } from '../api/api';
import './MonitorList.css';  // Custom CSS for styling

const MonitorList = () => {
    const [monitors, setMonitors] = useState([]);

    useEffect(() => {
        const fetchMonitors = async () => {
            const data = await getMonitors();
            setMonitors(data);
        };
        fetchMonitors();
    }, []);

    return (
        <div className="monitor-list">
            <h2>Monitors</h2>
            <ul>
                {monitors.map((monitor) => (
                    <li key={monitor.id}>
                        <h4>{monitor.name}</h4>
                        <p>Status: {monitor.status}</p>
                        <p>Uptime: {monitor.uptime}%</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MonitorList;
