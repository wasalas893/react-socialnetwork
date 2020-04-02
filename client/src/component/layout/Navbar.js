import React from 'react'
import {Link} from 'react-router-dom';

 const Navbar = () => {
    return (

      
        <nav className="navbar bg-dark">
      <h1>
        <Link to="/">DevConnector</Link>
      </h1>
      <ul>
        <li><Link to="/profile">Developers</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/post">posts</Link></li>
        <li><Link to="/login">Logout</Link></li>
      </ul>
    </nav>
    );
}
export default Navbar;
