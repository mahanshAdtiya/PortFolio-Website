import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)  
  useEffect(() => {

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset

        if ((prevScrollPos > currentScrollPos) !== visible)
        {
            setVisible(prevScrollPos > currentScrollPos)
        }

        setPrevScrollPos(currentScrollPos)
        
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

}, [prevScrollPos, visible])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${ styles.paddingX } w-full flex items-center py-5 transition-all fixed top-0 z-20 ${visible ? "translate-y-0": "-translate-y-28"} ${ scrolled ? "bg-black bg-opacity-50 " : "bg-transparent"}`} >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto l'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-5xl font-light cursor-pointer flex font-montserrat' style={{ fontSize: '18px' }}>
            Mahansh &nbsp;
            <span className='sm:block hidden'> | FullStack Developer</span>
          </p>


        </Link>

        <ul className=' list-none hidden sm:flex flex-row gap-10 items-center translate-x-24'>
          {navLinks.map((nav,index) => (
            nav.title !="resume" ? (<li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-red-500"
              } hover:text-white text-[18px] font-medium cursor-pointer transition-all`}
              onClick={() => setActive(nav.title)}
            >
            <div className="group"> <a href={`#${nav.id}`} className="group-hover:opacity-100"> <span className="text-white opacity-100 group-hover:text-red-500">0{index+1}. </span>{nav.title} </a> </div>

            {/* <div class="group"> <a href={`#${nav.id}`} class="group-hover:opacity-100"> <span class="text-white opacity-100 group-hover:opacity-0">0{index+1}. </span>{nav.title} </a> </div> */}
              </li>) : <li>
            <a 
            href="../assets/2021334_Mahansh"
            download="Mahansh_Aditya_Resume.pdf"      
            className="text-red-500 border-2 border-red-500 rounded-lg px-2 py-1 hover:text-red-300  hover:cursor-pointer transition-all" >Resume
            </a>
            </li>
          ))}

        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${ !toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`} >
           <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-red-400"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          </div>
          
        </div>
      </div>

    </nav>
  );
};

export default Navbar;