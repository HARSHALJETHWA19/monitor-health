import React, { useEffect, useState } from 'react';
import { getReports } from '../api/api';
import './Report.css';  // Custom CSS for styling

const Report = () => {
    const [reports, setReports] = useState({ uptimeReport: [], alertReport: [] });

    useEffect(() => {
        const fetchReports = async () => {
            const data = await getReports();
            setReports(data);
        };
        fetchReports();
    }, []);

    return (
        <div className="report">
            <h2>Reports</h2>
            <div className="report-section">
                <h3>Uptime Report</h3>
                <ul>
                    {reports.uptimeReport.map((report) => (
                        <li key={report.id}>
                            <p>Monitor ID: {report.id}</p>
                            <p>Uptime: {report.uptime}%</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="report-section">
                <h3>Alert Report</h3>
                <ul>
                    {reports.alertReport.map((report) => (
                        <li key={report.id}>
                            <p>Alert ID: {report.id}</p>
                            <p>Created At: {report.created_at}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Report;
