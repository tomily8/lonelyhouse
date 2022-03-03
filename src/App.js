import './App.css';
import {Header} from './component/header'
import {TopImage} from './component/top-image'
import {MainPage} from './component/mainpage'



function App() {
  return (
    <div className="App">
      <Header/>
      <TopImage />
      <MainPage />
    </div>
  );
}

export default App;
