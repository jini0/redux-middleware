//πνλ¦¬μ  νμ΄μλ μ»΄ν¬λνΈπ
// μλ λ¦¬λμ€λ μ ν μμΉν μ ! (λ¦¬λμ€ μ€ν μ΄μ μμΉν μ !)
// λ¨μ§ λ³΄μ¬μ§λ UIνλ©΄μ!
import React from 'react';

const Counter = ({ number, onIncrease, onDecrease }) => {
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
};

export default Counter;