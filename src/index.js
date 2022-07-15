// 메모장 참고(7.14)
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';     // { createStore } 이렇게 하면 줄이 쳐지는거... -> 얘를 이제 권장하지 않음(동작이 안하진 않음)  --> '리덕스 튤키트'를 권장함
                                                                                // legacy_createStore as  이걸 createStore 앞에 적어주면 줄은 안그어짐
import rootReducer from './modules';
import { Provider } from 'react-redux';
import myLogger from './middlewares/myLogger';
import { composeWithDevTools } from 'redux-devtools-extension';                 // chrome에 확장프로그램으로 Redux-Devtools를 설치하고, react 터미널에서도 npm add redux-devtools-extension 해줘야 사용할 수 있음 
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';                               // Routes와 Route 사용하기 위해 BrowserRouter를 import하고 App을 감싸줌!

//3. DevTools 적용하기 composeWithDevTools(미들웨어(미들웨어이름))
//2. 미들웨어 적용하기 applyMiddleware(미들웨어이름) - 이걸 써줘야 미들웨어 쓸 수 있음!
//1. 스토어 만들기
const store = createStore(rootReducer, 
  composeWithDevTools(applyMiddleware(ReduxThunk,myLogger)));     
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(myLogger)));     // 미들웨어가 여러개면, (myLogger, 미들웨어이름, 미들웨어이름...) 안에 다 적어주면 됨!
// 여기서 redux-thunk 사용해주기 위해서 npm add redux-thunk 설치해주고 여기에 ReduxThunk를 앞에 붙여주고 import 해주기!
const root = ReactDOM.createRoot(document.getElementById('root'));
//<Provider>컴퍼넌트 넣어서 App을 감싸주기
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// cf. https://ko.redux.js.org/ 에서 리덕스 툴키트 볼 수 있음!!(이 사이트 아래에 )
// Redux Toolkit -- 효율적인 Redux 개발을 위한 모든 것을 제공하는 공식 도구