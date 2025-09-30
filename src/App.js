import { Header } from "./components/header/header";
import Main from "./components/main/main";
import {Footer} from "./components/footer/footer";
import './CSS/App.css';

function App() {
  return (
    <>
      <div className="content">
        <Header/>
        <Main>Main</Main>
        <Footer/>
      </div>
    </>
  );
}

export default App;
