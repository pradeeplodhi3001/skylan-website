import './expert.css'
import Footer from './Footer';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import Container from 'react-bootstrap/Container';

import Navbar1 from './Navbar1';
//import { Container,Row } from 'react-bootstrap';
//import Services from '../components/Services';
function Industry() {


    return (
        <>
        <Navbar1/>
        <section id="services_app_web" > 
    <div className="hero-image mt-5">
       <img src={require("./Images/project.jpg")} alt=".." width='100%' height='350px'/>
  <div class="hero-text">
    <h1 style={{fontSize:'50px'}}>PROJECTS</h1>
    
  </div>
</div>


<div class="main">

<center>
<h1 className='about_color' style={{color:'red'}}>OUR PROJECTS</h1>
</center>

<div class="row ">
    <h2 style={{color:'red'}}>Websites/App </h2>
    <div className='col'>
    <div class="content">
    <img src={require("./Images/end.jpeg")} alt="Lights" className='img_project1' style={{width:"55%"}}/>
    <a href="/">  <h4>Endurance Company</h4></a>
      <p>Company Website </p>
    </div>
    </div>
   {/* <div className='col'>
<div class="content">
      <img src={require("./Images/Aerospace.jpg")} alt="Mountains" className='img_project1' style={{width:"55%"}}/>
     <a href="/"><h4>Adityayoday App</h4></a>
      <p>Play Store app</p>
    </div>
    </div>*/}
    <div className='col'>
    <div class="content">
    <img src={require("./Images/end.jpeg")} alt="Lights" className='img_project1' style={{width:"55%"}}/>
    <a href="/">  <h4>Adityayoday App</h4></a>
      <p>Play Store app </p>
    </div>
    </div>
    </div>
    
    <div className="row ">
    <h2 style={{color:'red'}}>Pharma</h2>
    <div className='col' >
    
    <div class="content">
    <img src={require("./Images/pharma2.webp")} alt="Lights"  style={{width:"55%"}}/>
    <a href="/"><h4>Healthcare</h4></a>
      <p>Healthcare solutions</p>
    </div>
    </div>
    
{/*<div class="content">
      <img src={require("./Images/pharma1.jpg")} alt="Mountains" className='img_project2' style={{width:"55%"}}/>
      <h4> Healthcare</h4>
      <p>Healthcare solutions</p>
    </div>
</div>*/}
    <div className='col'>
    <div class="content">
    <img src={require("./Images/pharma1.jpg")} alt="Lights"  style={{width:"55%"}}/>
     <a href="/"> <h4>Pharma</h4></a>
      <p>Pharmaceutical analysis</p>
    </div>
    </div>
    </div>

   {/* <div class="row ">
    <h2>Manufacturing</h2>
    <div className='col'>
<div class="content">
      <img src={require("./Images/mech_expert.jpg")} alt="Mountains" style={{width:"55%"}}/>
      <h4>Manufacturing</h4>
      <p>Manufacturing solutions</p>
    </div>
    </div>
    <div className='col'>
    <div class="content">
    <img src={require("./Images/mech_expert2.jpg")} alt="Lights" style={{width:"55%"}}/>
      <h4>Supply chain management</h4>
      <p>Accurate management</p>
    </div>
    </div>
    </div>

    <div class="row ">
    <h2>Aerospace</h2>
    <div className='col'>
<div class="content">
      <img src={require("./Images/Aerospace.jpg")} alt="Mountains" style={{width:"55%"}}/>
      <h4>Aerospace</h4>
      <p>Aerospace solutions</p>
    </div>
    </div>
    <div className='col'>
    <div class="content">
    <img src={require("./Images/auro2.jpg")} alt="Lights" style={{width:"55%"}}/>
      <h4>Aerospace apps</h4>
      <p>Apps for Aerospace </p>
    </div>
    </div>
    </div>
    
    
    <div class="row ">
    <h2>Fintech</h2>
    <div className='col'>
<div class="content_ind">
      <img src={require("./Images/fintech_ind.jpg")} alt="Mountains" style={{width:"55%"}}/>
      <h4>Fintech</h4>
      <p>Finance solution</p>
    </div>
    </div>
    <div className='col'>
    <div class="content_ind">
    <img src={require("./Images/sld1.jpg")} alt="Lights" style={{width:"55%"}}/>
      <h4>Fintech apps</h4>
      <p>Finance Application</p>
    </div>
    </div>
    </div>*/}

</div>


    

        </section>
     <Footer/>
     </>

      );
    }
    export default Industry;