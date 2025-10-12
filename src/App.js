import './CSS/App.css';
import {Header} from './components/header/header';
import { Footer } from './components/footer/footer';
import { Routes, Route} from 'react-router'; 
import Home from './pages/home';
import About from './pages/about';
import Booking from './pages/booking';


function App() {
  return (
    <>
    <div className="container">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/reservations' element={<Booking/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  );
};

export default App;
