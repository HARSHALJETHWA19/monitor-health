import React, { useState, useEffect } from 'react';
import { getReports } from '../api/api';

const Report = () => {
  const [report, setReport] = useState({
    uptimeReport: [],
    alertReport: [],
  });

  useEffect(() => {
    async function fetchData() {
      const data = await getReports();
      setReport(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Reports</h2>
      <h3>Uptime Report</h3>
      <ul>
        {report.uptimeReport.map((item, index) => (
          <li key={index}>Monitor {item.id}: {item.uptime}% uptime</li>
        ))}
      </ul>

      <h3>Alert Report</h3>
      <ul>
        {report.alertReport.map((item, index) => (
          <li key={index}>Alert {item.id}: Created at {item.created_at}</li>
        ))}
      </ul>
    </div>
  );
};

export default Report;
