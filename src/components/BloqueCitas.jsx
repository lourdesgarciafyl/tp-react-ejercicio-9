import {Row} from "react-bootstrap"
import CardCita from "./CardCita";

const BloqueCitas = ({arrayCitas, borrarCita}) => {

    return(
        <Row xs={12} md={4} className="g-4 mt-3">
            {arrayCitas.map((cita, indice) => (
                <CardCita itemCita={cita} id={cita.id} indiceCita={indice} borrarCita={borrarCita}></CardCita>
            ))}
        </Row>
    )
}

export default BloqueCitas;