import './aws.css';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import Container from 'react-bootstrap/Container';

import Navbar1 from '../components/Navbar1';

import Footer from '../components/Footer';


function AppWeb() {


    return (
  <>   
  <Navbar1/>
    <section id="services_app_web" > 
    <div className="hero-image ">
       <img src={require("./Images/slide3.jpg")} alt=".." className='img-h1'/>
  <div class="hero-text">
  <h1 style={{color:'black'}}>Website </h1>
    
    <h1 style={{color:'black'}}>
    Development</h1>
    <h2 >Web development is the work involved in developing a website for the Internet.It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.
    
    </h2>
    
  </div>
</div>
   <div className='box mt-5'>
  
 <h1 className="about_color ">Website Development</h1>
 
         <p>
         <em className='abt_txtnew'>Website development is the process of creating and maintaining a website. It involves a range of activities, from designing the user interface and user experience to writing the code that powers the site and ensuring its functionality.<b>At Skylan Solutions, we specialize in designing and developing websites that not only look stunning but also function flawlessly. Our website development services are tailored to meet your unique business needs and objectives, ensuring a digital presence that leaves a lasting impression.</b> </em>
    </p>
        <br/>
        <div className=" clearfix ">
<img className="img2" src={require("./Images/website_develop.jpg")} alt="Pineapple" />
<h2>Full Stack Development</h2>
       <p><em className='abt_txtnew'>
       Full-stack development refers to the practice of creating web applications that cover both the front-end (client-side) and back-end (server-side) components.
       The front end consists of the user interface, and the back end takes care of the business logic and application workflows.
        <b>At Skylan Solutions, we excel in full-stack development, providing end-to-end solutions for web application development. Our full-stack developers are experts in both front-end and back-end technologies, ensuring that your web projects are comprehensive, efficient, and seamlessly integrated.</b>
</em></p><br/>
</div>

      

<div className=" clearfix ">
<img className="img3" src={require("./Images/frontend1.jpg")} alt="Pineapple" style={{margin:'5px'}}/>
<h2>Frontend Development</h2>
       <p><em className='abt_txtnew'>
       Front-end development, also known as client-side development, focuses on creating the user interface and user experience of a website or web application. It involves the design and implementation of the visual elements and interactive features that users see and interact with in their web browsers. 
       <b>At [Your IT Company Name], we specialize in front-end development, bringing your digital vision to life through intuitive and visually compelling user interfaces.</b>
</em></p><br/>
</div>

<div className=" clearfix ">
<img className="img2" src={require("./Images/backend1.webp")} alt="Pineapple" />
<h2>Backend Development</h2>
       <p><em className='abt_txtnew'>
       Back-end development, also known as server-side development, is the process of creating the server, database, and application logic that powers a website or web application.It is responsible for the server's functionality, ensuring data storage and retrieval, as well as managing the overall application's core.
       <b>At Skylan Solutions, we specialize in back-end development, creating the heart and brain of your digital projects. Our back-end developers are experts in building robust and efficient server-side solutions that drive your website or web application's functionality.

</b>
</em></p><br/>
</div>

        </div>


       




{/* 2nd option


    <div className='about_box mt-5'>
      <center>
    <h1 style={{marginTop:'65px'}}>Website Development <br/>  </h1>
    <em>Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.
    Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.
    </em>
    </center>
    <img src={require("./Images/full.png")} alt=".."width="600px" height='350px' className=" mt-5 abt-img"/>
       
        
        <div className="site-wrap2">
           
         <h1 className="about_color ">Full Stack Development</h1>
         <p>
        <em>Build end-to-end applications with our full-stack development team.Full stack development refers to the end-to-end application software development, including the front end and back end. 
         The front end consists of the user interface, and the back end takes care of the business logic and application workflows.
         </em>
        </p>
        
       </div>
       
       
       
      
       <img src={require("./Images/frontend2.png")} alt=".."width="600px" height='350px' className="abt_img "/>
       <div className="site-wrap2">
           
         <h1 className="about_color">Frontend Development</h1>
         <p>
        <em> Create seamless, intuitive interfaces that align with your business goals and brand identity.
   The front end of a website is everything the user either sees or interacts with when they visit the website.It is responsible for the total look and feel of an online experience.The front end aims at meeting user requirements and delivering a positive user experience.
     


         </em>
        </p>
        
        </div>
       <img src={require("./Images/mission2.jpg")} alt=".."width="600px" height='350px' className="abt_img  "/>
       
       <div className="site-wrap2">
           
         <h1 className="about_color">Backend Development</h1>
         <p>
        <em>Back-end development is the process of designing, coding, and testing the functionality of a web application's back-end - the part of the system that handles requests from users and interacts with databases. This includes everything from developing the system's architecture to writing code to support user authentication and data storage.

</em>
        </p>
       
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
    export default AppWeb;