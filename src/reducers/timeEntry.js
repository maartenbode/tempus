const initialState = {
  entries: [],
  fetching: false,
  fetched: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_TIME_ENTRIES_PENDING': {
      return {
        ...state,
        fetching: true,
      };
    }

    default: {
      return state;
    }
  }
};
