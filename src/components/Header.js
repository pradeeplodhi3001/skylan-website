import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
//import "../App.css"
//import {Container,Row,Col} from 'react-bootstrap';

//import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Header() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  const sliderImages = document.querySelectorAll('.slide-in');
  
  function checkSlide(e) {
  
    // loop over every image 
    // figure out where it needs to be shown
    // at least 50% of its height
    
    sliderImages.forEach(sliderImage => {
      //half way through images
       const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
      // bottom of the image
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      // half way in the images
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      
      const isNoScrolledPast = window.scrollY < imageBottom;
      
      if(isHalfShown && isNoScrolledPast) {
            sliderImage.classList.add('active');
         } else {
            sliderImage.classList.remove('active');
         }
    })
    
    
  }
  
  window.addEventListener('scroll', debounce(checkSlide));
  
  
  return (
    <>
    <div className='hero-image'>
    <Carousel activeIndex={index} onSelect={handleSelect} className='mt-3' >
    <Carousel.Item interval={2000} >
      
    <div class="bg-image">
    <img src={require("./Images/neural.webp")}  alt=".." className='img_head1'/>
       
    </div>
    
        
          <div class="bg-text">
            <h2><img src={require("./Images/skylan_icon.png")} alt=".." margin='5px' className='img_head2'/></h2>
        <h2>Best place to find and explore that all you need</h2>
          
          </div>
         
      </Carousel.Item>

      {/*<Carousel.Item interval={4000} >
        <img src={require("./Images/sld2.jpg")}  alt=".."width='100%'  height="430px"/>
        <Carousel.Caption>
          
               
               
              <img src={require("./Images/skylan_icon.png")} alt=".."width='100%' height="105"  margin='5px'/>
                    <h3>Best place to find and explore that all you need</h3>
                
                  
                </Carousel.Caption>
  </Carousel.Item>*/}
      <Carousel.Item interval={2000} >
      <img src={require("./Images/sld_slide.jpg")}   alt=".." className='img_head1'/>
        <Carousel.Caption>
        <div className='about_row'>
        <div className="slide-left">
               
               <p>
               <div>
                       
                       <p>
          <h2><b>We,software services in SRE,cloud solutions,data engineering,web solutions,app developement,data analytics,SEO and social media.</b></h2>
          </p>
                       
                       </div>
                       </p>
             </div>
  </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}  >
        
     
      <img src={require("./Images/sld7.jpg")}   alt=".." className='img_head1'/>
      
        <Carousel.Caption>
        <div className='about_row'>
        <div className="slide-right">
               
               <p>
               
                                  
                   
                       <div>
                       
                       <p><h2>Do you want to know how AI works and how to incorporate them in your business,we do this for you..</h2>
                       </p>
                       
                       </div>
                       </p>
             </div>
  </div>
        
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    <div className='cont_contact'>
   <div className='side_why'>
      <img src={require("./Images/ai2.jpg")}  alt=".." className=" abt_Img align-left2 slide-in"/>
      <br/>
      <img src={require("./Images/ai.jpg")}  alt=".." className=" abt_Img align-right2 slide-in"/>
      </div>
      <div className='side_why'>
      <h1 style={{color:'red'}} >ABOUT US</h1><br/>
      <h4 style={{color:'blue'}} className='abt_txtnew'>Excellent IT services for <br /> your success</h4>
      <p>
      
        <p className='abt_txtnew'>
        At Skylan Solutions Pvt Ltd, we are a dynamic team of IT professionals driven by a passion for innovation and excellence.As a leading IT services
       and consultat company,We are committed to delivering cutting-edge solutions that empower businesses to thrive in the digital era.With years of experience and a proven track record,we have earned the trust of our clients across various industries to grow their business.
       
       </p>
              <br/>
                        <button className='btn_client'><a  style={{color:'white',textDecoration:'none'}}href="/client">Register</a></button>
                        <button className='btn_explr'><a  style={{color:'white',textDecoration:'none'}}href="/industry">Explore</a></button>
                        </p>
                        
                        </div>   
                        </div>   
      
