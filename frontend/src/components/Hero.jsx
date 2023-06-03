import { Container, Card, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className='py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>MERN Authentication</h1>
          <p className='text-center mb-4'>
            This is a boilerplate for MERN authentication that store a JWT in a
            HTTP-Only cookie. It uses React, React Router, React Bootstrap,
            Redux Toolkit, Node, Express, MongoDB, and Mongoose.
          </p>
          <div className='d-flex'>
            <Button className='me-3' variant='primary' href='/login'>
              Sign In
            </Button>
            <Button variant='secondary' href='/register'>
              Sign Up
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
