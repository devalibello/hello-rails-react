const initialState = '';

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GREETING':
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;
