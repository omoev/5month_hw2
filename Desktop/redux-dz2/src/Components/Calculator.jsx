
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Calculator = () => {
    const dispatch = useDispatch();
    const { num1, num2, result, error } = useSelector((state) => state);

    const handleInputChange = (e, field) => {
        const value = e.target.value;
        dispatch({ type: `SET_${field}`, payload: value });
    };

    const performOperation = (operator) => {
        if (num1 === '' || num2 === '') {
            dispatch({ type: 'SET_ERROR', payload: 'Одно из полей пустое' });
            return;
        }

        const parsedNum1 = parseFloat(num1);
        const parsedNum2 = parseFloat(num2);

        switch (operator) {
            case '+':
                dispatch({ type: 'SET_RESULT', payload: parsedNum1 + parsedNum2 });
                break;
            case '-':
                dispatch({ type: 'SET_RESULT', payload: parsedNum1 - parsedNum2 });
                break;
            case '*':
                dispatch({ type: 'SET_RESULT', payload: parsedNum1 * parsedNum2 });
                break;
            case '/':
                if (parsedNum2 === 0) {
                    dispatch({ type: 'SET_ERROR', payload: 'Деление на ноль запрещено' });
                } else {
                    dispatch({ type: 'SET_RESULT', payload: parsedNum1 / parsedNum2 });
                }
                break;
            default:
                break;
        }
    };

    return (
        <div className="calculator-container">
            <div className="input-container">
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => handleInputChange(e, 'NUM1')}
                    placeholder="Введите число 1"
                />
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => handleInputChange(e, 'NUM2')}
                    placeholder="Введите число 2"
                />
            </div>

            <div className="button-container">
                <button onClick={() => performOperation('+')}>+</button>
                <button onClick={() => performOperation('-')}>-</button>
                <button onClick={() => performOperation('*')}>*</button>
                <button onClick={() => performOperation('/')}>/</button>
            </div>

            {result !== null && <h2 className="result">Результат: {result}</h2>}
            {error && <h2 className="error" style={{ color: 'red' }}>{error}</h2>}
        </div>
    );
};

export default Calculator;