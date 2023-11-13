//import { Link, animateScroll as scroll } from 'react-scroll'
//import {Container,Row} from 'react-bootstrap/';
import Navbar1 from '../components/Navbar1';


import Footer from '../components/Footer';

import "../App.css"
function About() {


  return (
    <>
    <Navbar1/>
    
    <section id="about"  >
    <div className="hero-image ">
        
        <img src={require("./Images/about1.jpg")} alt=".." className='img-h1'/>
   
 </div>
    {/*<Container>*/}
    <div className='container-fluid'>
        
       
        
    <row >
    <div className='about_box' style={{backgroundColor:'#f1f1f1',padding:'10px'}}>
    
    {/*<img src={require("./Images/about.jpg")}  alt=".." width="35%" height="430px" style={{float:'right'}} /> */}  
              
               
              {/*} <div className="slide-left">*/}
               
                <p>
                
                
                    
                        <div>
                        <h1 style={{color:'red'}} >ABOUT US</h1><br/>
      <h4 style={{color:'blue'}} className='abt_txtnew'>Excellent IT services for your success</h4>
    
      
        <p className='abt_txtnew'>
        At Skylan Solutions Pvt Ltd, we are a dynamic team of IT professionals driven by a passion for innovation and excellence.As a leading IT services
       and consultat company,We are committed to delivering cutting-edge solutions that empower businesses to thrive in the digital era.With years of experience and a proven track record,we have earned the trust of our clients across various industries to grow their business.
        <br/>
                        <button className='btn_client'><a  style={{color:'white',textDecoration:'none'}}href="/client">Register</a></button>
                        <button className='btn_explr'><a  style={{color:'white',textDecoration:'none'}}href="/client">Explore</a></button>
                        </p>
                        </div>
                        </p>
                        
                        </div>
                      </row>
             
                             
                   <br/><br/>
                   </div>
                   
                   {/*</Row>
        </Container> */}

<div className='row_why' >
        
        <div className='side_why'>
         <br/>
      <img src={require("./Images/mission2.jpg")}  alt=".." className=" abt_img"/>
      
      </div>
    <div className='sup_why '>
      <br/>
        
      <h1 style={{color:'red'}} >OUR EXPERTISE</h1><br/>
      <h4 style={{color:'blue'}} className='abt_txtnew'>Comprehensive IT services</h4>
     
      
        <p className='abt_txtnew'>
        From IT consulting and software development to cloud solutions and Data analytics , we offer a wide range of IT services tailored to your unique needs.
       </p>
       
       <h4 style={{color:'blue'}} className='abt_txtnew'>Expert consultants</h4>
        <p className='abt_txtnew'>
        Our team of experienced consultants brings deep domain knowledge and technical expertise to the table, ensuring you get practical and actionable advice.




    </p>
   
    <h4 style={{color:'blue'}} className='abt_txtnew'>Client centric approach</h4>
     
      
     <p className='abt_txtnew'>
     Your success is our priority. We listen to your goals, understand your challenges, and work collaboratively to develop solutions that align with your business objectives.

 </p>
 <h4 style={{color:'blue'}} className='abt_txtnew'>Agile and flexible</h4>  
    <p className='abt_txtnew'>
  Our agile approach ensures that our services can adapt to your changing needs seamlessly
 </p>
                 
    </div>
    <div className='side_why'>
         
         <img src={require("./Images/vision.jpg")}  alt=".." className=" abt_img abt_i"/>
         
         </div>
   
   </div>
       {/*
    <div className='sub_why '>
    <img src={require("./Images/vision.jpg")}  alt=".." className=" abt_img align-right slide-in"/>

    </div>

    </div>

    <div className='cont_why' >
        
        <div className='main_why '>
         
      <img src={require("./Images/mission2.jpg")}  alt=".." className=" abt_img align-left slide-in"/>
      
      </div>
    <div className='sub_why '>
      <div className="site-wrap2">
        
      <h1 style={{color:'red'}} >WHY CHOOSE US</h1><br/>
      <h4 style={{color:'blue'}} className='abt_txtnew'>Comprehensive IT services</h4>
     
      
        <p className='abt_txtnew'>
        From IT consulting and software development to cloud solutions and Data analytics , we offer a wide range of IT services tailored to your unique needs.
       </p>
       
       <h4 style={{color:'blue'}} className='abt_txtnew'>Expert consultants</h4>
        <p className='abt_txtnew'>
        Our team of experienced consultants brings deep domain knowledge and technical expertise to the table, ensuring you get practical and actionable advice.




    </p>
   
    <h4 style={{color:'blue'}} className='abt_txtnew'>Client centric approach</h4>
     
      
     <p className='abt_txtnew'>
     Your success is our priority. We listen to your goals, understand your challenges, and work collaboratively to develop solutions that align with your business objectives.

 </p>
 <h4 style={{color:'blue'}} className='abt_txtnew'>Agile and flexible</h4>  
    <p className='abt_txtnew'>
  Our agile approach ensures that our services can adapt to your changing needs seamlessly
 </p>
                 
    </div>
    
   </div>
       
    <div className='sub_why '>
    <img src={require("./Images/vision.jpg")}  alt=".." className=" abt_img align-right slide-in"/>

    </div>

    </div>*/}


    
        </section>
        

                <Footer/>
        </>
        );
        
}
export default About;
