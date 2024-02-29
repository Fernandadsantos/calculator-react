import { createSlice } from "@reduxjs/toolkit";
import { evaluate} from "mathjs";

const calculateSlice = createSlice({
    name: 'calculate',
    initialState: {
        expression: '0',
    },
    reducers: { 
        add: (state, action) => {
            state.expression += action.payload;
        },
        subtract: (state, action) => {
            state.expression += action.payload;
        },
        multiply: (state, action) => {
            state.expression += action.payload;
        },
        divide: (state, action) => {
            state.expression += action.payload;
        },
        clear: (state) => {
            state.expression = '0';
        },
        concatNumber: (state, action) => { 
            if(state.expression[0] === "0" && state.expression[1] !== "."){
                state.expression = ''; 
            }

            state.expression += action.payload;
        },
        addDot: (state, action) => { 
            var currentState = state.expression.split("");
            var indexDot = currentState.findIndex((e) => e === ".");
            const arrOperation = currentState.filter((e) => e === "+" || e === "*" || e === "/" || e === "-");
            const dots = currentState.filter((e) => e === ".");
            if(indexDot === -1){
                state.expression += action.payload;
            } 
            else if(dots.length === arrOperation.length){
                state.expression += action.payload;
            }
        },
        result: (state) => { 
            const aux = state.expression;
            const newExpression = state.expression.split("");
            newExpression.map((value) => {
                if(value === "+" || value === "*" || value === "/" || value === "-"){
                    var operations = '';
                    for(let i = 0; i < aux.length; i++){
                        if(aux[i] === "+" || aux[i] === "*" || aux[i] === "/" || aux[i] === "-"){
                            operations += aux[i];
                        }
                    }  
                    if(operations[operations.length-1] === '-'){
                        const slice = operations.slice(0, operations.length-2);
                        state.expression = evaluate(aux.replace(slice, ''));
                    }
                    else{ 
                        state.expression = evaluate(aux.replace(operations, operations[operations.length-1]));
                    } 
                } 
                return state.expression;
            })
            if(typeof state.expression === "string"){
                state.expression = evaluate(state.expression);
            }
        }
    }
});
 
export const {add, subtract, multiply, divide, clear, concatNumber, addDot, result} = calculateSlice.actions; 
export default calculateSlice.reducer;