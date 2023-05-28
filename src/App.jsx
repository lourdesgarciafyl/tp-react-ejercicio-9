import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import FormularioCitas from './components/FormularioCitas';
import { Calendar } from 'react-bootstrap-icons'; 
function App() {

  return (
    <>
        <Container id='containerPrincipal'>
        <h1 className="display-5 text-center my-3">Administrador pacientes de veterinaria <Calendar></Calendar> </h1>
          <FormularioCitas></FormularioCitas>
        </Container>
    <footer className='bg-dark text-light text-center py-3'>
      <p>&copy; Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App
