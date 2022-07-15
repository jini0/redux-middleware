// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise  : Promise 참고하기
// https://balmostory.tistory.com/65
// *promise() 객체는 콜백 함수의 인자로 resolve와 reject를 가질 수 있습니다. 
// *성공하면 resolve 실패하면 reject인데, resolve만 우린 해줄거임!
// n 밀리세컨드동안 기다리는 프로미스를 만들어주는 함수         / cf. 1000밀리세컨드 = 1초
// const sleep = n => new Promise(resolve => setTimeout(resolve, n));

//7.15
// yarn add axios 나 npm install axios 를 설치해준다!
import axios from "axios";

// data.json폴더에 넣어준다!!!  --> npx json-server ./data.json --port 4000 터미널에 설치
// 그리고 나서 크롬에 localhost:4000/posts 하면 이 내용들을 불러옴!!!
// const posts = [
//     {
//         id:1,
//         title: "리덕스 미들웨어를 공부합시다.",
//         body: "리덕스 미들웨어를 만들어 봅시다."
//     },
//     {
//         id:2,
//         title: "redux-thunk를 사용해봅시다.",
//         body: "redux-thunk를 사용해서 비동기 작업을 처리해봅시다."
//     },
//     {
//         id:3,
//         title: "redux-saga도 공부해봅시다.",
//         body: "나중엔 redux-saga를 사용해서 비동기 작업을 처리해보세요."
//     }
// ]

// 포스트 목록을 가져오는 비동기함수
export const getPosts = async () => {
    // await sleep(500);    // 0.5초 쉬기(기다리기) / 얘가 없으면 바로 return해서 쉬게해주려고!
    // return posts;
    //7.15
    const response = await axios.get("http://localhost:4000/posts");
    return response.data;
}
// ID로 포스트를 조회하는 비동기함수
export const getPostById = async id => {                      // (id) 소괄호 생략해서 그냥 id만 적어준고
    // await sleep(500);    // 0.5초 쉬기(기다리기) / 얘가 없으면 바로 return해서 쉬게해주려고!
    // return posts.find(post => post.id === id);         // id로 찾아서 반환
    // // find() : 해당하는거 하나만 찾는애  / cf. filter() : 해당하는거 다 찾는애
    //7.15
    const response = await axios.get("http://localhost:4000/posts");
    return response.data.find(post => post.id === id ); 
}