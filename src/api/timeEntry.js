import { get, post } from 'axios';

export const getTimeEntries = () => (
  get(`//localhost:4000/api/time-entry`)
);

export const storeTimeEntry = (data) => (
  post(`//localhost:4000/api/time-entry`, data)
);
