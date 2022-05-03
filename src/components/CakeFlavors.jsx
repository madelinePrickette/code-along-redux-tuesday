import logger from 'redux-logger'; //🪵
import { useSelector } from 'react-redux';

function CakeFlavors() {
    let cakeFlavors = useSelector(store => store.cakeFlavors);
    
    return(

        <ul>
            {cakeFlavors.map(flav => (
            <li key={flav}>{flav}</li>
            ))}
        </ul>
    )
}

export default CakeFlavors;