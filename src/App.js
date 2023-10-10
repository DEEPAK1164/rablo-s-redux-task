// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ProfileCard from './components/ProfileCard'; 

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProfileCard />
      </div>
    </Provider>
  );
}

export default App;
