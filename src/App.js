import React, { Fragment } from 'react'
import Header from './components/Header';
import NavbarB from './components/Navbar';
import NoticiaPrincipal from './components/NoticiaPrincipal';
import NoticiaCard from './components/NoticiaCard';
import FormSug from './components/Form';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './css/App.css';
import './css/Fonts.css';


function App() {
  const noticias = [
    {
      id: 1,
      titulo: "Suspenden por dos meses cobro de peajes a camioneros en Cartagena",
      contenido: "Una solución parcial al paro de camioneros que desde el lunes empezó de manera ininterrumpida en la zona industrial de Cartagena se dio este jueves, luego de que los representantes de la Concesión Vial de Cartagena anunciaran una exoneración por dos meses del cobro del peaje a los vehículos de carga pesada. El acuerdo se logró durante la mesa de diálogos convocada por la Defensoría Regional de Bolívar que ofreció mediar entre la Alcaldía, la concesión, el comité Anti peajes y representantes de los transportadores.",
      collapse: "Una solución parcial al paro de camioneros que desde el lunes empezó de manera ininterrumpida en la zona industrial de Cartagena se dio este jueves, luego de que los representantes de la Concesión Vial de Cartagena anunciaran una exoneración por dos meses del cobro del peaje a los vehículos de carga pesada. El acuerdo se logró durante la mesa de diálogos convocada por la Defensoría Regional de Bolívar que ofreció mediar entre la Alcaldía, la concesión, el comité Anti peajes y representantes de los transportadores.",
      imagen: "noticia1",
      textImagen: "Firma del acuerdo"
    },
    {
      id: 2,
      titulo: "Comienza la vacunación de los mayores de 80 en el Atlántico",
      contenido: "La llegada de nuevas dosis de vacunas contra la covid-19 permitirá al departamento del Atlántico continuar con el plan de vacunación del personal de la salud de la primera línea de atención y de los adultos mayores de 80 años. Estos últimos comienzan este viernes en Puerto Colombia y Galapa, lo mismo que en el resto de municipios fuera del área metropolitana. La secretaria de Salud del Atlántico, Alma Solano, indicó que las 1.667 vacunas de Sinovac que envió el Gobierno serán distribuidas a todos los municipios con fórmula establecida por el Ministerio de Salud",
      collapse: " Una solución parcial al paro de camioneros que desde el lunes empezó de manera ininterrumpida en la zona industrial de Cartagena se dio este jueves, luego de que los representantes de la Concesión Vial de Cartagena anunciaran una exoneración por dos meses del cobro del peaje a los vehículos de carga pesada. El acuerdo se logró durante la mesa de diálogos convocada por la Defensoría Regional de Bolívar que ofreció mediar entre la Alcaldía, la concesión, el comité Anti peajes y representantes de los transportadores.",
      imagen: "noticia2",
      textImagen: "Llegada de vacunas"
    }
  ];

  const noticiasCard = [
    {
      id: 3,
      titulo: "Disponibles 150 mil subsidios de vivienda hasta 202",
      contenido: " De los 200 mil subsidios para compra de vivienda nueva que fueron anunciados por el Gobierno nacional ya se han entregado 50 mil y aún quedan 150 mil disponibles.El ministro de Vivienda, Jonathan Malagón, aseguró que del total de subsidios adjudicados desde que llegó la pandemia al país 40 mil corresponden a Viviendas de Interés Social (VIS) y 10 mil para viviendas No VIS.",
      imagen: "noticia2",
      textImagen: "Beneficiaria de vivienda"
    },
    {
      id: 4,
      titulo: "En el Real Madrid ya no me quiere nadie: James Rodríguez",
      contenido: "James Rodríguez, centrocampista colombiano del Everton, descartó que su retirada se vaya a producir en un club de su país y aseguró que en el Real Madrid ya no le “quiere nadie” tras cerrar su segunda etapa en el club blanco. “Ya no me quiere nadie ahí”, repitió en dos ocasiones en un directo en Twitch mientras jugaba a un videojuego.",
      imagen: "noticia2",
      textImagen: "James Rodríguez jugador del Everton"
    }
  ];

  return (
    <Fragment>
      <Header/>
      <NavbarB/>

      <Container>
        {noticias.map(noticia =>(
          <section>
            <NoticiaPrincipal noticia={noticia}/>
          </section>
        ))}

        <section>
          <Row>
            {noticiasCard.map(noticia =>(
              <Col sm={6}>
                <NoticiaCard noticia={noticia}/>
              </Col>
            ))}
          </Row>
        </section>
        <FormSug/>
      </Container>
      <Footer/>
    </Fragment>
  );
}

export default App;
