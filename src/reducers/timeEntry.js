const initialState = {
  entries: {},
  fetching: false,
  fetched: false,
  saving: false,
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

    case 'RECEIVE_TIME_ENTRIES_REJECTED': {
      return {
        ...state,
        fetching: false,
        fetched: false,
        entries: action.payload,
      };
    }

    case 'RECEIVE_TIME_ENTRIES_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        entries: action.payload.data,
      };
    }

    case 'STORE_TIME_ENTRY_PENDING': {
      return {
        ...state,
        saving: true,
      }
    }

    case 'STORE_TIME_ENTRY_FULFILLED': {
      return {
        ...state,
        saving: false,
      }
    }

    default: {
      return state;
    }
  }
};
