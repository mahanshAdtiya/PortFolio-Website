import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, LeftCol, RightCol } from './components';
import Floating_objects from './Floating_objects';

import { Col, Row } from 'react-bootstrap';

const App = () => {
  return (
    <BrowserRouter>
      <Floating_objects className="z-10" />

      <div className='relative z-0 bg-primary bg-transparent'>

        <div className='bg-heo-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Row>
          <Col md={3}>
            <LeftCol />
          </Col>
          <Col md={9}>
            <About/>
            {/* <Experience/> */}
            <Tech/>
            <Works/>
            <Contact/>
          </Col>
          <Col md={3}>
            <RightCol />
          </Col>
        </Row>

      </div>

    </BrowserRouter>
  );
}

export default App;
