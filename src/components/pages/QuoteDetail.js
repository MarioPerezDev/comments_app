import React from 'react';
import Header from '../Header';
import { useParams, Route, Link } from 'react-router-dom'
import Container from '../Container';
import Comments from '../Comments';
import '../Content.css'


function QuoteDetail(props) {
    const params = useParams();

    const quote = props.quotes.find((quote) => quote.id === params.quoteId);

    if(!quote) {
        return <p>No quote found</p>
    }
    return (
        <React.Fragment>
            <Header></Header>
            <Container>
                <div className="quote-container">                  
                    <p className="quote-text quote-text-content">{quote.quote}</p>
                    <p className="quote-text author">{quote.author}</p>
                </div>
                    <Route path={`/quotes/${params.quoteId}`} exact>
                        <Link className="btn-add-cita" to={`/quotes/${params.quoteId}/comments`}>Ver Comentarios</Link>
                    </Route>                    
                    <Route path={`/quotes/${params.quoteId}/comments`}>
                        <Comments/>
                    </Route>

            </Container>
        </React.Fragment>
    );
  }

  export default QuoteDetail;