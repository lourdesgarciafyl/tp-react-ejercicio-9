import {Row} from "react-bootstrap"
import CardCita from "./CardCita";

const BloqueCitas = ({arrayCitas}) => {

    return(
        <Row xs={2} md={4} className="g-4 mt-3">
            {arrayCitas.map((itemCita, indice) => (
                <CardCita itemCita={itemCita} indiceCita={indice}></CardCita>
            ))}
        </Row>
    )
}

export default BloqueCitas;