import React from 'react';
import Container from '../Container';
import Header from '../Header';

function NewQuote(props) {
    return (
        <React.Fragment>
            <Header></Header>
            <Container>
                <label>Autor</label>
                <input type="text"></input>
                <label>Cita</label>
                <input type="text"></input>
            </Container>
        </React.Fragment>

    );
  }

  export default NewQuote;