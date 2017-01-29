const initialState = {
  type: '',
};

export default function reducer(state = initialState, action) {
  return {
    ...state,
    type: action.type,
  };
};
