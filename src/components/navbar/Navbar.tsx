import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar: React.FC = () => {
    return (
        <nav>
            <NavLink to="/">home</NavLink>
            <NavLink to="/second">second</NavLink>
            <NavLink to="third">third</NavLink>
            <NavLink to="/input-glich">input-glich</NavLink>
        </nav>
    )
}
export default Navbar;