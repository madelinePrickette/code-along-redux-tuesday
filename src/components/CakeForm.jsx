import { useState } from 'react';
import { useDispatch } from 'react-redux';

function CakeForm () {
    // Track the content of our flavor <input />
    const [ flavor, setFlavor] = useState('');

    const dispatch = useDispatch();

    const onAddCake = (evt) => {
        evt.preventDefault();  // dont reload plz
        
        console.log('in onAddCake yessss flavor:', flavor);
        // Dispatch an action to the redux store
        // Telling it to add a new cake
        // We'll need to send some data to our reducer

        dispatch({
            type: 'ADD_FLAVOR',
            payload: flavor // can be anything a function, object, anything eg. "rum raisin"
        });
    }
    
    return (
        <>
            <h3>CakeForm!</h3>

            <form onSubmit={onAddCake}>
                <input
                    type="text"
                    placeholder="CakeType"
                    value={flavor}
                    onChange={evt => setFlavor(evt.target.value)}
                />

                <button>Add Cake</button>
            </form>
        </>
    );
}

export default CakeForm;