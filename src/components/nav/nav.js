import "./nav.css";
import { NavLink } from "react-router"; 
export const Nav = () => {
    return (
        <>
        <nav className="nav">
              <NavLink to='/'>Home</NavLink>
               <NavLink to='/about'>About</NavLink>
              <NavLink to='/about'>Menu</NavLink>
              <NavLink to='/about'>Reservations</NavLink>
              <NavLink to='/about'>Order online</NavLink>
        </nav>
        </>
    );

}