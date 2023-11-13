//import {Container,Col,Row} from 'react-bootstrap';
import './style_vision.css'

function Vision() {
 

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
  
  const sliderImages = document.querySelectorAll('.slide-in2');
  
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
      
    
    <section id="vision" className=' mt-5'>
      {/*
      <div className=" clearfix ">
      <img src={require("./Images/sld4.jpg")} alt=".." className=" abt_img align-left slide-in"/>
      <div className="site-wrap">
        
      <h1 style={{color:'red'}} >Our Vision</h1>

       <p><em>
       <em>To help businesses achieve their goals through innovative solutions that are simple to adopt.</em>
</em></p><br/>
</div>

            </div>       
            <div className=" clearfix "> 
<img src={require("./Images/sld4.jpg")} alt=".." className=" abt_img align-right slide-in"/>
      <div className="site-wrap">
        
      <h1 style={{color:'red'}} >Our Mission</h1>
       <p><em>
       To make a positive difference in the business of our customers through the best possible services,quality of products and competitive prices.
</em></p><br/>

      
     
</div>
      
    </div>
   
  
    */}
    <div id="rect" >
    <div id="circle_vision"></div>
    <div className='txt'>
      <center>
    <h2 style={{color:'red'}}><b>OUR</b ><br/><b>VISION</b></h2><br/>
    </center>
                <em><b>To help businesses achieve their goals through innovative solutions that are simple to adopt.</b></em>
                </div>    
</div>

<div id="rect_mission">

    <div id="circle_mission"></div>
    <div className='txt'>
    <center>
    <h2 style={{color:'red'}}><b>OUR</b ><br/><b>MISSION</b></h2><br/>
                  
    </center>       <em><b>       
                  To make a positive difference in the business of our customers through the best possible services,quality of products and competitive prices.
                </b></em>
                </div>
           
</div>

    {/*
   
  
  <div class="container_vi container-fluid mt-4" style={{backgroundColor:"white"}}>
        
       
        <div class="wrapper">
            <section class="main">
                
              
              <div class="circle">
                
              </div>
    
                <p><br/><br/>
                <h2 style={{color:'red'}}><b>OUR</b ><br/><b>VISION</b></h2><br/>
                <em><b>To help businesses achieve their goals through innovative solutions that are simple to adopt.</b></em>
                   </p>
              
              
            
            </section>
        </div>
    
        <div class="wrapper">
            <section class="main">
                
              
              <div class="circle2"></div>
    
                <p>
                  <br/><br/>
                  <h2 style={{color:'red'}}><b>OUR</b ><br/><b>MISSION</b></h2><br/>
                  
                  <em><b>       
                  To make a positive difference in the business of our customers through the best possible services,quality of products and competitive prices.
                </b></em>
           
                </p>
              
              
            
            </section>
        </div>
    
  </div>*/}
    
    
    {/*
    
        <div className='box mt-2'>
        <div className=" clearfix ">
<img className=" abt_img  align-left slide-in" src={require("./Images/vision.jpg")} alt="Pineapple" />
<div className="site-wrap">
  
<h1 style={{textAlign:'center',color:"red"}}>OUR VISION</h1>

       <p><em>
       <em><b>To help businesses achieve their goals through innovative solutions that are simple to adopt.</b></em>
</em></p><br/>
</div>
</div>
      

<div className=" clearfix ">
<img className="abt_img img3 align-right slide-in" src={require("./Images/mission2.jpg")} alt="Pineapple" width="500" height="210"/>
<div className="site-wrap">
<h1 style={{textAlign:'center',color:"red"}}>OUR MISSION</h1>
       <p><em><b>       To make a positive difference in the business of our customers through the best possible services,quality of products and competitive prices.
       </b>
</em></p><br/>
</div>
</div>
   </div> 
  */}

            <br/>
            <br/>

            {/*<div className="cont_abt">
    

      <div className="main_why">
      <p>
              <h1 style={{textAlign:'center',color:"red"}}>TOOLS</h1>
                         <h1 style={{textAlign:'center',color:"red"}} className='h1-vision'>Our Backend Support</h1>
            </p>
            
      <div className="clm">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" height="100px" width="100px" alt="Client 1"/>
            <img src="https://logos-world.net/wp-content/uploads/2022/11/Splunk-Emblem.png"height="100px" width="100px" alt="Client 2"/>
              
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png" height="100px" width="100px"alt="Client 3"/>
              <img src="https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png" height="100px" width="100px"alt="Client 1"/>
              
              <img src="https://www.pngmart.com/files/23/Google-Cloud-Logo-PNG-Photo-1.png" height="100px" width="100px" alt="Client 3"/>
             
             
          
              <img src="https://toppng.com/uploads/preview/jenkins-logo-11609365847mufysaivph.png"  height="100px" width="100px" alt="Client 1" />
              <img src="https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-Logo-2006-2017.png " height="100px" width="100px" alt="Client 2"/>
              
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"   height="100px" width="100px" alt="Client 3"/>
              
              <img src="https://static-00.iconduck.com/assets.00/aws-cloudformation-icon-1682x2048-epjafca1.png" height="100px" width="100px"alt="Client 1"/>
              
              <img src="https://1000logos.net/wp-content/uploads/2022/08/Microsoft-Power-BI-Logo.png" height="100px" width="100px" alt="Client 2"/>
              
               <img src="https://logos-world.net/wp-content/uploads/2021/10/Tableau-Emblem.png"  height="100px" width="100px" alt="Client 3"/>
                
             </div>
      </div>
</div>*/}
    
    
            <div class="cont mt-4" style={{backgroundColor:"white"}}>
        
      
        
        <div class="wrapper">
            <section class="sub">
       

            <p>
            <h3 style={{textAlign:'center',color:"red"}} >CHECK OUT OUR
</h3>
              <h1 className='h1-vision' style={{textAlign:'center',color:"red"}}><b>TECHNOLOGY STACK
</b></h1>
             
                         
            </p>
            <div className='clm'>

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" height="100px" width="100px" alt="Client 1"/>
            <img src="https://logos-world.net/wp-content/uploads/2022/11/Splunk-Emblem.png"height="100px" width="100px" alt="Client 2"/>
              
           
              <img src="https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png" height="100px" width="100px"alt="Client 1"/>
              
              <img src="https://www.pngmart.com/files/23/Google-Cloud-Logo-PNG-Photo-1.png" height="100px" width="100px" alt="Client 3"/>
             
             
          
              <img src="https://toppng.com/uploads/preview/jenkins-logo-11609365847mufysaivph.png"  height="100px" width="100px" alt="Client 1" />
              
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png" height="100px" width="100px"alt="Client 3"/>
             
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"   height="100px" width="100px" alt="Client 3" style={{padding:'15px'}}/> 
              <img src="https://static-00.iconduck.com/assets.00/aws-cloudformation-icon-1682x2048-epjafca1.png" height="100px" width="100px"alt="Client 1"/>
              
              <img src="https://1000logos.net/wp-content/uploads/2022/08/Microsoft-Power-BI-Logo.png" height="100px" width="100px" alt="Client 2"/>
              
               <img src="https://logos-world.net/wp-content/uploads/2021/10/Tableau-Emblem.png"  height="100px" width="100px" alt="Client 3"/>
              
               
               <img src="https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-Logo-2006-2017.png " height="100px" width="100px" alt="Client 2" style={{padding:'10px'}}/>
               
              </div>
              
              
            </section>
          
        </div>
       
</div>

   {/*        <div className='cont '>
           
          
              <Row >              
               <Col>
               
              <p>
              <h1 style={{textAlign:'center',color:"red"}}>TOOLS</h1>
                         <h1 style={{textAlign:'center',color:"red"}} className='h1-vision'>Our Backend Support</h1>
            </p>

                <div className='clm'>
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" height="100px" width="100px" alt="Client 1"/>
            <img src="https://logos-world.net/wp-content/uploads/2022/11/Splunk-Emblem.png"height="100px" width="100px" alt="Client 2"/>
              
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png" height="100px" width="100px"alt="Client 3"/>
              <img src="https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png" height="100px" width="100px"alt="Client 1"/>
              
              <img src="https://www.pngmart.com/files/23/Google-Cloud-Logo-PNG-Photo-1.png" height="100px" width="100px" alt="Client 3"/>
             
             
          
              <img src="https://toppng.com/uploads/preview/jenkins-logo-11609365847mufysaivph.png"  height="100px" width="100px" alt="Client 1" />
              <img src="https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-Logo-2006-2017.png " height="100px" width="100px" alt="Client 2"/>
              
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"   height="100px" width="100px" alt="Client 3"/>
              
              <img src="https://static-00.iconduck.com/assets.00/aws-cloudformation-icon-1682x2048-epjafca1.png" height="100px" width="100px"alt="Client 1"/>
              
              <img src="https://1000logos.net/wp-content/uploads/2022/08/Microsoft-Power-BI-Logo.png" height="100px" width="100px" alt="Client 2"/>
              
               <img src="https://logos-world.net/wp-content/uploads/2021/10/Tableau-Emblem.png"  height="100px" width="100px" alt="Client 3"/>
              
               </div>
               
               </Col>
        </Row>


</div>*/}
 </section>
  


    
    );
  }
  export default Vision;
  