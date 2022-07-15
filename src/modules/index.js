// *여러개의 모듈리듀서 만들고 하나로 합쳐서 사용할거임
import { combineReducers } from "redux";            // combineReducers : 모듈리듀서를 합칠 수 있음
import counter from "./counter";
import posts from "./posts";

const rootReducer = combineReducers({ counter, posts });
// const rootReducer = combineReducers({ counter });
export default rootReducer;