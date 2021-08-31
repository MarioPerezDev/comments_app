import React from 'react';
import './Content.css'
import { Link } from 'react-router-dom';

function Quote(props) {

    return (
        <div className="quote">
            <div className="quote-left">
                <p>{props.author}</p>
                <p>{props.text}</p>
            </div>
            <div className="quote-right">
                <Link to={`/quotes/${props.id}`}> <button className="addButton">Ver Cita</button></Link>
               
            </div>           
        </div>
    );
  }

  export default Quote;