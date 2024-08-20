// src/api.js
import axios from 'axios';

export const getStats = () => axios.get('/api/stats');
export const getMonitors = () => axios.get('/api/monitors');
export const getAlerts = () => axios.get('/api/alerts');
export const getReports = () => axios.get('/api/reports');
export const getSettings = () => axios.get('/api/settings');
export const updateSettings = (settings) => axios.put('/api/settings', settings);


// const BASE_URL = 'http://localhost:5000/api';

// export const fetchStats = async () => {
//   const response = await axios.get(`${BASE_URL}/stats`);
//   return response.data;
// };

// export const fetchMonitors = async () => {
//   const response = await axios.get(`${BASE_URL}/monitors`);
//   return response.data;
// };

// export const deleteMonitor = async (id) => {
//   await axios.delete(`${BASE_URL}/monitors/${id}`);
// };

// export const fetchAlerts = async () => {
//   const response = await axios.get(`${BASE_URL}/alerts`);
//   return response.data;
// };

// export const fetchReports = async () => {
//   const response = await axios.get(`${BASE_URL}/reports`);
//   return response.data;
// };

// export const fetchSettings = async () => {
//   const response = await axios.get(`${BASE_URL}/settings`);
//   return response.data;
// };

// export const updateSettings = async (settings) => {
//   await axios.put(`${BASE_URL}/settings`, settings);
// };
// const API_URL = 'http://localhost:5000/api';

// export async function getStats() {
//   const response = await fetch(`${API_URL}/stats`);
//   return await response.json();
// }

// export async function getMonitors() {
//   const response = await fetch(`${API_URL}/monitors`);
//   return await response.json();
// }

// export async function getAlerts() {
//   const response = await fetch(`${API_URL}/alerts`);
//   return await response.json();
// }

// export async function getReports() {
//   const response = await fetch(`${API_URL}/reports`);
//   return await response.json();
// }

// export async function getSettings() {
//   const response = await fetch(`${API_URL}/settings`);
//   return await response.json();
// }

// export async function updateSettings(settings) {
//   const response = await fetch(`${API_URL}/settings`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(settings),
//   });
//   return await response.json();
// }
