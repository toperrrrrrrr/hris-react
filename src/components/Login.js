import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Input, Alert, Card } from 'react-bootstrap';


const Login = () => {
  return (
    
    <>

    <div className="container">
      <Card>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Form>
            <input type='text' ></input>
            <input type='password'></input>
            <Button type='button'variant='primary'> login</Button>
            <Alert variant='success'> Login Success </Alert>
          </Form>
        </Card.Body>
      </Card>
     
    </div>

    </>
  );
};

export default Login;
