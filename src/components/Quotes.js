import React from 'react';
import './Content.css'
import Quote from './Quote';

function Quotes(props) {

    return (
        <section className="quotes">
            {props.quotes.length > 0 ? props.quotes.map((quote) => {
            return (<Quote author={quote.author} quote={quote.quote} id={quote.id} ></Quote>)
            }) : ""}
        </section>
    );
  }

  export default Quotes;