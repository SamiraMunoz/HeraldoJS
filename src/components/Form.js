import React from 'react';
import { Col, Row, Button, Form } from 'react-bootstrap';

function FormSug() {
  return (
    <section class="text-center">
      <h3>Deja tu comentario</h3>
      <Form className="form-horizontal">
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email:
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="email@example.com" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Comentario
          </Form.Label>
          <Col sm="10">
            <Form.Control as="textarea" rows={3} placeholder="Puedes dejar acá tus dudas, inquietudes o sugerencias" />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
            <Col>
              <Button type="submit" variant="outline-danger" >Enviar</Button>
            </Col>
          </Form.Group>
      </Form>
    </section>
  )
}

export default FormSug;
