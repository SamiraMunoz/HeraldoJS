import React from 'react';
import img4 from '../img/noticia4.jpg';
import { Card, Image } from 'react-bootstrap';


const NoticiaCard = ({noticia}) => {
  return (
    <Card>
    <Card.Header as="h2" className="text-center">{noticia.titulo}</Card.Header>
    <Card.Body>
      <Card.Text className="desarrollo-noticia">
        {noticia.contenido}
      </Card.Text>
      <Image src={img4} rounded />
      <p class="text-center">
        <small>Imagen {noticia.id}. {noticia.textImagen}</small>
      </p>
    </Card.Body>
  </Card>
  )
}

export default NoticiaCard;
