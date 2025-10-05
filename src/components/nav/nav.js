import "./nav.css";
import { Link } from "react-router"; 
export const Nav = () => {
    return (
        <>
        <nav className="nav">
            <ul>
              <Link to='/'> <li><a href="/#">Home</a></li></Link>
              <Link to='/'>  <li><a href="/#">Menu</a></li></Link>
              <Link to='/'>  <li><a href="/#">Reservations</a></li></Link>
              <Link to='/'>  <li><a href="/#">Order online</a></li></Link>
              <Link to='/about'>  <li><a href="/#">About</a></li></Link>
              <Link to='/'>  <li><a href="/#">Login</a></li></Link>
            </ul>
        </nav>
        </>
    );

}