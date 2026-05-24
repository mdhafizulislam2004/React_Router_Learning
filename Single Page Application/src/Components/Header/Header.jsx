import { Link } from "react-router";
import "./Header.css"

const Header = () => {
    return (
        <div>
            <h1>This Is Header Section</h1>
            <nav className="">
                <Link to="/">Home</Link>
                <Link to="mobile">Mobile</Link>
                <Link to="laptop">Laptop</Link>
                <Link to="/">Home</Link>
            </nav>
        </div>
    );
};

export default Header;