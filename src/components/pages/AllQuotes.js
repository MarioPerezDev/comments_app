import React from 'react';
import Header from '../Header';
import Container from '../Container'
import Sorter from '../Sorter'
import Quotes from '../Quotes'


function AllQuotes(props) {

    return (
        <React.Fragment>
            <Header></Header>
            <Container>
                <Sorter></Sorter>
                <Quotes quotes={props.quotes}></Quotes>
            </Container>
        </React.Fragment>
    )
  }
  export default AllQuotes;