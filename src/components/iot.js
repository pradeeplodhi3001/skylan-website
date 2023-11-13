import './style.css'
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import {Row,Col} from 'react-bootstrap';

import Navbar1 from './Navbar1';

import Footer from './Footer';


function Iot() {


    return (
  <>   
  <Navbar1/>
  {/* <Navbar variant="dark" bg="dark" expand="lg" fixed="top" className=' nav_round'>
      <Container fluid>
      <Navbar.Brand >SKYLAN</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
        

          <Nav>
          <Nav.Link href="/">HOME</Nav.Link>
          
            <NavDropdown
             id="nav-dropdown-dark-example"
              title="SERVICES"
              menuVariant="dark"
              
            >         
             
             <NavDropdown.Item  href="/App_web">
              <div className='nav_color'> App/Web Developement</div>
              </NavDropdown.Item>
             
              
              <NavDropdown.Item   href="/monitor"><div className='nav_color'>Monitoring Dashboard Solutions</div></NavDropdown.Item>
              <NavDropdown.Item   href="/Analytics"><div className='nav_color'>Data Analytics</div></NavDropdown.Item>
              
             
              <NavDropdown.Divider />
              
              <NavDropdown.Item  href="/Cloud">
              <div className='nav_color'> Cloud and Data</div>
              </NavDropdown.Item>
              <NavDropdown.Item  href="/Aws">
              <div className='nav_color'> AWS</div>
              </NavDropdown.Item>
             
            </NavDropdown>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>  */}
       
        
    <section id="services_app_web" > 
    <div className="hero-image ">
       <img src={require("./Images/iot1.jpg")} alt=".." className='img-h1'/>
  <div class="hero-text">
  <h1 style={{color:'black'}}><strong>IoT Based Apps </strong> </h1>
    
    <h2 style={{color:'white'}}>Our IoT Services for industries are robust, cost-effective, and exceptionally simple to integrate with our industry-specific knowledge and IoT technology expertise covering Firmware Development, Mobility, Cloud computing and Data Analytics, and robust data analytics.
 
    
    </h2>
    
  </div>
</div>

<div class="card_services ">

<div class="container_services">
  <h1 className="about_color " style={{color:'red'}}><b>IoT Based Applications</b></h1> 
  <p><em className='abt_txtnew'><b>Our internet of things services are designed to elaborate your idea of IoT adoption and set up secure technology infrastructure for advanced data tasks. We drive value centered IoT solutions and build multi-level data pipelines, from edge computing to cloud data processing and data science.

Our IoT Services for industries are robust, cost-effective, and exceptionally simple to integrate with our industry-specific knowledge and IoT technology expertise covering Firmware Development, Mobility, Cloud computing and Data Analytics, and robust data analytics.
  </b></em>
</p> 
</div>
</div>

{/*<div class="triangle-down"></div>*/}
{/*<span  className='arrow_services' style={{fontSize:'100px'}}>&#10597;</span>*/}

<Row className='row_services'>
<Col  className='clm_services' style={{backgroundColor:'white'}}> 
  
<img className="img_services img_size" src={require("./Images/iot2.webp")} alt="Pineapple" style={{width:"100%"}}/>
<div class="container_services">


<h2>Intelligent platforms</h2>
     <p className='abt_txtnew'>
     IoT (Internet of Things) intelligent platforms are technology solutions that enable the collection, management, and analysis of data from connected devices and sensors. These platforms play a crucial role in harnessing the power of IoT by providing tools and infrastructure for organizations to derive insights, optimize operations, and make data-driven decisions.
       <b>Our IoT intelligent platforms provide robust data collection and storage mechanisms, ensuring that data is securely captured and organized for analysis.</b>

</p><br/>

</div>

</Col> 

<Col className='clm_services' style={{backgroundColor:'white'}}> 

<img className="img_services img_size" src={require("./Images/iot.jpg")} alt="Pineapple" style={{width:"100%"}}/>
<div class="container_services">

<h2> Device Connection</h2>
     <p className='abt_txtnew'>
     IoT (Internet of Things) device connection services are essential for facilitating the integration and communication of IoT devices within a network or ecosystem. These services help ensure that devices can collect and transmit data, making them accessible for analysis, control, and management.
       <b>We assist in the integration of various IoT devices, sensors, and equipment into your network. This includes configuring devices to connect to the internet and communicate with central systems.</b>

</p><br/>

</div>

</Col> 

<Col className='clm_services' style={{backgroundColor:'white'}}> 

<img className="img_services img_size" src={require("./Images/iot3.jpg")} alt="Pineapple" style={{width:"100%"}}/>
<div class="container_services">

<h2>System Integration</h2>
     <p className='abt_txtnew'>
     System integration is the process of combining different sub-systems or components of an organization's IT infrastructure into a single, cohesive, and well-functioning system. It aims to ensure that all components work together efficiently and effectively, sharing data and functionality.
       <b>Our team of experts creates custom integration solutions tailored to your specific business needs. We use industry-standard protocols and technologies to ensure compatibility and efficient data exchange.</b>

</p><br/>

</div>

</Col> 


</Row>
{/*
<div className='box mt-3'>
  
 <h1     className="about_color ">IoT Based Applications</h1>
 
         <p>
         <em className='abt_txtnew'>Our internet of things services are designed to elaborate your idea of IoT adoption and set up secure technology infrastructure for advanced data tasks. We drive value centered IoT solutions and build multi-level data pipelines, from edge computing to cloud data processing and data science.

Our IoT Services for industries are robust, cost-effective, and exceptionally simple to integrate with our industry-specific knowledge and IoT technology expertise covering Firmware Development, Mobility, Cloud computing and Data Analytics, and robust data analytics.</em>
    </p>
            <br/>
        <div className=" clearfix ">
<img className="img2" src={require("./Images/iot2.webp")} alt="Pineapple" />
<h2>Intelligent platforms</h2>
       <p><em className='abt_txtnew'>
       IoT (Internet of Things) intelligent platforms are technology solutions that enable the collection, management, and analysis of data from connected devices and sensors. These platforms play a crucial role in harnessing the power of IoT by providing tools and infrastructure for organizations to derive insights, optimize operations, and make data-driven decisions.
       <b>Our IoT intelligent platforms provide robust data collection and storage mechanisms, ensuring that data is securely captured and organized for analysis.</b>
</em></p><br/>
</div>

      

<div className=" clearfix ">
<img className="img3" src={require("./Images/iot.jpg")} alt="Pineapple" style={{margin:'5px'}}/>
<h2>Device Connection</h2>
       <p><em className='abt_txtnew'>
       IoT (Internet of Things) device connection services are essential for facilitating the integration and communication of IoT devices within a network or ecosystem. These services help ensure that devices can collect and transmit data, making them accessible for analysis, control, and management.
       <b>We assist in the integration of various IoT devices, sensors, and equipment into your network. This includes configuring devices to connect to the internet and communicate with central systems.</b>
</em></p><br/>
</div>

<div className=" clearfix ">
<img className="img2" src={require("./Images/iot3.jpg")} alt="Pineapple" />
<h2>System Integration</h2>
       <p><em className='abt_txtnew'>
       System integration is the process of combining different sub-systems or components of an organization's IT infrastructure into a single, cohesive, and well-functioning system. It aims to ensure that all components work together efficiently and effectively, sharing data and functionality.
       <b>Our team of experts creates custom integration solutions tailored to your specific business needs. We use industry-standard protocols and technologies to ensure compatibility and efficient data exchange.</b>

</em></p><br/>
</div>

        </div>



*/}



{/*

    <div className='about_box mt-5'>
    <center>
    <h1 style={{marginTop:'65px'}}>IoT Based Applications <br/>  </h1>
    </center>
    
      <em>Our internet of things services are designed to elaborate your idea of IoT adoption and set up secure technology infrastructure for advanced data tasks. We drive value centered IoT solutions and build multi-level data pipelines, from edge computing to cloud data processing and data science.

Our IoT Services for industries are robust, cost-effective, and exceptionally simple to integrate with our industry-specific knowledge and IoT technology expertise covering Firmware Development, Mobility, Cloud computing and Data Analytics, and robust data analytics.

</em>
    <img src={require("./Images/vision.jpg")} alt=".."width="600px" height='350px' className=" mt-5 abt-img"/>
       
        
        <div className="site-wrap2">
           
         <h1 className="about_color ">Intelligent platforms
</h1>
         <p>
        <em>Open platform architecture with end-to-end connectivity
Multi-tenant architecture to support IoT resources cost-efficiently and securely
Big data support with mashup builder and business intelligence
Device vendor agnostic and device virtualization
Secure, reliable, scalable, and OTA firmware updates </em>
        </p>
        <br/><br/><br/>
       </div>
       <br/>
       <br/>
      
       <img src={require("./Images/mission2.jpg")} alt=".."width="600px" height='350px' className="abt_img  "/>
       
       <div className="site-wrap2">
           
         <h1 className="about_color">Device Connection</h1>
         <p>
        <em>Hardware product design (PCB, Firmware) to deliver end-to-end solutions and accelerate time to market
Design flow implementation and PCB fabrication support
Device IoT framework and enablement
Customized form-factor design and prototyping as per requirement
Feature enhancements and certifications
</em>
        </p>
        <br/><br/><br/>
       </div>
      
       <img src={require("./Images/vision.jpg")} alt=".."width="600px" height='350px' className="abt_img "/>
       <div className="site-wrap2">
           
         <h1 className="about_color">System Integration</h1>
         <p>
        <em> CRM and other web content
ERP system integration
SMS and email gateway integration
Map and billing engine integration
Integrating multiple Internet of Things assets with different functionalities, departments, and stages in the product lifecycle

         </em>
        </p>
        <br/><br/><br/>
       </div>
       </div>
     
{/*<div className="context">

    </div>

<div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>


        
   
    
            <dl >
              
            <ul className="circles1">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>

      
  <dt><h1  style={{marginTop:'65px'}}>Application/Website <br/> Development<br/> </h1></dt>
  <dt>
  <h1 className="about_color">Full Stack Development </h1></dt>
  <dd> <center><img src={require("./Images/full.png")}className=" abt_img align-left2 slide-in2" alt=".." width='270px' height='260px'/></center>
    <p>  Build end-to-end applications with our full-stack development team.<br/>
         Full stack development refers to the end-to-end application software development, including the front end and back end. <br/>
         The front end consists of the user interface, and the back end takes care of the business logic and application workflows.<br/>
         </p>
  </dd>

   <dt><h1 className="about_color">Mobile App Development </h1></dt>
   <center><img src={require("./Images/mobile.jpg")} className=" abt_img align-left2 slide-in2"alt=".." width='270px' height='260px'/></center>
  <dd className="site-wrap2">

    <p>Transform your idea into a fully functional app with our Mobile app development team.<br/>
  Mobile app development is a process for building mobile applications that run on mobile devices. <br/>
  These applications can either be pre-installed or downloaded and installed by the user later.<br/> 
  They use the network capabilities of the device to work computing resources remotely. <br/> 
  Hence, the mobile app development process requires creating software that can be installed on the device, <br/>
  and enabling backend services for data access through APIs, and testing the application on target devices.<br/></p></dd>

  <dt><h1 className="about_color">Frontend Development</h1></dt>
    <center><img src={require("./Images/frontend2.png")}className=" abt_img align-left slide-in" alt=".." width='270px' height='260px'/></center>
   <dd className="site-wrap2">

    <p>Create seamless, intuitive interfaces that align with your business goals and brand identity.<br/></p>
   <p>The front end of a website is everything the user either sees or interacts with when they visit the website.<br/></p>
    <p> It is responsible for the total look and feel of an online experience.<br/></p>
<p>The front end aims at meeting user requirements and delivering a positive user experience.


<br/>
</p>
   </dd>
   
      
   </dl>
    
  </div >*/}
    
    </section>
     <Footer/>
     </>

      );
    }
    export default Iot;