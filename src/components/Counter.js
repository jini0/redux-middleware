//💚프리젠테이셔널 컴포넌트💚
// 얘랑 리덕스는 전혀 안친한 애! (리덕스 스토어와 안친한 애!)
// 단지 보여지는 UI화면임!
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