{/*
   <div className='container-fluid  about_box'>
    
    
    
    <div className='sup_contact1 ' style={{backgroundColor:'white'}}>
    <img src={require("./Images/ai2.jpg")}  alt=".." className=" abt_Img align-left2 slide-in"/>
      <img src={require("./Images/ai.jpg")}  alt=".." className=" abt_Img align-right2 slide-in"/>
      </div>
      <div className='sup_contact2 ' style={{backgroundColor:'white'}}>
                <p>
                  <br/><br/>
                <h1 style={{color:'red'}} >ABOUT US</h1><br/>
      <h4 style={{color:'blue'}} className='abt_txtnew'>Excellent IT services for <br /> your success</h4>
      <p>
      
        <p className='abt_txtnew'>
        At Skylan Solutions Pvt Ltd, we are a dynamic team of IT professionals driven by a passion for innovation and excellence.As a leading IT services
       and consultat company,We are committed to delivering cutting-edge solutions that empower businesses to thrive in the digital era.With years of experience and a proven track record,we have earned the trust of our clients across various industries to grow their business.
       
       </p>
              <br/>
                        <button className='btn_client'><a  style={{color:'white',textDecoration:'none'}}href="/client">Register</a></button>
                        <button className='btn_explr'><a  style={{color:'white',textDecoration:'none'}}href="/client">Explore</a></button>
                        </p>
                        
                        </p>
                        </div>
                       
                      
                      
             
</div>*/}



  {/*<div className='cont_abt ' >
    <div className='sup_contact1 ' style={{backgroundColor:'white'}}>
      <img src={require("./Images/ai2.jpg")}  alt=".." className=" abt_img align-left2 slide-in"/>
      <img src={require("./Images/ai.jpg")}  alt=".." className=" abt_img align-right2 slide-in"/>
      

      </div>
          <div className='sup_contact2' style={{backgroundColor:'white'}}>
    <br/><br/><br/><br/>

      <h1 style={{color:'red'}} >ABOUT US</h1><br/>
      <h4 style={{color:'blue'}} className='abt_txtnew'>Excellent IT services for <br /> your success</h4>
      <p>
      
        <p className='abt_txtnew'>
        At Skylan Solutions Pvt Ltd, we are a dynamic team of IT professionals driven by a passion for innovation and excellence.As a leading IT services
       and consultat company,We are committed to delivering cutting-edge solutions that empower businesses to thrive in the digital era.With years of experience and a proven track record,we have earned the trust of our clients across various industries to grow their business.
       
       </p>
      
       <div className='btn_align'>
    
          <button className='btn_client'><a  style={{color:'white',textDecoration:'none' }}href="/client">Register</a></button>
                          <button className='btn_explr'><a  style={{color:'white',textDecoration:'none'}}href="/client">Explore</a></button>
                          </div> 
                       
                          </p>
      
    </div>
</div>*/}
    </div>
    {/*<div className='about_box cont_contact'>
    <div className='sup_contact1 ' style={{backgroundColor:'white'}}>
      <img src={require("./Images/ai2.jpg")}  alt=".." className=" abt_Img align-left2 slide-in"/>
      <img src={require("./Images/ai.jpg")}  alt=".." className=" abt_Img align-right2 slide-in"/>
      

      </div>
   
      
      
      <div className='sup_contact2 ' style={{backgroundColor:'white'}}>                
    
      
        
      <h1 style={{color:'red'}} >ABOUT US</h1><br/>
      <h4 style={{color:'blue'}} className='abt_txtnew'>Excellent IT services for <br /> your success</h4>
      <p>
      
        <p className='abt_txtnew'>
        At Skylan Solutions Pvt Ltd, we are a dynamic team of IT professionals driven by a passion for innovation and excellence.As a leading IT services
       and consultat company,We are committed to delivering cutting-edge solutions that empower businesses to thrive in the digital era.With years of experience and a proven track record,we have earned the trust of our clients across various industries to grow their business.
       
       </p>
      
       <div className='btn_align'>
    
          <button className='btn_client'><a  style={{color:'white',textDecoration:'none'}}href="/client">Register</a></button>
                          <button className='btn_explr'><a  style={{color:'white',textDecoration:'none'}}href="/client">Explore</a></button>
                          </div> 
                       
                          </p>
      
    
      
    </div>
    
</div>*/}
  
    {/*<div className='sub_contact' style={{backgroundColor:'white'}}>
      <img src={require("./Images/mission2.jpg")}  alt=".." className=" abt_Img align-right slide-in"/>
</div>*/}
  
    
    

    {/*
    <section id="about" className='container-fluid ' style={{backgroundColor:'#f1f1f1'}}>
    
   
   

    <div className='row '>
  
  
  <div className="col ">

    
    
              
              
              <div className='about_box '>
        <div className="slide-left2">
        
         
        <h1 style={{textAlign:'center',color:"red"}}>ABOUT US</h1>
               
                    
                        <div className='abt_txt'>
                        <h4 style={{color:'blue'}} className='abt_txtnew'>Excellent IT services for <br /> your success</h4>
                        <p className="about_text">At Skylan Solutions Pvt Ltd, we are a dynamic team of IT professionals driven by a passion for innovation and excellence.</p>
                        <p className="about_text">As a leading IT services and consultats company,We are committed to delivering cutting-edge solutions that empower businesses to thrive in the digital era.With years of experience and a proven track record,we have earned the trust of our clients across various industries.
                        <br/><br/>
                        </p>
                        <p>
                        <button className='btn_client'><a  style={{color:'white',textDecoration:'none'}}href="/client">Register</a></button>
                        <button className='btn_explr'><a  style={{color:'white',textDecoration:'none'}}href="/client">Explore</a></button>
                        </p>
                        </div>
                        
                        </div>
                        </div>
                        </div>
    <div class="col">
    <div className='about_row'>
        <div className="slide-right2">
        
                        
        <img src={require("./Images/sld4.jpg")} alt=".." className=" abt_img align-left slide-in"/>
                        
                       
                        </div>
                        </div>
                        
                        
                      
                        </div>
  
  
      </div>      
                                      
      
</section>*/}

        </>
  );
}

export default Header;