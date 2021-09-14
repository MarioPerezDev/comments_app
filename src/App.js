import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import AllQuotes from './components/pages/AllQuotes';
import QuoteDetail from './components/pages/QuoteDetail';
import NewQuote from './components/pages/NewQuote';
import { useState } from 'react'

function App() {
  const [quotes, setQuotes] = useState([{
    author: "Mario",
    quote: "Prueba de un texto cualquiera",
    id: 'q1'
}])

  const addQuotesHandler = (quote) =>{
    setQuotes(prevQuotes => {
      return [...prevQuotes, quote];
    });
  }

  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to='/quotes'/>
      </Route>
      <Route path="/quotes" exact>
        <AllQuotes quotes={quotes}></AllQuotes>
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetail quotes={quotes}></QuoteDetail>
      </Route>
      <Route path="/new-quote">
        <NewQuote onNewQuote={addQuotesHandler}></NewQuote>
      </Route>
      <Route path="*">
        <p>Page not found</p>
      </Route>
    </Switch>
  );
}

export default App;
