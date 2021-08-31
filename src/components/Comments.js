import React from 'react';
import './Content.css'
import { Link } from 'react-router-dom';

function Comments(props) {

    return (
        <div className="comments">
            <button>Añadir comentario</button>
           <p>Comentarios</p>
        </div>
    );
  }

  export default Comments;