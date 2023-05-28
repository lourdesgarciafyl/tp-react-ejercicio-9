import { Form, Col, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import BloqueCitas from "./BloqueCitas";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FormularioCitas = () => {
    const [citas, setCitas] = useState([])

    const { register, formState: {errors}, reset , handleSubmit} = useForm()
  
    const apretarEnviar = (data) => {
      console.log(data)
      data.id = uuidv4()
      setCitas([...citas, data])
      Swal.fire(
        "Cita agendada correctamente",
        "No olvides traer el carnet de tu mascota.",
        "success"
      )
      reset()
    }
    const borrarCita = (id) => {
        let copiaArrayCitas = citas.filter((cita) => cita.id !== id);
        setCitas(copiaArrayCitas)
    }  

    return(
        <section>
        <Form noValidate id="formDatos" onSubmit={handleSubmit(apretarEnviar)}>
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
            placeholder="María Lourdes" 
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
              <Form.Text className="text-danger">{""}{errors.fecha?.message}</Form.Text>
            </Form.Group>
          </Col>

          <Col md={5} className="mt-2">
            <Form.Group controlId="validarHora">
            <Form.Label>Hora</Form.Label>
            <Form.Control 
            type="time" 
            placeholder="16:30" 
            required 
            {...register(`hora`,{
              required: "Campo obligatorio",
              })} />
              <Form.Text className="text-danger">{""}{errors.hora?.message}</Form.Text>
            </Form.Group>
          </Col>

          <Col md={10} className="mt-2">
            <Form.Group controlId="validarSintomas">
            <Form.Label>Sintomas</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Por ejemplo: dolor de panza y cansancio" 
            as="textarea"
            rows={4}
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
      <BloqueCitas arrayCitas={citas} borrarCita={borrarCita}> </BloqueCitas>
      </section>
    )
}

export default FormularioCitas;