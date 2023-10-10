// reducers/profileReducer.js
const initialState = {
    name: 'Deepak Maurya',
    experience: '3 Yrs Exp.',
    rating: 4.5,
    details: `I am interested in Science and Web Technology. Basic lorem epsum.`,
    subjects: ['Science', 'Maths', 'Hindi'],
  };
  
  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PROFILE_DATA':
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  
  export default profileReducer;
  