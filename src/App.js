import { Header } from "./components/header/header";
import Main from "./components/main/main";
import {Footer} from "./components/footer/footer";
import { Hero } from "./components/hero/hero";
import './CSS/App.css';

function App() {
  return (
    <>
      <div className="grid-container">
        <Header/>
        <Hero/>
        <Main/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
