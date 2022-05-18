import './App.css';
import {Header} from './component/header'
import {TopImage} from './component/top-image'
import {MainPage} from './component/mainpage'
import {ArticleList} from './component/articleList'
import {Article} from './component/article'
import {SingleComment} from './component/singleComment';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Connection } from './component/connection';



function App() {
  return (
    <div className="App" id="App">
      <BrowserRouter>
        <Routes>
          <Route path='/lonelyhouse/' element={<Home />}></Route>
          <Route path='/lonelyhouse/page' element={<ArticleInfo />}></Route>
          <Route path='/lonelyhouse/article/*' element={<ShowArticle />}></Route>
          <Route path='/lonelyhouse/alone' element={<Alone />}></Route>
          <Route path='/lonelyhouse/relax' element={<Relax />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home () {
  return (
    <div>
      <Header/>
      <TopImage />
      <MainPage />
    </div>
  )
}

function ArticleInfo () {
  return (
    <div>
      <Header/>
      <ArticleList></ArticleList>
    </div>
  )
}

function ShowArticle () {
  return (
    <div>
      <Header />
      <Article></Article>
    </div>
  )
}

function Alone () {
  return (
    <div>
      <Header />
      <SingleComment />
    </div>
  )
}

function Relax () {
  return (
    <div>
      <Header />
      <Connection></Connection>
    </div>
  )
}

export default App;
