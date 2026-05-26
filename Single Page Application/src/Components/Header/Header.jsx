import { NavLink } from "react-router";
import "./Header.css"

const Header = () => {
    return (
        <div>
            <h1>This Is Header Section</h1>
            <nav className="">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobile">Mobile</NavLink>
                <NavLink to="/laptop">Laptop</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/users2">Users2</NavLink>
            </nav>
        </div>
    );
};

export default Header;