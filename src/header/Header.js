import React from "react";
import './Header.css'
import { Link } from "react-router-dom";
const Header = () => {
    return ( 
        <div>
            <div className="navbar" id="main-navbar">
                <Link to ="/"><h2 className="logo" >Wheel</h2></Link>

                <nav>
                    <ul>
                        <li><Link to="budget">Budget</Link></li>
                        <li><a href="">Profile</a></li>
                        <li><a href="">Settings</a></li>
                    </ul>
                </nav>
            </div>
        </div>
     );
}
 
export default Header;