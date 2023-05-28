import {Card, Col} from "react-bootstrap"
import { XCircle } from "react-bootstrap-icons";

const CardCita = ({itemCita}) => {
    const {nombreMascota, nombreDuenio, fecha, hora, sintomas} = {... itemCita} 
    return (
        <Col>
          <Card className="mb-2">
            <Card.Body className="text-center">
              <Card.Title>Mascota: {nombreMascota} <br/> Dueño/a: {nombreDuenio} </Card.Title>
              <hr />
              <Card.Text className="py-2" id="fondoCard">
                <b>Fecha: {fecha}</b>
                <br />
                <b>Hora: {hora}</b>
                <br />
                <b>Sintomas: {sintomas}</b>
              </Card.Text>
              <button className="btn btn-danger rounded-5 my-2"><XCircle className="text-white"/></button>
            </Card.Body>
          </Card>
        </Col>
    )
}

export default CardCita;