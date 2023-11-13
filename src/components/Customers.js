import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
//import Navbar1 from '../components/Navbar1';
//import Footer from '../components/Footer';

import {Col} from 'react-bootstrap';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Customers() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  return (
    <>
    {/*<div className="cont_abt">
    

      <div className="main_why">
      <h1 style={{textAlign:'center',color:"red"}}>OUR CUSTOMERS</h1>
      <div className="img_cust">
      <img src={require("./Images/micro.png")}  alt=".." width='145px' style={{padding:'15px'}}/>
        
        <img src={require("./Images/salesfrc.jpg")}   alt=".." width='145px' style={{padding:'15px'}}/>
          
        <img src={require("./Images/databrics.png")}   alt=".." width='145px' style={{padding:'15px'}} />
          
        <img src={require("./Images/amazon.png")}   alt=".."width='145px' style={{padding:'15px'}} />
          
        <img src={require("./Images/micro.png")}  alt=".." width='145px' style={{padding:'15px'}}/>
          
        <img src={require("./Images/salesfrc.jpg")}   alt=".." width='145px' style={{padding:'15px'}}/>
          
        <img src={require("./Images/databrics.png")}   alt=".." width='145px' style={{padding:'15px'}} />
          
        <img src={require("./Images/amazon.png")}   alt=".."width='145px' style={{padding:'15px'}} />
        </div>
             
      </div>
    </div>*/}
    
     {/*<div class="cont mt-4" style={{backgroundColor:"f1f1f1"}}>
        
       
        <div class="wrapper">
            <section class="sub">
            <p>
              <h1 style={{textAlign:'center',color:"red"}}>OUR CUSTOMERS</h1>
                       
            </p>
              
            <div className='clm'>

            <img src={require("./Images/micro.png")}  alt=".." width='145px' style={{padding:'15px'}}/>
        
      <img src={require("./Images/salesfrc.jpg")}   alt=".." width='145px' style={{padding:'15px'}}/>
        
      <img src={require("./Images/databrics.png")}   alt=".." width='145px' style={{padding:'15px'}} />
        
      <img src={require("./Images/amazon.png")}   alt=".."width='145px' style={{padding:'15px'}} />
        
      <img src={require("./Images/micro.png")}  alt=".." width='145px' style={{padding:'15px'}}/>
        
      <img src={require("./Images/salesfrc.jpg")}   alt=".." width='145px' style={{padding:'15px'}}/>
        
      <img src={require("./Images/databrics.png")}   alt=".." width='145px' style={{padding:'15px'}} />
        
      <img src={require("./Images/amazon.png")}   alt=".."width='145px' style={{padding:'15px'}} />
        
       
              </div>
             
            </section>
        </div>
  </div>
  */}

    <section  style={{backgroundColor:'#f1f1f1'}}>

    
            <Col>
            
              <h1 style={{textAlign:'center',color:"red"}} className='h1-vision'>OUR CUSTOMERS

            </h1>
            
            </Col>
            <div style={{margin:'60px'}}>
            <Carousel activeIndex={index} onSelect={handleSelect}  >
              
      <Carousel.Item interval={1000}>
        <img src={require("./Images/micro.png")}  alt=".." width='145px' style={{padding:'15px'}}/>
        
      <img src={require("./Images/salesfrc.jpg")}   alt=".." width='145px' style={{padding:'15px'}}/>
        
      <img src={require("./Images/databrics.png")}   alt=".." width='145px' style={{padding:'15px'}} />
        
      <img src={require("./Images/amazon.png")}   alt=".."width='145px' style={{padding:'15px'}} />
        
      <img src={require("./Images/micro.png")}  alt=".." width='145px' style={{padding:'15px'}}/>
        
      <img src={require("./Images/salesfrc.jpg")}   alt=".." width='145px' style={{padding:'15px'}}/>
        
      <img src={require("./Images/databrics.png")}   alt=".." width='145px' style={{padding:'15px'}} />
        
      <img src={require("./Images/amazon.png")}   alt=".."width='145px' style={{padding:'15px'}} />
        
     
      </Carousel.Item >
      
      <Carousel.Item interval={4000} >
      <img src={require("./Images/salesfrc.jpg")}   alt=".." width='145px' style={{padding:'15px'}}/>
        
        <img src={require("./Images/databrics.png")}   alt=".." width='145px' style={{padding:'15px'}} />
          
        <img src={require("./Images/amazon.png")}   alt=".."width='145px' style={{padding:'15px'}} />
        
      <img src={require("./Images/flipcart.png")}   alt=".." width='145px' style={{padding:'15px'}}/>
      <img src={require("./Images/zomat.png")}   alt=".." width='145px' style={{padding:'15px'}} />
        
      <img src={require("./Images/ryan.png")}   alt=".." width='145px' style={{padding:'15px'}}/>
        
      </Carousel.Item>
      
    </Carousel>
    </div>
  </section>
       {/* </Container>*/}
      
    {/*
     
    <h2 style={{margin:'12px'}}><u>Our Customers</u></h2>
    <center>   
         <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item >
        <img src={require("./Images/micro.png")}  alt=".." width='145px' style={{padding:'15px'}}/>
        
      <img src={require("./Images/salesfrc.jpg")}   alt=".." width='145px' style={{padding:'15px'}}/>
        
      <img src={require("./Images/databrics.png")}   alt=".." width='145px' style={{padding:'15px'}} />
        
      <img src={require("./Images/amazon.png")}   alt=".."width='145px' style={{padding:'15px'}} />
        
      
     
      </Carousel.Item>
      
      <Carousel.Item >
      <img src={require("./Images/flipcart.png")}   alt=".." width='145px' style={{padding:'15px'}}/>
      <img src={require("./Images/zomat.png")}   alt=".." width='145px' style={{padding:'15px'}} />
        
      <img src={require("./Images/ryan.png")}   alt=".." width='145px' style={{padding:'15px'}}/>
        
      </Carousel.Item>
    </Carousel>
    </center>
  */}
  
    
    </>
  );
}

export default Customers;