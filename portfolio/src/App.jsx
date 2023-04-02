import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Hero, Navbar, Tech, Works, LeftCol, RightCol } from './components';
import Floating_objects from './Floating_objects';

const App = () => {
  return (
    <BrowserRouter>
      <Floating_objects className="z-10" />

      <div className='relative z-0 bg-primary bg-transparent'>

        <div className='bg-heo-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>

        <LeftCol className= 'hidden md:flex fixed bottom-0 left-16' />

        <About />
        {/* <Experience/> */}
        <Tech />
        <Works />
        <Contact />

        <RightCol className='hidden md:flex fixed bottom-52 -right-14' />


      </div>

    </BrowserRouter>
  );
}

export default App;
