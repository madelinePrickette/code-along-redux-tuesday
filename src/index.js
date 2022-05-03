import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'; //grabbing one thing from the redux library
import { Provider } from 'react-redux';

// Whateve is returned from this function 
  // is our global state (aka "store")

  // Stimilar to:
  // let [likeCount, setLikeCount] = useState(5732)
const likeCount = (state = 5732, action) => {
  console.log('state is', state);
  console.log('action is', action);

  if (action.type === "SOMEONE_LIKES_ME"){
    return state + 1;
  }

  return state;
};

// Create out resux store aka Nevada aka the cool uncle
const storeInstance = createStore(likeCount);

const root = ReactDOM.createRoot(document.getElementById('root')); // Where we first render the app.
root.render(
  <React.StrictMode>
    {/* Provider shares out redux store with all of our components*/}
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
