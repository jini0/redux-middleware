// 7.14-15
// !!!메모장 참고하기!!!
// 💛7.15 data.json 폴더에 api폴더 내 posts.js에서 const posts라는 posts변수에 있는 배열들을 가져다가 넣어준다!(따옴표 다 적어주기!)
// 그리고 나서 npx json-server ./data.json --port 4000  를 터미널에 작성하여 port를 연결?해준다(일종의 서버연결을 여기서 바로!!(서버 따로 안만들고))
// 이렇게 되면 서버가 구동이 됨! ---> 서버가 돌아가는 상태에서 npm start를 해줘야 에러가 발생하지 않음✔
// yarn add axios or npm install axios로 axios도 설치해준다!
// 그 상태에서 터미널에 + 를 추가해서!(터미널을 추가함)(터미널을 두개)
// npm start를 해준다!(맨 오른쪽에 터미널(node)가 2개가 떠야한다)💛
import './App.css';
import CounterContainer from './components/CounterContainer';
// import PostListContainer from './components/PostListContainer';
import { Routes, Route } from 'react-router-dom';
import PostListPage from './page/PostListPage';
import PostPage from './page/PostPage';

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <Routes>
        <Route path="" element={<PostListPage/>}/>
        <Route path="/:id" element={<PostPage/>}/>
      </Routes>
      {/* <PostListContainer /> */}
    </div>
  );
}

export default App;
