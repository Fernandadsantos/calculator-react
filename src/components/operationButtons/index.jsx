import { useDispatch } from "react-redux"
import './operationButtons.css';

export default function OperationButtons({id, operationSymbol, func}){
    const dispatch = useDispatch();

    return(
        <div> 
            <button  className='operation-btn' id={id} onClick={()=> dispatch(func(operationSymbol))}>{operationSymbol}</button>
        </div>
    )
}