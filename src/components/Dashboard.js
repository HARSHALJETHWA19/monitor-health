import React, { useEffect, useState } from 'react';
import { getStats } from '../api/api';
import MonitorList from './MonitorList';
import AlertList from './AlertList';
import Report from './Report';
import Settings from './Settings';
import './Dashboard.css';  // Custom CSS for styling

const Dashboard = () => {
    const [stats, setStats] = useState({ monitorCount: 0, alertCount: 0, uptime: 0 });

    useEffect(() => {
        const fetchStats = async () => {
            const data = await getStats();
            setStats(data);
        };
        fetchStats();
    }, []);

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Website Monitoring Dashboard</h1>
            </header>
            <section className="stats">
                <div className="stat-item">
                    <h3>Monitors</h3>
                    <p>{stats.monitorCount}</p>
                </div>
                <div className="stat-item">
                    <h3>Alerts</h3>
                    <p>{stats.alertCount}</p>
                </div>
                <div className="stat-item">
                    <h3>Average Uptime</h3>
                    <p>{stats.uptime}%</p>
                </div>
            </section>
            <MonitorList />
            <AlertList />
            <Report />
            <Settings />
        </div>
    );
};

export default Dashboard;
