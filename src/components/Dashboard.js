// // import React from 'react';
// // import { Card, Grid } from '@material-ui/core';

// // const Dashboard = () => {
// //   return (
// //     <div>
// //       <h1>Dashboard</h1>
// //       <Grid container spacing={3}>
// //         <Grid item xs={12} sm={6} md={3}>
// //           <Card>Monitored Websites: 10</Card>
// //         </Grid>
// //         <Grid item xs={12} sm={6} md={3}>
// //           <Card>Uptime: 99.99%</Card>
// //         </Grid>
// //         <Grid item xs={12} sm={6} md={3}>
// //           <Card>Alerts: 5</Card>
// //         </Grid>
// //         <Grid item xs={12} sm={6} md={3}>
// //           <Card>Auto-Resolved: 2</Card>
// //         </Grid>
// //       </Grid>
// //     </div>
// //   );
// // };

// // export default Dashboard;

// // src/components/Dashboard.js
// import React, { useEffect, useState } from 'react';
// import { Grid, Card, CardContent, Typography } from '@mui/material';
// import axios from 'axios';

// const Dashboard = () => {
//   const [stats, setStats] = useState({
//     monitors: 0,
//     uptime: 0,
//     alerts: 0,
//     autoResolved: 0,
//   });

//   useEffect(() => {
//     // Fetch statistics from the backend API
//     const fetchStats = async () => {
//       try {
//         const response = await axios.get('/api/stats');
//         setStats(response.data);
//       } catch (error) {
//         console.error('Error fetching stats:', error);
//       }
//     };

//     fetchStats();
//   }, []);

//   return (
//     <div>
//       <Typography variant="h4" gutterBottom>
//         Dashboard
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">Monitored Websites</Typography>
//               <Typography variant="h4">{stats.monitors}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">Uptime</Typography>
//               <Typography variant="h4">{stats.uptime}%</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">Alerts</Typography>
//               <Typography variant="h4">{stats.alerts}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">Auto-Resolved</Typography>
//               <Typography variant="h4">{stats.autoResolved}</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default Dashboard;

// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Card, Grid } from '@material-ui/core';
import { fetchStats } from '../api/api';

const Dashboard = () => {
  const [stats, setStats] = useState({
    monitorCount: 0,
    alertCount: 0,
    uptime: 0,
  });

  useEffect(() => {
    const getStats = async () => {
      try {
        const data = await fetchStats();
        setStats(data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    getStats();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>Monitored Websites: {stats.monitorCount}</Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>Uptime: {stats.uptime}%</Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>Alerts: {stats.alertCount}</Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>Auto-Resolved: {/* Add auto-resolved metric here if available */}</Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
