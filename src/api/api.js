// src/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const fetchStats = async () => {
  const response = await axios.get(`${BASE_URL}/stats`);
  return response.data;
};

export const fetchMonitors = async () => {
  const response = await axios.get(`${BASE_URL}/monitors`);
  return response.data;
};

export const deleteMonitor = async (id) => {
  await axios.delete(`${BASE_URL}/monitors/${id}`);
};

export const fetchAlerts = async () => {
  const response = await axios.get(`${BASE_URL}/alerts`);
  return response.data;
};

export const fetchReports = async () => {
  const response = await axios.get(`${BASE_URL}/reports`);
  return response.data;
};

export const fetchSettings = async () => {
  const response = await axios.get(`${BASE_URL}/settings`);
  return response.data;
};

export const updateSettings = async (settings) => {
  await axios.put(`${BASE_URL}/settings`, settings);
};
