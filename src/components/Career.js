//import { Link, animateScroll as scroll } from 'react-scroll'
import {  Button, Container, Card, Form } from "react-bootstrap";


import Navbar1 from '../components/Navbar1';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import '../components/client.css';
//import './career.css';
import Footer from '../components/Footer';



function Career() {


  return (
    <>
    <Navbar1/>
        
    <section  >
    

    <div className="hero-image">
       <img src={require("./Images/career.jpg")} alt=".." className='img-h1'/>
       </div>
       <Container className="mt-5 " >
        
          {/*<Col>
          <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                    


                <div className="mb-3 mt-md-4">
                
                  <div className="mb-3">
                  
                 <img src={require("./Images/career.jpg")} alt=".." />
                 
                </div>
                </div>
              </Card.Body>
            </Card>
  </Col>*/}
          
          <div className="align_career">
      
          <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                    
                 

                <div className="mb-3 mt-md-4">
                <h3  style={{textAlign:'center',color:'blueviolet'}}>Ready to join,Please fill the details..</h3>
                  
                 
                  <div className="mb-3">
                  {/*<h3 style={{color:'blueviolet'}}>Enter your details here..</h3>*/}
                  <Form >
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center" >
                          Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" required maxLength='30'/>
                      </Form.Group>
                      
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicMobile"
                      >
                        <Form.Label>Mobile No.</Form.Label>
                        <Form.Control type="password" placeholder="Enter Mobile No."  required pattern='[+ 0-9]{10}'/>
                      </Form.Group>
                      

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                      </Form.Group>

                     
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicDomain"
                      >
                        
          <Form.Label>Domain</Form.Label>
          <Form.Select defaultValue="Choose..." required >
            <option>Frontend developer</option>
            <option>Backend developer</option>
            <option>Fullstack developer</option>
            <option>Data analytics</option>
            <option>Machine Learning</option>
            <option>AI developer</option>
            <option>AWS</option>
          </Form.Select>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicKey">
          <Form.Label>Key skills</Form.Label>
          <Form.Control type="text" placeholder="Enter your key skills like java,python,react" required />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicResume">
          <Form.Label>Attach resume</Form.Label>
          <Form.Control type="file" placeholder="only docx,pdf" required/>
        </Form.Group>
        
        
        

                  
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </div>
                    </Form>
                    <br/>
                  
                </div>
                </div>
              </Card.Body>
            </Card>
          
                   

 {/* <div className="mt-3">
                      <p className="mb-0  text-center">
                      Already have an account??{" "}
                        <a href="{''}" className="text-primary fw-bold">
                          Sign In
                        </a>
                      </p>
                    </div>
  */}

</div> 
      </Container>

{/*</div>*/}
{/*
             <Container  >
              
              
                <h3 className='txt_career' style={{textAlign:'center'}}>Ready to join,Please fill the details..</h3>
                
              <div className='form_career' style={{marginTop:'1px'}}>
                <h3 style={{color:'blueviolet'}}>Enter your details here..</h3>
                <Form className='col2_career '>
      
        
                <Form.Group  controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control  type="text" placeholder="Enter your full name" required maxLength='30' className='input'/>
        </Form.Group>
        
        <Form.Group controlId="formGridEmail">
          <Form.Label>Email ID</Form.Label>
          <Form.Control type="email" placeholder="Enter your full name" required className='option' />
        </Form.Group>
        
        <Form.Group   controlId="formGridAddress2">
        <Form.Label>Contact No.</Form.Label>
        <Form.Control type='text' placeholder="1234567890(10 digits only)" required pattern='[+ 0-9]{10}'className='input' />
      </Form.Group>

       
        <Form.Group  controlId="formGridAdd">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" required className='input'/>
        </Form.Group>
        
        
        
      <Form.Group controlId="formGridEmail">
          <Form.Label>Github ID</Form.Label>
          <Form.Control type="email" placeholder="Enter your github id" required className='option'/>
        </Form.Group>
        
        <Form.Group controlId="formGridEmail">
          <Form.Label>Linkedin ID</Form.Label>
          <Form.Control type="email" placeholder="Enter your Linkedin id" required className='option'/>
        </Form.Group>
        
        <Form.Group controlId="formGridEmail">
          <Form.Label>Domain</Form.Label>
          <Form.Select defaultValue="Choose..." required className='option'>
            <option>Frontend developer</option>
            <option>Backend developer</option>
            <option>Fullstack developer</option>
            <option>Data analytics</option>
            <option>Machine Learning</option>
            <option>AI developer</option>
            <option>AWS</option>
          </Form.Select>
        </Form.Group>
        
        <Form.Group  controlId="formGridAdd">
          <Form.Label>Key skills</Form.Label>
          <Form.Control type="text" placeholder="Enter your key skills like java,python,react" required className='option'/>
        </Form.Group>
        
        <Form.Group controlId="formGridEmail">
          <Form.Label>Cover letter</Form.Label>
          <Form.Control type="email" placeholder="I am python developer" required className='option'/>
        </Form.Group>
        
        <Form.Group controlId="formGridEmail">
          <Form.Label>Attach resume</Form.Label>
          <Form.Control type="file" placeholder="only docx,pdf" required className='option'/>
        </Form.Group>
        
        
        

      <br/>
      <Button variant="primary" type="submit" className='btn' style={{backgroundColor:'blue'}}>
        Submit
      </Button>
    </Form>
    </div>
  
  </Container>*/}
        </section>
        <br/>
        <br/>
        <Footer/>
        </>

  );
}
export default Career;
