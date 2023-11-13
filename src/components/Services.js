//import {Col,Row} from 'react-bootstrap';
import './style_services.css';
import Card from 'react-bootstrap/Card';


function Services() {


    return (
      <>      <section id="services" className=' mt-3' >
           
           
  
          
             
             <div class="box_div">
               <h1 style={{textAlign:'center',color:"red",backgroundColor:"#f1f1f1"}}>SERVICES</h1>
               {/*<div class="container1">

               <img src={require("./Images/frontend2.png")} alt="Avatar" height="195" width="175" class="image"/>
  <div class="overlay">
    <div class="text">Hello World</div>
  </div>
    </div>*/}
               
              {/*} <Row className='row_serv'>*/}
              <div className='serv_row'>
              <Card  className="Card1" style={{backgroundColor:'white'}}>
      
      <div class="flip-box">
      <div class="flip-box-inner">
        <div class="flip-box-front">
        <Card.Img variant="top" src={require("./Images/aws.webp")} alt=".."  className='img_serv'/>
         {/* <img src={require("./Images/aws.webp")} alt="Avatar" style={{width:'300px',height:"200px"}} class="image"/>*/}
        </div>
        <div class="flip-box-back">
          
             <h2>AWS</h2>
             

          <p></p>The AWS solutions helps you to resell and deliver AWS Services to end user.
        </div>
      </div>
    </div>
    
    <Card.Text style={{backgroundColor:'white'}}>
    <a target="_blank" rel="noreferrer" href="/Aws" > AWS Services</a>
          </Card.Text>
          
        </Card>   
    
                 
    
               
   <Card  className="Card1" style={{ backgroundColor:'white'}}>
      
  <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
    <Card.Img variant="top" src={require("./Images/erp_serv2.webp")} alt=".."  className='img_serv'/>
     {/* <img src={require("./Images/aws.webp")} alt="Avatar" style={{width:'300px',height:"200px"}} class="image"/>*/}
    </div>
    <div class="flip-box-back">
      <h2>EDS</h2>
      <p></p>We offer development services to ideate,design and develpe custom sol. to your business needs.
    </div>
  </div>
</div>

<Card.Text style={{backgroundColor:'white'}}>
<a target="_blank" rel="noreferrer" href="/monitor" >Enterprises Developement Solutions</a>
      </Card.Text>
      
    </Card>   


    <Card  className="Card1" style={{ backgroundColor:'white'}}>
      
      <div class="flip-box">
      <div class="flip-box-inner">
        <div class="flip-box-front">
        <Card.Img variant="top" src={require("./Images/web_serv.jpg")} alt=".."  className='img_serv'/>
         {/* <img src={require("./Images/aws.webp")} alt="Avatar" style={{width:'300px',height:"200px"}} class="image"/>*/}
        </div>
        <div class="flip-box-back">
          <h2>Website Development</h2>
          <p></p>Build end-to-end applications with our full-stack development team.
        </div>
      </div>
    </div>
    
    <Card.Text style={{backgroundColor:'white'}}>
    <a target="_blank" rel="noreferrer" href="App_web"> Website Development</a>
          </Card.Text>
          
        </Card>   
    
    {/*</Row>*/}
    </div>
   <div className='serv_row'>
    
    <Card  className="Card1" style={{ backgroundColor:'white'}}>
      
      <div class="flip-box">
      <div class="flip-box-inner">
        <div class="flip-box-front">
        <Card.Img variant="top" src={require("./Images/mobile_serv.jpg")} alt=".." className='img_serv' />
        
        </div>
        <div class="flip-box-back">
          <h2>Mobile App Development</h2>
          <p></p>Transform your idea into a fully functional app with our Mobile app development team.
        </div>
      </div>
    </div>
    
    <Card.Text style={{backgroundColor:'white'}}>
    <a target="_blank" rel="noreferrer" href="mobile"> Mobile App Development</a>
          </Card.Text>
          
        </Card>   
    
        <Card  className="Card1" style={{ backgroundColor:'white'}}>
      
      <div class="flip-box">
      <div class="flip-box-inner">
        <div class="flip-box-front">
        <Card.Img variant="top" src={require("./Images/data_serv.jpg")} alt=".." className='img_serv'/>
        
        </div>
        <div class="flip-box-back">
          <h2>Cloud and Data</h2>
          <p></p>Our data experts conduct exploratory analysis and modeling to gain meaningful insights.
        </div>
      </div>
    </div>
    
    <Card.Text style={{backgroundColor:'white'}}>
    <a target="_blank" rel="noreferrer" href="/Analytics">Cloud and Data</a>
          </Card.Text>
          
        </Card>   
    
        <Card  className="Card1" style={{ backgroundColor:'white'}}>
      
      <div class="flip-box">
      <div class="flip-box-inner">
        <div class="flip-box-front">
        <Card.Img variant="top" src={require("./Images/iot.jpg")} alt=".."  className='img_serv'/>
         {/* <img src={require("./Images/aws.webp")} alt="Avatar" style={{width:'300px',height:"200px"}} class="image"/>*/}
        </div>
        <div class="flip-box-back">
          <h2>IoT Based Applications</h2>
          <p></p>IoT services can help you create smart solutions for your home,business or industry.
        </div>
      </div>
    </div>
    
    <Card.Text style={{backgroundColor:'white'}}>
    <a target="_blank" rel="noreferrer" href="/Iot">IoT Based Applications</a>
          </Card.Text>
          
        </Card>   
    
    </div>
    </div>
    
                              </section>

  
    <div className=' about_box cont_contact'>
    
    
       
      <div className='sup_contact2' >
                
                  <br/><br/>
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
                       
                        <div className='sub_contact ' >
    <img src={require("./Images/mission2.jpg")}  alt=".." className=" abt_Img align-left2 slide-in"/>
   
   
    
      </div>
      
             
                      </div>
  
                      


                             
{/*
    <div className='cont_why' >
        
        <div className='main_why '>
         
      <img  src={require("./Images/mission2.jpg")}  alt=".." />
      
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
       
    <div className='main_why '>
    <img src={require("./Images/vision.jpg")}  alt=".." className=" abt_Img align-right2 slide-in"/>

    </div>

    </div>
*/}

                          </>

      
    );
  }
  export default Services;
  