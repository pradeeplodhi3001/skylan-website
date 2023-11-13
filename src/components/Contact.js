//import { Link, animateScroll as scroll } from 'react-scroll'
//import {Container,Row,Col} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
//import Navbar1 from '../components/Navbar1';
//import Footer from '../components/Footer';
import '../components/client.css';
import Form from 'react-bootstrap/Form';
import Navbar1 from '../components/Navbar1';

import Footer from '../components/Footer';

function Contact() {


  return (
    <>
           <Navbar1/>

    <section  className='mt-5'>
      
       <img src={require("./Images/contact1.jpg")} alt=".."  className='img_contact'/>
       <h3> To Create a Connection with us,Please Fill The Form..</h3>
       <div className='cont_contact '>
        
       <div style={{padding:'5px'}} className=' main_contact'>
        <div className='box'>
        <img src={require("./Images/skylan_icon.png")} alt=".." margin='5px'className='logo_conatct'/>
        <address>Indore</address>
        <iframe title="cmp_map" className='iframe_conatct img_iframe_contact' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5175053343964!2d73.84020902479165!3d18.64075946549278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b874e8c63aa9%3A0xdcf679e114189d34!2sSector%20Number%207%2C%20Bhosari%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1692785837526!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
        
        

       <div className='sub_contact'>
       <h3 style={{color:'blueviolet'}}>Enter your details here..</h3>
                <Form>
      
        
                <Form.Group  controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" required  />
        </Form.Group>
        
        <Form.Group controlId="formGridEmail">
          <Form.Label>Email ID</Form.Label>
          <Form.Control type="email" placeholder="Enter your email id" required  />
        </Form.Group>
        
        <Form.Group   controlId="formGridAddress2">
        <Form.Label>Contact No.</Form.Label>
        <Form.Control type="text" placeholder="1234567890(10 digits only)" required pattern='[+ 0-9]{10}' />
        
      </Form.Group>

       
        <Form.Group  controlId="formGridAdd">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter your address" required  />
          
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control required/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose..." required>
            <option>Choose...</option>
            <option>Maharashtra</option>
            <option>Madhya Pradesh</option>
            <option>Rajsthan</option>
            <option>Aandhra Pradesh</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control required />
        </Form.Group>

        <Form.Group  controlId="formGridAdd">
          <Form.Label>Any query Or suggestion?</Form.Label>
          <Form.Control type="text"  required  />
        </Form.Group>
           <br/><br/>
      <center>
      <Button variant="primary" type="submit" className='btn2' style={{backgroundColor:'blue'}}>
        Submit
      </Button>
      </center>
    </Form> 
       </div>
</div>

       {/*<div className=' mt-5 mission_back box_contact' >
        <Row>
        
        <Col style={{padding:'5px'}} className='col_contact'>
        <img src={require("./Images/skylan_icon.png")} alt=".." margin='5px'className='logo_conatct'/>
        <address>Indore</address>
        <iframe title="cmp_map" className='iframe_conatct img_iframe_contact' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.5175053343964!2d73.84020902479165!3d18.64075946549278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b874e8c63aa9%3A0xdcf679e114189d34!2sSector%20Number%207%2C%20Bhosari%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1692785837526!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Col>
        <Col style={{padding:'5px'}}>
       <h3 style={{color:'blueviolet'}}>Enter your details here..</h3>
                <Form>
      
        
                <Form.Group  controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" required  />
        </Form.Group>
        
        <Form.Group controlId="formGridEmail">
          <Form.Label>Email ID</Form.Label>
          <Form.Control type="email" placeholder="Enter your email id" required  />
        </Form.Group>
        
        <Form.Group   controlId="formGridAddress2">
        <Form.Label>Contact No.</Form.Label>
        <Form.Control type="text" placeholder="1234567890(10 digits only)" required pattern='[+ 0-9]{10}' />
        
      </Form.Group>

       
        <Form.Group  controlId="formGridAdd">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter your address" required  />
          
        </Form.Group>
        
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control required/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose..." required>
            <option>Choose...</option>
            <option>Maharashtra</option>
            <option>Madhya Pradesh</option>
            <option>Rajsthan</option>
            <option>Aandhra Pradesh</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control required />
        </Form.Group>

        <Form.Group  controlId="formGridAdd">
          <Form.Label>Any query Or suggestion?</Form.Label>
          <Form.Control type="text"  required  />
        </Form.Group>
           <br/><br/>
      
      <Button variant="primary" type="submit" style={{backgroundColor:'blue'}}>
        Submit
      </Button>
    </Form>
    </Col>
    
    </Row>
  </div>*/}
            
        </section>
        <Footer/>
        </>
  );
}
export default Contact;
