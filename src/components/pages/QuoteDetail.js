import React from 'react';
import Header from '../Header';
import { useParams, Route } from 'react-router-dom'
import Container from '../Container';
import Comments from '../Comments';


function QuoteDetail(props) {
    const params = useParams();
    return (
        <React.Fragment>
            <Header></Header>
            <Container>
                {params.quoteId}
                <Route path={`/quotes/${params.quoteId}/comments`}>
                    <Comments/>
                </Route>
            </Container>
        </React.Fragment>
    );
  }

  export default QuoteDetail;