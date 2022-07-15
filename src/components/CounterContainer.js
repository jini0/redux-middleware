// 💚Counter만 감싸는 CounterContainer임!💚
import React from 'react';
import Counter from './Counter';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { decreaseAsync, increaseAsync } from '../modules/counter';      // 2.
// import { decrease, increase } from '../modules/counter';             // 1.
// *useSelector : 상태값 조회
// *useDispatch : dispatch를 만드는애

const CounterContainer = (prpos) => {
    //스토어의 상태값은 바로 받아오지 못하고 함수로 이용해서 불러와야함 -> 자바스크립트 리덕스에서는 getState()했었음     // 리액트 리덕스에서는 useSelector
    // getState와 같은의미 = useSelector
    const number = useSelector( state=> state.counter );
    const dispatch = useDispatch();
    // 1.
    // const onIncrease = () => {
    //     dispatch(increase());
    // }
    // const onDecrease = () => {
    //     dispatch(decrease());
    // }
    // -> action 객체는 액션생성함수가 만듬!(액션객체를 만들어줌) => 얘를 불러와줘야함! (적어주면 import 자동으로 됨)

    // 2. 카운터 딜레이 주기    -- modules의 Counter.js에서 increaseAsync, decreaseAsync 만들고!! dispatch할 애들 바꿔줌 (Async에서 setTimeout으로 1s 딜레이 줌)
    // 바로 카운터 되지않고 딜레이 걸림! 버튼 누르면
    const onIncrease = () => {
        dispatch(increaseAsync());
    }
    const onDecrease = () => {
        dispatch(decreaseAsync());
    }
    return (
        <Counter number={number} onDecrease={onDecrease} onIncrease={onIncrease} />
    );
};

export default CounterContainer;