import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, combineReducers} from 'redux'; //grabbing one thing from the redux library
import { Provider } from 'react-redux';
import logger from 'redux-logger'; //🪵

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

// Another reducer
// A Reducer is:
// A function 
// that recieved 2 arguements: state and action
// state will have a default value value
const cakeFlavors = (state = ['funfetti', 'blue velvet'], action) => {
  if (action.type === 'ADD_FLAVOR') {
    // Don't mutate state!
    // state.push(action.payload) this mutates the old array
    // and it will not show up on the DOM. ❌ DONT DO IT.

    // Return a new array (new values instead of changing old values)
    // copy paste the values fron the previous state
    // and add the action.payload
    return [...state,action.payload];
  }
  return state;
}

// Create out resux store aka Nevada aka the cool uncle
const storeInstance = createStore(
  combineReducers({
    // Each key is a property of our redux state
    // Each value is a reducer function
    likeCount : likeCount,
    cakeFlavors: cakeFlavors
  }),
  applyMiddleware(logger)
  );

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
