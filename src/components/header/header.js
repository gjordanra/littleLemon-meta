import { Nav } from "../nav/nav";
import "./header.css";

export const Header = () => {
    return(
        <>
            <header className="header">
                <div>
                    <img className="logo" src="/assets/Logo.svg" alt="Little Lemon logo" />
                    <Nav/>
                </div>
            </header>
        </>
    );
};