
import './expert.css'
import Footer from '../components/Footer';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import Container from 'react-bootstrap/Container';

import Navbar1 from '../components//Navbar1';
import { Container,Row } from 'react-bootstrap';
//import Services from '../components/Services';
function ExpertMech() {


    return (
        <>
        <Navbar1/>
        
       
        
        <div className="center img_expert_mech">
          
 <h1 style={{color:'black'}} className='h1_textsize'>
 Mechanical/Supply Chain Management
   </h1>
</div>
<section>
<div className='box_expert  mt-5'>
<h1 className="expert_color " style={{color:'red'}}> Mechanical/Supply Chain Management</h1>
<div className=" clearfix ">
  
  
  
         <p>
<em className='abt_txtnew'>Mechanical manufacturing solutions offered by IT companies encompass a wide range of technologies and systems that enhance the efficiency, quality, and flexibility of manufacturing processes. These solutions leverage software, automation, and data analytics to streamline operations and drive innovation in the mechanical manufacturing industry.</em>
        </p>
        <br/>
        </div>
        </div>

<Container>
    
<Row className='expert_center'>

<div class="container_expert mt-5 ">
<img src={require("./Images/mech_expert1.jpg")} alt="finance" style={{width:"100%"}}/>
  <div class="content ">
    <a href="#expert" className='content_text'>Mechanical manufacturing </a>
    
  </div>
</div>

</Row>

<Row className='expert_center'>

<div class="container_expert mt-5 ">
<img src={require("./Images/supply.jpg")} alt="finance" style={{width:"100%"}}/>
  <div class="content ">
    <a href="#expert"className='content_text' >Supply chain management </a>
    
  </div>
</div>

</Row>

<Row className='expert_center'>

<div class="container_expert mt-5 ">
<img src={require("./Images/mech_expert2.jpg")} alt="finance" style={{width:"100%"}}/>
  <div class="content ">
    <a href="#expert" className='content_text'>Industrial Internet of Things </a>
    
  </div>
</div>

</Row>

    </Container>


    <br/><br/><br/>
<section id="data">



<div  className=" clearfix ">
  <div className="lt_side" >

  <h3 className="about_color ">Mechanical manufacturing</h3>
<p>
<b>By offering mechanical manufacturing solutions, Our Company help manufacturers improve production efficiency, reduce costs, enhance product quality, and stay competitive in a rapidly evolving industry.

</b><br/>
<strong>
Manufacturing Execution Systems (MES):

</strong>
<ol>
  <li>IT companies develop MES software that tracks and controls manufacturing operations in real-time.

  </li>
  <li>
  MES systems offer visibility into production processes, enabling better production planning and resource allocation.
</li>
<li>
They assist in quality control, performance monitoring, and the tracking of work-in-progress (WIP) inventory.
</li>
</ol>
<strong>
Product Lifecycle Management (PLM):
</strong>
<ol>
<li>
PLM systems manage a product's entire lifecycle, from design and development to manufacturing and maintenance.
</li>
<li>
IT companies offer PLM solutions that facilitate collaboration, version control, and data sharing among various stakeholders.
</li>

</ol>
  
    <strong>
    Manufacturing Analytics:
    </strong>
    <ol>
  <li>
  Manufacturing analytics solutions leverage data from various sources to provide insights into process efficiency, quality, and equipment performance.
</li>
<li>
These analytics tools help manufacturers make data-driven decisions for continuous improvement.
</li>
</ol>

</p>
</div>
</div>
</section>

<br/><br/>
<section >

<div id="cloud" className=" clearfix ">
  <div className="rt_side" >
  <h3  className="about_color ">Supply chain management</h3>
  
         <p>
         <b>
         Inventory and supply chain management solutions provided by our company are essential for optimizing the flow of goods, reducing costs, and improving overall efficiency in the supply chain. These solutions utilize a combination of software, data analytics, and automation to manage inventory, track products, and enhance supply chain operations.
  
</b><br/>
<strong>
Inventory Management Software:</strong>
<ol>
<li>We develop inventory management systems that provide real-time visibility into stock levels, order status, and product location.
</li>
<li>These systems help in tracking inventory turnover, optimizing reorder points, and preventing stockouts or overstock situations.
</li>
</ol>
<strong>Supply Chain Analytics:</strong>
<ol>
<li>We provide analytics tools for supply chain performance measurement and analysis.
</li>
<li>These analytics solutions help identify areas for improvement, cost reduction opportunities, and process optimization.
</li>
</ol>
<strong>Transportation Management Systems (TMS):

</strong>
<ol>
<li>TMS solutions assist in optimizing the transportation of goods, including route planning, carrier selection, and shipment tracking.

</li>
<li>
They help reduce shipping costs and improve delivery accuracy.

</li> 

</ol>      
  </p>
        <br/>
        </div>
        </div>
        

</section>
<br/><br/>
<section id="analytics">



<div  className=" clearfix ">
  <div className="lt_side" >

  <h3 className="about_color ">Industrial Internet of Things</h3>
<p>
<b>The Industrial Internet of Things (IIoT) is a transformative technology in the manufacturing and industrial sectors. Our company play a pivotal role in developing IIoT solutions that connect machines and equipment, enabling real-time data collection and analysis.
</b><br/>
<strong>
Sensor and Device Connectivity:
</strong>
<ol>
 <li>We assist in connecting machines, sensors, and devices within a manufacturing environment.
  </li>
  <li>
This connectivity forms the foundation of the IIoT ecosystem, allowing data to be collected from various sources.
</li>
</ol>
<strong>Data Collection and Transmission:</strong>
<ol>
<li>
IIoT solutions collect data in real-time or at regular intervals from connected devices.
</li>
<li>
This data can include machine performance metrics, environmental conditions, equipment status, and more.
</li>
</ol>
<strong>Remote Monitoring and Control:</strong>
<ol>
<li>
IIoT enables remote monitoring of equipment and processes. 
</li>
<li>
Our solutions often include remote control capabilities for equipment adjustments and maintenance actions.
</li>
</ol>

</p>
</div>
</div>
</section>







<br/>
<br/>

{/*

  <Container>
    <Row className='expert_center'>
<div class="container_expert">
<img src={require("./Images/mech_expert1.jpg")} alt="Avatar" style={{width:"100%"}}/>
  <div class="content">
  <a href="#expert" className='img_expert_size'>Mechanical manufacturing</a>
   
  </div>
</div>
</Row>
<Row className='expert_center'>
<div class="container_expert">
<img src={require("./Images/mech_expert2.jpg")} alt="Avatar" style={{width:"100%"}}/>
  <div class="content">
  <a href="#expert" className='img_expert_size'>Mechanical manufacturing</a>
    }  </div>
</div>
</Row>
  </Container>*/}
</section>  
{/*<Services/>*/}
<Footer/>
    </>
      );
    }
    export default ExpertMech;
    
