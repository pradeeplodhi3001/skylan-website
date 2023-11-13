

import './aws.css'
import Navbar1 from './Navbar1';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import {Row,Col} from 'react-bootstrap';
import Footer from './Footer';

function Mobile() {


    return (
        <>
        <Navbar1/>
        <section id="services_app_web" > 
        <div className="hero-image ">
       <img src={require("./Images/mobile1.jpg")} alt=".." className='img-h1'/>
  <div class="hero-text">
  <h1 style={{color:'black'}}><strong>Mobile App </strong> </h1>
    
    <h1 style={{color:'black'}}>
    <strong>Development </strong></h1>
    <h2 style={{color:'blue'}}>Transform your idea into a fully functional app with our Mobile app development team.
  Mobile app development is a process for building mobile applications that run on mobile devices. 
 
    
    </h2>
    
  </div>
</div>

<div class="card_services ">

<div class="container_services">
  <h1 className="about_color " style={{color:'red'}}><b>Mobile App Development</b></h1> 
  <p><em className='abt_txtnew'><b>Transform your idea into a fully functional app with our Mobile app development team.
  Mobile app development is a process for building mobile applications that run on mobile devices. 
  These applications can either be pre-installed or downloaded and installed by the user later.
  They use the network capabilities of the device to work computing resources remotely. 
  Hence, the mobile app development process requires creating software that can be installed on the device, 
  and enabling backend services for data access through APIs, and testing the application on target devices.
  </b></em>
</p> 
</div>
</div>

{/*<div class="triangle-down"></div>*/}
{/*<span  className='arrow_services' style={{fontSize:'100px'}}>&#10597;</span>*/}

<Row className='row_services'>
<Col  className='clm_services' style={{backgroundColor:'white'}}> 
  
<img className="img_services img_size" src={require("./Images/mobile.jpg")} alt="Pineapple" style={{width:"100%"}}/>
<div class="container_services">

<h2>Native App</h2>
     <p className='abt_txtnew'>
     Native mobile apps are applications developed specifically for a particular mobile operating system, such as iOS (for Apple devices) or Android (for devices using Google's Android OS). Native apps are designed to offer the best user experience and performance on their respective platforms.
       <b>We collaborate closely with you to design custom user interfaces that align with your brand identity and deliver a user-friendly experience.</b>
</p><br/>

</div>

</Col> 

<Col className='clm_services' style={{backgroundColor:'white'}}> 

<img className="img_services img_size" src={require("./Images/mobile2.jpg")} alt="Pineapple" style={{width:"100%"}}/>
<div class="container_services">

<h2> Cross-Platform App</h2>
     <p className='abt_txtnew'>
     Cross-platform mobile apps are applications developed using frameworks and technologies that allow them to run on multiple mobile operating systems, such as iOS and Android, with a single codebase. These apps offer cost-efficiency and quicker development timelines compared to native apps.
       <b>Our cross-platform apps are optimized to deliver a native-like performance and user experience on both iOS and Android devices.</b>
</p><br/>

</div>

</Col> 

<Col className='clm_services' style={{backgroundColor:'white'}}> 

<img className="img_services img_size" src={require("./Images/mobile3.jpg")} alt="Pineapple" style={{width:"100%"}}/>
<div class="container_services">

<h2>Hybrid App</h2>
     <p className='abt_txtnew'>
     Hybrid mobile apps are applications that combine elements of both native and web applications. They are built using web technologies such as HTML, CSS, and JavaScript, and are wrapped in a native container, which allows them to run on multiple mobile platforms like iOS and Android.
       <b>Our hybrid apps are designed with responsive layouts, ensuring a consistent user experience on various screen sizes and devices.</b>

</p><br/>

</div>

</Col> 


</Row>

{/*

<div className='box mt-5'>
 
 <h1 className="about_color ">Mobile App Development</h1>
 
         <p>
         <em className='abt_txtnew'>Transform your idea into a fully functional app with our Mobile app development team.
  Mobile app development is a process for building mobile applications that run on mobile devices. 
  These applications can either be pre-installed or downloaded and installed by the user later.
  They use the network capabilities of the device to work computing resources remotely. 
  Hence, the mobile app development process requires creating software that can be installed on the device, 
  and enabling backend services for data access through APIs, and testing the application on target devices.</em>
    </p>
        <br/>
        <div className=" clearfix ">
<img className="img2" src={require("./Images/mobile.jpg")} alt="Pineapple" />
<h2>Native App</h2>
       <p><em className='abt_txtnew'>
       Native mobile apps are applications developed specifically for a particular mobile operating system, such as iOS (for Apple devices) or Android (for devices using Google's Android OS). Native apps are designed to offer the best user experience and performance on their respective platforms.
       <b>We collaborate closely with you to design custom user interfaces that align with your brand identity and deliver a user-friendly experience.</b>
</em></p><br/>
</div>

      

<div className=" clearfix ">
<img className="img3" src={require("./Images/mobile2.jpg")} alt="Pineapple" style={{margin:'5px'}}/>
<h2>Cross-Platform App</h2>
       <p><em className='abt_txtnew'>
       Cross-platform mobile apps are applications developed using frameworks and technologies that allow them to run on multiple mobile operating systems, such as iOS and Android, with a single codebase. These apps offer cost-efficiency and quicker development timelines compared to native apps.
       <b>Our cross-platform apps are optimized to deliver a native-like performance and user experience on both iOS and Android devices.</b>
</em></p><br/>
</div>

<div className=" clearfix ">
<img className="img2" src={require("./Images/mobile3.jpg")} alt="Pineapple" />
<h2>Hybrid App</h2>
       <p><em className='abt_txtnew'>
       Hybrid mobile apps are applications that combine elements of both native and web applications. They are built using web technologies such as HTML, CSS, and JavaScript, and are wrapped in a native container, which allows them to run on multiple mobile platforms like iOS and Android.
       <b>Our hybrid apps are designed with responsive layouts, ensuring a consistent user experience on various screen sizes and devices.</b>
</em></p><br/>
</div>

        </div>
    */}
      </section>
    <Footer/>
    </>
      );
    }
    export default Mobile;