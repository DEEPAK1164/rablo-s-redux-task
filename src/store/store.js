// store/store.js
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; // If you want to use thunk middleware
import rootReducer from '../reducers/reducers'; // Import your root reducer

// Create the Redux store with middleware (e.g., thunk)
const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // You can add more middleware here if needed
);

export default store;
