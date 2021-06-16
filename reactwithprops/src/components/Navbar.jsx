import '../css_files/Navbar.css';
import {
    Link
  } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="Navbar">
                <ul>

                    <li> <Link class="active" to="/">Home</Link></li>
                    <li> <Link to="/news">News</Link></li>
                    <li> <Link to="/contact">Contact</Link></li>
                    <li> <Link to="/about">About</Link></li>
                </ul>
            </div>
      </>
    );
  }
  
  export default Navbar;