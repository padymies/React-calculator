import { FunctionComponent } from 'react';

export enum Operators {
    PLUS = '+',
    REST = '-',
    DIVIDE = '/',
    MULTIPLY = 'x',
    EQUAL = '='
}

interface GridProps {
    onNumberClick: (digit: string) => void
    onOperatorClick: (operator: Operators) => void
    onReset: () => void
  }

export const Grid: FunctionComponent<GridProps> = ({
    onNumberClick,
    onOperatorClick,
    onReset
  })=> {
    return (

        <div className="container">
            <div className="calculator-grid">
            <button onClick={ () => onNumberClick('7')}>7</button>
            <button onClick={ () => onNumberClick('8')}>8</button>
            <button onClick={ () => onNumberClick('9')}>9</button>
            <button onClick={ () => onOperatorClick(Operators.MULTIPLY)} className="operator">x</button>
            <button onClick={ () => onNumberClick('4')}>4</button>
            <button onClick={ () => onNumberClick('5')}>5</button>
            <button onClick={ () => onNumberClick('6')}>6</button>
            <button onClick={ () => onOperatorClick(Operators.DIVIDE)} className="operator">/</button>
            <button onClick={ () => onNumberClick('1')}>1</button>
            <button onClick={ () => onNumberClick('2')}>2</button>
            <button onClick={ () => onNumberClick('3')}>3</button>
            <button onClick={ () => onOperatorClick(Operators.REST)} className="operator">-</button>
            <button onClick={ () => onNumberClick('0')}>0</button>
            <button onClick={ () => onReset()}>CE</button>
            <button onClick={ () => onOperatorClick(Operators.EQUAL)} className="equal">=</button>
            <button onClick={ () => onOperatorClick(Operators.PLUS)} className="operator">+</button>
            </div>
        </div>
    )
}
