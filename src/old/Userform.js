import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col,Container  } from 'reactstrap';

class Userform extends React.Component {
  render(){
     var i=1;
     var a=2;
     var b=3;
     var mystyle={
      color: 'green',
      fontSize: '30px'
     }
  return (

    <Container>
    {/*jhg*/}
    <Row>
      <Col sm="4">
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <Button color="success">Submit</Button>
      <p className="text-danger">Etiam porta sem malesuada ultricies vehicula.</p>
      <p>1+1= {1+1}</p>
      <p style={mystyle} className='yyyffgfguyt'>{i==2? a : b}</p>
    </Form>
    </Col>
    </Row>
    </Container>
  );
}
  }
export default Userform;