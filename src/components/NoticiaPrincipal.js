import React from 'react';
import img1 from '../img/noticia1.jpeg';
import { Container, Row, Col, Button, Image, Accordion  } from 'react-bootstrap';

const Principal = ({noticia}) => {
  return (
    <Container>
      <Accordion>
        <Row>
          <Col sm={8}>
            <h2 class="text-center">{noticia.titulo}</h2>
            <p class="desarrollo-noticia">
              {noticia.contenido}
            </p>
            <Accordion.Toggle as={Button} variant="danger" eventKey={noticia.id}>
            Leer más
            </Accordion.Toggle>
          </Col>
          <Col sm={4}>
            <Image src={img1} rounded />
            <p class="text-center">
              <small>Imagen {noticia.id}. {noticia.textImagen}</small>
            </p>
          </Col>
        </Row>
        <Row>
        <Accordion.Collapse eventKey={noticia.id}>
          <Col>
          <p class="desarrollo-noticia">
            {noticia.collapse}
          </p>
          </Col>
        </Accordion.Collapse>
        </Row>
      </Accordion>
    </Container>
  )
}

export default Principal;
