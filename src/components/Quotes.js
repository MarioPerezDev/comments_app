import React from 'react';
import './Content.css'
import Quote from './Quote';

function Quotes() {
    let quotes = [{
        author: "Mario",
        text: "Prueba de un texto cualquiera",
        id: 1
    }]

    console.log(quotes)

    return (
        <section className="quotes">
            {quotes.length > 0 ? quotes.map((quote) => {
            return (<Quote author={quote.author} text={quote.text} id={quote.id} ></Quote>)
            }) : ""}
        </section>
    );
  }

  export default Quotes;