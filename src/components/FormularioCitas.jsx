import { Form, Col, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'

const FormularioCitas = () => {
    const { register, formState: {errors}, reset , handleSubmit} = useForm()
  
    const apretarEnviar = (data) => {
      console.log(data)
      Swal.fire(
        "Cita agendada correctamente",
        "No olvides traer el carnet de tu mascota.",
        "success"
      )
      reset()
    }

    return(
        <Form id="formDatos" onSubmit={handleSubmit(apretarEnviar)}>
        <h2 className="fs-5 lead text-center">Llenar el formulario para crear una cita</h2>
        <Row className="justify-content-center">
          <Col md={5} className="mt-2">
            <Form.Group controlId="validaronNombreMascota">
            <Form.Label>Nombre de mascota</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Firulais" 
            required 
            {...register(`nombreMascota`,{
              required: "Campo obligatorio",
              minLength:{
                value: 3,
                message: "Cantidad minima de caracteres: 3"
              },
              maxLength:{
                value: 50,
                message: "Cantidad maxima de caracteres: 50"
              }
              })}/>
              <Form.Text className="text-danger">{errors.nombreMascota?.message}</Form.Text>
            </Form.Group>
          </Col>

          <Col md={5} className="mt-2">
            <Form.Group controlId="validarNombreDuenio">
            <Form.Label>Nombre del dueño/a</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Juan Perez" 
            required 
            {...register(`nombreDuenio`,{
              required: "Campo obligatorio",
              minLength:{
                value: 3,
                message: "Cantidad minima de caracteres: 3"
              },
              maxLength:{
                value: 50,
                message: "Cantidad maxima de caracteres: 50"
              }})} />
              <Form.Text className="text-danger">{errors.nombreDuenio?.message}</Form.Text>
            </Form.Group>
          </Col>
          
          <Col md={5} className="mt-2">
            <Form.Group controlId="validarFecha">
            <Form.Label>Fecha</Form.Label>
            <Form.Control 
            type="date" 
            placeholder="10/05/2023" 
            required 
            {...register(`fecha`,{
              required: "Campo obligatorio",
              })} />
              <Form.Text className="text-danger">{errors.fecha?.message}</Form.Text>
            </Form.Group>
          </Col>

          <Col md={5} className="mt-2">
            <Form.Group controlId="validarHora">
            <Form.Label>Hora</Form.Label>
            <Form.Control 
            type="hour" 
            placeholder="16:30" 
            required 
            {...register(`hora`,{
              required: "Campo obligatorio",
              })} />
              <Form.Text className="text-danger">{errors.hora?.message}</Form.Text>
            </Form.Group>
          </Col>

          <Col md={10} className="mt-2">
            <Form.Group controlId="validarSintomas">
            <Form.Label>Sintomas</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Dolor de panza y cansancio" 
            required 
            {...register(`sintomas`,{
              required: "Campo obligatorio",
              minLength:{
                value: 3,
                message: "Cantidad minima de caracteres: 3"
              },
              maxLength:{
                value: 200,
                message: "Cantidad maxima de caracteres: 200"
              }})} />
              <Form.Text className="text-danger">{errors.sintomas?.message}</Form.Text>
            </Form.Group>
          </Col>

        </Row>
        <div className="text-center">
        <Button className="mt-3 text-center" variant="primary" type="submit">
            Agregar nueva cita
        </Button>
        </div>
      </Form>
    )
}

export default FormularioCitas;