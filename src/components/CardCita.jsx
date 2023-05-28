import {Card, Col} from "react-bootstrap"
import { XCircle } from "react-bootstrap-icons";

const CardCita = () => {
    return (
        <Col>
          <Card className="mb-2">
            <Card.Body className="text-center">
              <Card.Title>Mascota: <br/> Dueño/a: </Card.Title>
              <hr />
              <Card.Text className="py-2" id="fondoCard">
                <b>Fecha: </b>
                <br />
                <b>Hora: </b>
                <br />
                <b>Sintomas: </b>
              </Card.Text>
              <button className="btn btn-danger rounded-5 my-2"><XCircle className="text-white"/></button>
            </Card.Body>
          </Card>
        </Col>
    )
}

export default CardCita;