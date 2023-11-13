//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
//import Form from 'react-bootstrap/Form';
//import { Link } from 'react-router-dom';
//import {Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
//import Dropdown from 'react-bootstrap/Dropdown';


function Navbar1() {
  return (
  
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container-fluid">
  <Navbar.Brand > <img src={require("./Images/skylan_icon.png")} alt=".." height="55" width="175" margin='5px'/>

</Navbar.Brand>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/skylan-website/#/about">ABOUT US</a>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          SERVICES
          </a>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/Aws"><b>AWS</b></a></li>
            <li><a className="dropdown-item" href="/monitor"><b>ENTERPRISES DEVELOPMENT SOL.</b> </a></li>
            {/*<li><a className="dropdown-item" href="/App_web"><b>WEBSITE DEVELOPMENT</b></a></li>*/}
            
            <li><a className="dropdown-item" href="/mobile"><b>MOBILE APP DEVELOPMENT</b> </a></li>
            <li><a className="dropdown-item" href="/Analytics"><b>CLOUD AND DATA</b> </a></li>
            <li><a className="dropdown-item" href="/Iot"><b>IOT BASED APPLICATIONS</b> </a></li>
          </ul>
        </li>

        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          OUR EXPERTISE
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/expert">FINTECH SOLUTIONS</a></li>
            <li><a className="dropdown-item" href="/expert_health">HEALTHCARE/PHARMA INDUSTRY SOLUTIONS </a></li>
            <li><a className="dropdown-item" href="/expert_mech">MECHANICAL/SUPPLY CHAIN SOLUTIONS</a></li>
            
  <li><a className="dropdown-item" href="/expert_aero">AEROSPACE INDUSTRY SOLUTIONS </a></li>
            
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/industry">OUR PROJECTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/skylan-website/#/Career">CAREERS</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="/skylan-website/#/Conatct">CONTACT US</a>
        </li>
      </ul>
      
      {/*<Form.Control type="text" placeholder="Enter your full name" required  />*/}
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen">
      GET IN TOUCH
</button>

          
          
      
    </div>
  </div>
</nav>
   


<div class="modal fade" id="exampleModalFullscreen" tabindex="-1" aria-labelledby="gridModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-body">
      
      <center>        <h3 style={{color:'red'}}>Get in touch
</h3>
<br/>
<button style={{backgroundColor:'lightgreen'}}>
        <p className='abt_txtnew'>Fill out the form below and our representative will contact you as soon as possible. </p>
        <p className='abt_txtnew'>   For immediate assistance, please call our sales line or email our customer support.
</p>
</button>
  </center>
  

      <div  className="cont_contact">
        <div className='main_contact'>
      <h5> SALES INQUIRIES</h5>
        <br/>
          <p>+91 9114081008,<br/></p>
            <p>+91 9114071008,<br/></p>
          <p> USA +1 (774) 414-8392<br/>
          </p>
<br/>                                                                                                                                                     
          <h6> info@skylansolutions.com
</h6>
<br/>
<h5>PRESS</h5>
<br/>
<p><a href="mailto:hr@skylansolutions.com">hr@skylansolutions.com
</a></p>

<br/>
<h5>PARTNERSHIPS</h5>
<br/>
<h6>anuj@skylansolutions.com</h6>
<br/>

<h5>HEAD OFFICE INDIA :</h5><br/>
<h6>Address-1 11,D/AS-1 scheme no- 78, <br/>
aaranyanagar Indore M.P, India

</h6>
</div>
<div className='sub_contact'>
<Form>
    <h5 style={{color:"blue"}}><u>FOR INQUIRIES MESSAGE HERE</u></h5>
    <Form.Group  controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" />
        </Form.Group>
        
        <Form.Group controlId="formGridEmail">
          <Form.Label>Email ID</Form.Label>
          <Form.Control type="email" placeholder="Enter your full name" />
        </Form.Group>
        
        <Form.Group   controlId="formGridAddress2">
        <Form.Label>Contact No.</Form.Label>
        <Form.Control type='text' placeholder="91-1234567890" />
      </Form.Group>
      <Form.Group  controlId="formGridAdd">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>
        
        
      <br/>

      <center>
      <Button variant="primary" type="submit"  className="btn2" style={{backgroundColor:'blue'}}>
        Submit
      </Button>
      </center>
     </Form>
    </div>
    </div>
    
  </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>  
    </div>
    </div>
    </div>
      </>
  );
}

export default Navbar1;