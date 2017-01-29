import { get, post } from 'axios';

export const getTimeEntries = () => (
  get(`/api/time-entry`)
);

export const storeTimeEntry = (data) => (
  post(`/api/time-entry`, data)
);
