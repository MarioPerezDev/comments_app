import React from 'react';
import './Content.css'
import { Link } from 'react-router-dom';

function Quote(props) {

    return (
        <div className="quote">
            <div className="quote-left">
                <p>{props.author}</p>
                <p>{props.quote}</p>
            </div>
            <div className="quote-right">
                <Link to={`/quotes/${props.id}`}> <button className="btn-add-cita">Ver Cita</button></Link>
               
            </div>           
        </div>
    );
  }

  export default Quote;