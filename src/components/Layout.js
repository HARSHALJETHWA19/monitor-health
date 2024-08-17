// src/pages/Layout.js
import React from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, CssBaseline } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const Layout = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    { text: 'Dashboard', path: '/' },
    { text: 'Monitors', path: '/monitors' },
    { text: 'Alerts', path: '/alerts' },
    { text: 'Reports', path: '/reports' },
    { text: 'Settings', path: '/settings' },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ zIndex: 1201 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Website Monitoring
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        style={{
          width: drawerWidth,
          flexShrink: 0,
        }}
        PaperProps={{
          style: {
            width: drawerWidth,
          },
        }}
      >
        <Toolbar />
        <div>
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
                selected={location.pathname === item.path}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main style={{ flexGrow: 1, padding: '80px 24px 24px 24px' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
