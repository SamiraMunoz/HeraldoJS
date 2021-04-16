import React from 'react';
import { Col, Row } from 'react-bootstrap';

function Footer() {
  return (
    <footer class="text-center">
      <Row>
        <Col>
          <p>© 2021 - ResDigital</p>
          <p><a href="#">resdigital.com</a></p>
          <p>Todos los derechos reservados</p>
          <p>Política de privacidad</p>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer;
