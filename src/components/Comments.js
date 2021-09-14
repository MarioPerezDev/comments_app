import React from 'react';
import './Content.css'

function Comments(props) {

    return (
        <div className="comments">
            <button className="addButton">Añadir comentario</button>
           <p style={{textAlign: "center"}}>Comentarios</p>
        </div>
    );
  }

  export default Comments;