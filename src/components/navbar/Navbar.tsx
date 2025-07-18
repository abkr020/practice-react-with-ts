import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar: React.FC = () => {
    return (
        <nav>
            <NavLink to="/">home</NavLink>
            <NavLink to="/emp-database-management">emp</NavLink>
            <NavLink to="third">third</NavLink>
        </nav>
    )
}
export default Navbar;