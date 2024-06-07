import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './LandingPage.css'
const LandingPage = () => {
  return (
    <div className='main'>
        <Container>
            <Row>
                <div className='intro-text'>
                  <div>
                    <h1 className='title'>Welcome to Notes App</h1>
                    <p className='subtitle'>One Safe place to all your notes.</p>
                  </div>
                  <div className='btnContainer'>
                      <a href='/login'>
                        <Button className='btnlogin landingbutton' size='lg'>
                          Login
                        </Button>
                      </a>
                      <a href='/register'>
                        <Button className='btnreg landingbutton btn-primary' size='lg' variant='primary'>
                          SignUp
                        </Button>
                      </a>
                  </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default LandingPage