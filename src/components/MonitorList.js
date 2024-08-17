// src/components/MonitorList.js
import React, { useEffect, useState } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Button,
  Paper,
} from '@mui/material';
import axios from 'axios';

const MonitorList = () => {
  const [monitors, setMonitors] = useState([]);

  useEffect(() => {
    const fetchMonitors = async () => {
      try {
        const response = await axios.get('/api/monitors');
        setMonitors(response.data);
      } catch (error) {
        console.error('Error fetching monitors:', error);
      }
    };

    fetchMonitors();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/monitors/${id}`);
      setMonitors(monitors.filter((monitor) => monitor.id !== id));
    } catch (error) {
      console.error('Error deleting monitor:', error);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Monitored Websites
      </Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>URL</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Uptime</TableCell>
              <TableCell>Response Time</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {monitors.map((monitor) => (
              <TableRow key={monitor.id}>
                <TableCell>{monitor.name}</TableCell>
                <TableCell>{monitor.url}</TableCell>
                <TableCell>{monitor.status}</TableCell>
                <TableCell>{monitor.uptime}%</TableCell>
                <TableCell>{monitor.responseTime} ms</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(monitor.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default MonitorList;
