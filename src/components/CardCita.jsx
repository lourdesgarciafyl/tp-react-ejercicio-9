import {Card, Col} from "react-bootstrap"

const CardCita = ({itemCita, borrarCita}) => {
    const {id, nombreMascota, nombreDuenio, fecha, hora, sintomas} = {... itemCita} 
    return (
        <Col>
          <Card className="mb-2">
            <Card.Body className="px-1">
              <Card.Title className="ps-2">Mascota: {nombreMascota} <br/> Dueño/a: {nombreDuenio} </Card.Title>
              <hr />
              <Card.Text className="py-2 ps-2 mx-0" id="fondoCard">
                <b>Fecha: </b>{fecha}
                <br />
                <b>Hora: </b>{hora}
                <br />
                <b>Sintomas: </b>{sintomas}
              </Card.Text>
              <div className="text-center">
              <button className="btn btn-danger rounded-3 my-2" onClick={() => borrarCita(id)}>Eliminar cita</button>
              </div>
            </Card.Body>
          </Card>
        </Col>
    )
}

export default CardCita;