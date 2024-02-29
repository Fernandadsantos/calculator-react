import './numberButtons.css';
import { concatNumber } from '../../redux/calculateSlice';
import { useDispatch } from 'react-redux';

export default function NumberButtons({numberId, number}){
    const dispatch = useDispatch();

    return(
        <div>
            <button 
                className='number-btn'
                id={numberId}  
                onClick={() => dispatch(concatNumber(number))}
            >
                {number}
            </button>
        </div>
    )
};