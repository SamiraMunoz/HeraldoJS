import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Header() {
  return (
    <Container fluid>
      <header class="mt-3 sticky-top">
        <Row>
          <Col>
            <div class="text-center bold">
              <h3 id="titulo-principal">EL HERALDO</h3>
            </div>
          </Col>
        </Row>
      </header>
    </Container>
  )
}

export default Header;
