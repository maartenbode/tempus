import { get } from 'axios';

export const getTimeEntries = () => (
  get(`//localhost:4000/api/time-entry`)
);
