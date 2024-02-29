import './display.css';

export default function Display({currentExpression}){
    return(
        <div id="display">
            <h1 className='currentDisplayContent'>{currentExpression}</h1>
        </div>
    )
}