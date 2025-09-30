import { Nav } from "../nav/nav";
import "./header.css";

export const Header = () => {
    return(
        <>
            <header className="header"><img src="/assets/Logo.svg" alt="Little Lemon logo" /><Nav/></header>
        </>
    );
};