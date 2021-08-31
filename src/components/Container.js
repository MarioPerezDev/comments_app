import React from 'react';
import './Header.css'

function Container(props) {
    return (
        <div className="app-container">
            {props.children}
        </div>
    );
  }

  export default Container;