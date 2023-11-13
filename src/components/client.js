//import { Link, animateScroll as scroll } from 'react-scroll'
//import {Container,Row,Col} from 'react-bootstrap';
//import Button from 'react-bootstrap/Button';
import Navbar1 from '../components/Navbar1';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import '../components/client.css';
import Footer from '../components/Footer';
import Form from 'react-bootstrap/Form';
//import Form from 'react-bootstrap/Form';

function Client() {


  return (
    <>
    <Navbar1/>
        
    <section  className='mt-5'>

      
        
      <img src={require("./Images/client.jpg")} alt=".."  className='img_contact'/>
      <h3 className='mt-5' style={{textAlign:"center"}}>Want our service, Please fill the details..</h3>
  <div class="bg-img1 mt-5" style={{height:"550px"}}>
      <Form  className="container_client">
    <h1 className="about_color title_client"><u>Register</u></h1>
    <Form.Group  controlId="formGridName" style={{margin:'10px'}}>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" />
        </Form.Group>
        
        <Form.Group controlId="formGridEmail" style={{margin:'10px'}}>
          <Form.Label>Email ID</Form.Label>
          <Form.Control type="email" placeholder="Enter your full name" />
        </Form.Group>
        
        <Form.Group   controlId="formGridAddress2" style={{margin:'10px'}}>
        <Form.Label>Contact No.</Form.Label>
        <Form.Control type='text' placeholder="91-1234567890" />
      </Form.Group>
      <Form.Group  controlId="formGridAdd" style={{margin:'10px'}}>
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter your address" />
        </Form.Group>
        
        
        <Form.Group controlId="formGridEmail" style={{margin:'5px'}}>
          <Form.Label>Domain</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Fintech</option>
            <option>Healthcare/Pharma</option>
            <option>Mechanical Supply Chain Management</option>
            <option>Aurospace Industries</option>
            
          </Form.Select>
        </Form.Group>
        
        
        
        <br/>

      <center>
      <Button variant="primary" type="submit" style={{backgroundColor:'blue'}}>
        Submit
      </Button>
      </center>
     </Form>
    </div>

    
        </section>
        <Footer/>
        </>

  );
}
export default Client;
