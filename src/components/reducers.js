// reducers.js
const initialState = {
    profile: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_PROFILE':
        return {
          ...state,
          profile: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  