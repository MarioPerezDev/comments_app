import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="header-left">
            <Link to="/quotes"><p>Citas</p></Link>
            </div>
            <div className="header-right">
                <p>Todas las citas</p>
                <Link to="/new-quote"><button className="addButton" >Crear</button></Link> 
            </div>
        </div>
    );
  }

  export default Header;