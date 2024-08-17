// src/components/Report.js
import React, { useEffect, useState } from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Report = () => {
  const [uptimeData, setUptimeData] = useState([]);
  const [responseTimeData, setResponseTimeData] = useState([]);

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const response = await axios.get('/api/reports');
        setUptimeData(response.data.uptime);
        setResponseTimeData(response.data.responseTime);
      } catch (error) {
        console.error('Error fetching report data:', error);
      }
    };

    fetchReportData();
  }, []);

  const uptimeChartData = {
    labels: uptimeData.map((data) => data.date),
    datasets: [
      {
        label: 'Uptime (%)',
        data: uptimeData.map((data) => data.uptime),
        fill: false,
        backgroundColor: 'green',
        borderColor: 'green',
      },
    ],
  };

  const responseTimeChartData = {
    labels: responseTimeData.map((data) => data.date),
    datasets: [
      {
        label: 'Response Time (ms)',
        data: responseTimeData.map((data) => data.responseTime),
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'blue',
      },
    ],
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Reports
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Uptime Report
            </Typography>
            <Line data={uptimeChartData} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Response Time Report
            </Typography>
            <Line data={responseTimeChartData} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Report;
