import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Floating_objects from "./Floating_objects"

const App = () => {
  return (
    <BrowserRouter>
      <Floating_objects className="z-10" />

      <div className='relative z-0 bg-primary bg-transparent'>

        <div className='bg-heo-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About/>
        {/* <Experience/> */}
        <Works/>
        {/* <Contact/> */}
      </div>

    </BrowserRouter>
  );
}

export default App;