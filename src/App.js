import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  // useSelector grabs data from the global redux store
  // Grab the likeCount from our redux store

let likeCount = useSelector(store => store); 
  // Because you are not asking for the whole store

  //use the dispatch
  let dispatch = useDispatch();

  //REDUCER
  // Whatever is returned from this function
  // is our global state aka uncle aka nevada
const onLikeMe = () => { // This is called a "dispatch"
  // Tell my store that I was liked
  dispatch({
    
    type: "SOMEONE_LIKES_ME" // Yelling to another file
  })
};

  return (
    <div className="App">
      <>
        <h1>
          I am loved
        </h1>

        <button onClick={onLikeMe}>
          Like me
          </button>

        <p>
          {likeCount} likes
          </p>
      </>
    </div>
  );
}

export default App;
