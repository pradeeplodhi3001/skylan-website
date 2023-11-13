import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Connect() {


    return (
  
<section id="CONNECT" mt-0>
    <Form className='col2_career '>
  
    
  <Form.Group  controlId="formGridName">
<Form.Label>Name</Form.Label>
<Form.Control  type="text" placeholder="Enter your full name" required maxLength='30' className='input'/>
</Form.Group>

<Form.Group controlId="formGridEmail">
<Form.Label>Email ID</Form.Label>
<Form.Control type="email" placeholder="Enter your full name" required className='option' />
</Form.Group>

<Form.Group   controlId="formGridAddress2">
<Form.Label>Contact No.</Form.Label>
<Form.Control type='text' placeholder="1234567890(10 digits only)" required pattern='[+ 0-9]{10}'className='input' />
</Form.Group>


<Form.Group  controlId="formGridAdd">
<Form.Label>Address</Form.Label>
<Form.Control type="text" placeholder="Enter your full name" required className='input'/>
</Form.Group>



<Form.Group controlId="formGridEmail">
<Form.Label>Github ID</Form.Label>
<Form.Control type="email" placeholder="Enter your github id" required className='option'/>
</Form.Group>

<Form.Group controlId="formGridEmail">
<Form.Label>Linkedin ID</Form.Label>
<Form.Control type="email" placeholder="Enter your Linkedin id" required className='option'/>
</Form.Group>

<Form.Group controlId="formGridEmail">
<Form.Label>Domain</Form.Label>
<Form.Select defaultValue="Choose..." required className='option'>
<option>Frontend developer</option>
<option>Backend developer</option>
<option>Fullstack developer</option>
<option>Data analytics</option>
<option>Machine Learning</option>
<option>AI developer</option>
<option>AWS</option>
</Form.Select>
</Form.Group>

<Form.Group  controlId="formGridAdd">
<Form.Label>Key skills</Form.Label>
<Form.Control type="text" placeholder="Enter your key skills like java,python,react" required className='option'/>
</Form.Group>

<Form.Group controlId="formGridEmail">
<Form.Label>Cover letter</Form.Label>
<Form.Control type="email" placeholder="I am python developer" required className='option'/>
</Form.Group>

<Form.Group controlId="formGridEmail">
<Form.Label>Attach resume</Form.Label>
<Form.Control type="file" placeholder="only docx,pdf" required className='option'/>
</Form.Group>




<br/>
<Button variant="primary" type="submit" className='btn' style={{backgroundColor:'blue'}}>
Submit
</Button>
</Form>
      </section>
      );
    }
    export default Connect;
    