import {Row} from "react-bootstrap"
import CardCita from "./CardCita";

const BloqueCitas = () => {

    return(
        <Row xs={2} md={4} className="g-4 mt-3">
            <CardCita></CardCita>
        </Row>
    )
}

export default BloqueCitas;