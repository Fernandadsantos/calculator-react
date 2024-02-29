import './App.css';
import Display from './components/display'; 
import { useSelector, useDispatch } from 'react-redux';  
import NumberButtons from './components/numberButtons'; 
import {add, subtract, divide, multiply, clear, addDot, result} from './redux/calculateSlice';
import OperationButtons from './components/operationButtons';

function App() { 
  const calculate = useSelector((state) => state.calculate.expression); 
  const dispatch = useDispatch();  
 
  return (
    <div className="App"> 
      <Display
        currentExpression={calculate}
      />
      <div className='operation'>
        <OperationButtons id="divide" operationSymbol='/' func={divide}/>
        <OperationButtons id="add" operationSymbol='+' func={add}/>
        <OperationButtons id="subtract" operationSymbol='-' func={subtract}/>
        <OperationButtons id="multiply" operationSymbol='*' func={multiply}/>
      </div>
      <div className='container'>
        <div className='btn'>
          <div className='row'>
            <NumberButtons numberId='one' number='1' />
            <NumberButtons numberId='two' number='2' />
            <NumberButtons numberId='three' number='3' />
          </div>
          <div className='row'>
            <NumberButtons numberId='four' number='4' />
            <NumberButtons numberId='five' number='5' />
            <NumberButtons numberId='six' number='6' />
          </div>
          <div className='row'>
            <NumberButtons numberId='seven' number='7' />
            <NumberButtons numberId='eight' number='8' />
            <NumberButtons numberId='nine' number='9' />
          </div>
          <div className='last-line'>
            <button id='decimal' onClick={() => dispatch(addDot('.'))}>.</button>
            <NumberButtons numberId='zero' number='0' />
          </div>
        </div>

        <div className='extra-btn'>
            <button id='clear' onClick={()=> dispatch(clear())}>C</button>
            <button id='equals' onClick={() => dispatch(result())}>=</button> 
        </div>

      </div>
    </div>
  );
}

export default App;
