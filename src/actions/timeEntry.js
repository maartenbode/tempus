import * as API from '../api/timeEntry';

export const fetchTimeEntries = () => ({
  type: 'RECEIVE_TIME_ENTRIES',
  payload: API.getTimeEntries()
});
