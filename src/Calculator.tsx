import { Grid, Operators } from './components/Grid';
import { CalculatorInput } from './components/CalculatorInput';
import { useState } from 'react';
import { useOperation } from './hooks/useOperation';

export const Calculator = () =>  {

  const [state, setState] = useState('0');

  const [values, setOperation] = useOperation({});


  const onNumberClick = (number: string) => {
    if (state === '0') {
      setState(number);
    } else if (number === '0' && values.operation !== undefined && state.split(values.operation)[1].length <1) {
      return;
    }else {
      setState(state + number);
    }
    
  }
  const onOperatorClick = (operator: Operators) => {
    switch (operator) {
              case Operators.PLUS:
                if ( state !== '0' && values.operation === undefined) {
                  setState(state + '+');
                  setOperation({operation: Operators.PLUS, firstNumber: + state});
                }
                  break;
              case Operators.REST:
                if ( state !== '0' && values.operation === undefined) {
                  setState(state + '-');
                  setOperation({operation: Operators.REST, firstNumber: + state});
                }
                  
                  break;
              case Operators.MULTIPLY:
                if ( state !== '0' && values.operation === undefined) {
                  setState(state + 'x');
                  setOperation({operation: Operators.MULTIPLY, firstNumber: + state});
                }
                  
                  break;
              case Operators.DIVIDE:
                if ( state !== '0' && values.operation === undefined) {
                  setState(state + '/');
                  setOperation({operation: Operators.DIVIDE, firstNumber: + state});
                }
                  
                  break;
              case Operators.EQUAL:
                const secondNumber = +state.split(values.operation)[1];
                setOperation({
                  firstNumber: values.firstNumber,
                  operation: values.operation});
                  calculateResult(secondNumber);
                
                  break;
            
              default:
                  break;
          }
  }

  const calculateResult = (secondNumber: number) => {
    switch (values.operation) {
      
      case Operators.PLUS:

       setState((values.firstNumber  + secondNumber).toString());
       setOperation({});
          break;

      case Operators.REST:
       
       setState((values.firstNumber  - secondNumber).toString());
       setOperation({});
          break;

      case Operators.MULTIPLY:

       setState((values.firstNumber  * secondNumber).toString());
       setOperation({});
          break;

      case Operators.DIVIDE:

       setState((values.firstNumber  / secondNumber).toString());
       setOperation({});
          break;

      default:
          break;
  }
  }
  const onReset = () => {
      setState('0');
      setOperation({})
  }

  
  return (
   <div className="main">
    <CalculatorInput text= {state}/>
    <Grid 
      onNumberClick={onNumberClick}
      onOperatorClick={onOperatorClick}
      onReset={onReset}
    />
   </div> 
    
  );
}

export default Calculator;
