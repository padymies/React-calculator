import { useState } from "react";
import { Operators } from "../components/Grid";

export interface OperationState {
    operation?: Operators;
    firstNumber?: number;
}

export const useOperation: OperationState | any = (initialState: OperationState = {}) => {

    const [values, setvalues] = useState<OperationState>(initialState);

    const setOperation = (values: OperationState) => {
        
        setvalues( {firstNumber: values.firstNumber, operation: values.operation});
    }

    return [ values, setOperation];
}