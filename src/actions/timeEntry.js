import * as API from '../api/timeEntry';

export const fetchTimeEntries = () => ({
  type: 'RECEIVE_TIME_ENTRIES',
  payload: API.getTimeEntries()
});

export const storeTimeEntry = (data) => ({
  type: 'STORE_TIME_ENTRY',
  payload: API.storeTimeEntry(data)
});
