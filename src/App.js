import './CSS/App.css';
import {Header} from './components/header/header';
import { Footer } from './components/footer/footer';
import Home from './pages/home';
import About from './pages/about';
import { Routes, Route} from 'react-router'; 

function App() {
  return (
    <>
    <div className="grid-container">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  );
};

export default App;
