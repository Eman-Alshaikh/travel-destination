import '../Navbar/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
        <h2>
            <nav className="navbar">
                <Link className="homeelink" to='/'>  Home </Link>
            </nav>
        </h2>
        </>
    );
}

export default Navbar;