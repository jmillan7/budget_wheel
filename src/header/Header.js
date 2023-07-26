import React from "react";
import './Header.css'
const Header = () => {
    return ( 
        <div>
            <div className="navbar" id="main-navbar">
                <h2 className="logo">Home</h2>

                <nav>
                    <ul>
                        <li><a href="">Bills</a></li>
                        <li><a href="">Profile</a></li>
                        <li><a href="">Settings</a></li>
                    </ul>
                </nav>
            </div>
        </div>
     );
}
 
export default Header;