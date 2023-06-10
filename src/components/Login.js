import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Input, Alert, Card, Container } from 'react-bootstrap';


const Login = () => {
  return (
    
    <>
    <Container>
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
    </Container>
    </>
  );
};

export default Login;
