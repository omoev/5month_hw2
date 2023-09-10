// src/store.js
import { createStore } from 'redux';

const initialState = {
    num1: '',
    num2: '',
    result: null,
    error: null,
};

function calculatorReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_NUM1':
            return { ...state, num1: action.payload };
        case 'SET_NUM2':
            return { ...state, num2: action.payload };
        case 'SET_RESULT':
            return { ...state, result: action.payload, error: null };
        case 'SET_ERROR':
            return { ...state, error: action.payload, result: null };
        default:
            return state;
    }
}

export const store = createStore(calculatorReducer);
