// src/components/Report.js
import React, { useEffect, useState } from 'react';
import { fetchReports } from '../api/api';

const Report = () => {
  const [reports, setReports] = useState({ uptimeReport: [], alertReport: [] });

  useEffect(() => {
    const getReports = async () => {
      try {
        const data = await fetchReports();
        setReports(data);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    getReports();
  }, []);

  return (
    <div>
      <h1>Reports</h1>
      <h2>Uptime Report</h2>
      <ul>
        {reports.uptimeReport.map(report => (
          <li key={report.id}>
            Monitor ID: {report.id} - Uptime: {report.uptime}
          </li>
        ))}
      </ul>
      <h2>Alert Report</h2>
      <ul>
        {reports.alertReport.map(report => (
          <li key={report.id}>
            Alert ID: {report.id} - Created At: {report.created_at}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Report;
