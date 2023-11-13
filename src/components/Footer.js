import {  animateScroll as scroll } from 'react-scroll'
import Container from 'react-bootstrap/Container';

function Footer() {


  return (
    <footer>
      <Container className='margin_footer'>
      
      <div className="col-md-3 " >
                <h1 className="logo">
                <img src={require("./Images/skylan_icon.png")} alt=".." height="60" width="180" />
                </h1>
                <p className="footer-text">
                  Best solutions for your businesses
        
                </p>
                <p className="footer-title">Contact</p>
                <p className="footer-text">
                  skylan ,Indore
        
                </p>
              </div>
              
              <div className="col-md-3 ">
                <p className="footer-title">Services</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="/Aws" > AWS</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="/monitor" > Enterprises Development Solutions</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="App_web"> Website Development</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="mobile"> Mobile App Development</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="/Analytics">Cloud And Data </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="/Iot">Iot baesd Application </a>
                  </li>
                </ul>
              </div>
              
                    
          
          
            
            <div className="col-md-3 ">
                <p className="footer-title">Our Expertise</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="/expert_fin" > Fintech Solutions</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="/expert_health" > Healthcare/Pharma Industry Solutions</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="/expert_mech"> Manufacturing/Supply Chain Solutions</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="/expert_aero"> Aerospace Industries Solutions</a>
                  </li>
                </ul>
              </div>
              
              <div className="col-md-3 ">
                <p className="footer-title">Our Projects</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="/industry" > Websites/Apps</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="/industry" > Healthcare/Pharma Industry Solutions</a>
                  </li>
                 
                 {/* <li>
                    <a target="_blank" rel="noreferrer" href="/expert_mech"> Manufacturing/Supply Chain Solutions</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="/expert_aero"> Aerospace Industries Solutions</a>
                </li>*/}
                </ul>
                
              </div>
            
                
              {/*<div className="col-md-3 ">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/darkleas" > Github</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/burhankocadag0" > Twitter</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/burhan-kocada%C4%9F-49a3331a5/"> Linkedin</a>
                  </li>
                </ul>
  </div>*/}
              
              
             
              </Container>
      
      
    
      
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
