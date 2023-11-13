import './style.css'
import Navbar1 from '../components/Navbar1';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import {Row,Col} from 'react-bootstrap';
import Footer from '../components/Footer';

function MonitorDash() {


    return (
        <>
       <Navbar1/>
        <section id="services_app_web" > 
        <div className="hero-image  ">
       <img src={require("./Images/mobile1.jpg")} alt=".." className='img-h1'/>
  <div class="hero-text">
  <h1 style={{color:'black'}}><strong>Enterprises  </strong> </h1>
    
    <h1 style={{color:'black'}}>
    <strong>Development Sol. </strong></h1>
    <h2 style={{color:'blue'}}>Transform your idea into a fully functional app with our Mobile app development team.
  Mobile app development is a process for building mobile applications that run on mobile devices. 
 
    
    </h2>
    
  </div>
</div>



        <div class="card_services ">

  <div class="container_services">
    <h1 className="about_color " style={{color:'red'}}><b>Visualization of dashboard</b></h1> 
    <p className='abt_txtnew'><b>Transform your idea into a fully functional app with our Mobile app development team.
  Mobile app development is a process for building mobile applications that run on mobile devices. 
  These applications can either be pre-installed or downloaded and installed by the user later.
  They use the network capabilities of the device to work computing resources remotely. 
  Hence, the mobile app development process requires creating software that can be installed on the device, 
  and enabling backend services for data access through APIs, and testing the application on target devices.
    </b>
</p> 
  </div>
</div>

{/*<div class="triangle-down"></div>*/}
{/*<span  className='arrow_services' style={{fontSize:'100px'}}>&#10597;</span>*/}

<Row className='row_services'>
<Col  className='clm_services' style={{backgroundColor:'white'}}> 
    
<img className="img_services img_size" src={require("./Images/data_serv.jpg")} alt="Pineapple" style={{width:"100%"}}/>
  <div class="container_services">

<h2>Data analytics</h2>
       <p className='abt_txtnew'>A native app is a platform-specific app that is capable of running only on a particular operating system. In other words, the business would have to develop apps differently for iOS and Android (i.e., to launch an app on both platforms, it will have to be coded twice). 
       </p><br/>
 
  </div>

</Col> 

<Col className='clm_services' style={{backgroundColor:'white'}}> 
   
<img className="img_services img_size" src={require("./Images/custom.webp")} alt="Pineapple" style={{width:"100%"}}/>
  <div class="container_services">

<h2>Custom dashboard</h2>
       <p className='abt_txtnew'>
       A cross-platform app is coded once and is compatible to run on multiple platforms. In other words, there is a single, unified code that works for both Android and iOS apps.
</p><br/>
 
  </div>

</Col> 

<Col className='clm_services' style={{backgroundColor:'white'}}> 
   
<img className="img_services img_size" src={require("./Images/data2.jpg")} alt="Pineapple" style={{width:"100%"}}/>
  <div class="container_services">

<h2>Visualization of dashboard</h2>
       <p className='abt_txtnew'>
       A hybrid app is a blend of a native mobile app and a web app. In technical terms, a web application put into a native shell is a hybrid app. These apps are built in a native container but, when downloaded, they showcase content similar to that of a web app.
</p><br/>
 
  </div>

</Col> 

</Row>





<center>
<div class="card_services mt-5">
<img className="img_services" src={require("./Images/website_develop.jpg")} alt="Pineapple" style={{width:"100%"}}/>
  <div class="container_services">
    <h1 className="about_color " style={{color:'red'}}><b>Website Development</b></h1> 
    <p className='abt_txtnew'>Website development is the process of creating and maintaining a website. It involves a range of activities, from designing the user interface and user experience to writing the code that powers the site and ensuring its functionality.<b>At Skylan Solutions, we specialize in designing and developing websites that not only look stunning but also function flawlessly. Our website development services are tailored to meet your unique business needs and objectives, ensuring a digital presence that leaves a lasting impression.</b> 

</p> 
  </div>
</div>
</center>

        
       



{/*


<div className='box  mt-5'>
<div className=" clearfix ">
  <img className="img2" src={require("./Images/website_develop.jpg")} alt="Pineapple" />
  <h1 className="about_color ">Website Development</h1>
  
  <p>
         <em className='abt_txtnew'>Website development is the process of creating and maintaining a website. It involves a range of activities, from designing the user interface and user experience to writing the code that powers the site and ensuring its functionality.<b>At Skylan Solutions, we specialize in designing and developing websites that not only look stunning but also function flawlessly. Our website development services are tailored to meet your unique business needs and objectives, ensuring a digital presence that leaves a lasting impression.</b> </em>

    </p>
      
        <br/>
        </div>
        </div>



<div className='box mt-5'>
  
 <h1 className="about_color ">Visualization of dashboard</h1>

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
<img className="img2" src={require("./Images/vision.jpg")} alt="Pineapple" />
<h2>Data analytics</h2>
       <p><em className='abt_txtnew'>
       A native app is a platform-specific app that is capable of running only on a particular operating system. In other words, the business would have to develop apps differently for iOS and Android (i.e., to launch an app on both platforms, it will have to be coded twice). 
</em></p><br/>
</div>

      

<div className=" clearfix ">
<img className="img3" src={require("./Images/vision.jpg")} alt="Pineapple"style={{margin:'5px'}} />
<h2>Custom dashboard</h2>
       <p><em className='abt_txtnew'>
       A cross-platform app is coded once and is compatible to run on multiple platforms. In other words, there is a single, unified code that works for both Android and iOS apps.
</em></p><br/>
</div>

<div className=" clearfix ">
<img className="img2" src={require("./Images/vision.jpg")} alt="Pineapple" />
<h2>Visualization of dashboard</h2>
       <p><em className='abt_txtnew'>
       A hybrid app is a blend of a native mobile app and a web app. In technical terms, a web application put into a native shell is a hybrid app. These apps are built in a native container but, when downloaded, they showcase content similar to that of a web app.
</em></p><br/>
</div>

        </div>






       



    */}



  
     
    </section>
  
    <Footer/>
    </>
      );
    }
    export default MonitorDash;