import React, { useEffect, useState } from 'react';
import { getAlerts } from '../api/api';
import './AlertList.css';  // Custom CSS for styling

const AlertList = () => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        const fetchAlerts = async () => {
            const data = await getAlerts();
            setAlerts(data);
        };
        fetchAlerts();
    }, []);

    return (
        <div className="alert-list">
            <h2>Alerts</h2>
            <ul>
                {alerts.map((alert) => (
                    <li key={alert.id}>
                        <h4>{alert.alert_type}</h4>
                        <p>{alert.message}</p>
                        <p>Resolved: {alert.resolved ? 'Yes' : 'No'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlertList;
