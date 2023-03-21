import {useState, useRef} from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser'

import {styles} from '../styles';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Contact = () => {

  const fromRef = useRef();
  const[form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) =>{}
  const handleSubmit = (e) => {}

  return (
    <div className='xl: mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      
      <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className='flex-[0.75] bf-black-100 p-8 rounded-2xl'>

        <p className={`${styles.sectionSubText} `}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact</h3>

        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8"
        >

          <label className= "flex flex-col">

            <span className='text-white font-medium mb-4'> Your Name</span>
            <input
            type="text"
            name="name"

            />
          </label>

        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")