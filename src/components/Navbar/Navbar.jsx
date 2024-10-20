import React, { useState } from 'react'
import { MdOutlineComputer ,MdMenu} from "react-icons/md";
import {motion} from 'framer-motion'
import { NavbarMenu } from '../../mockData/data';
import ResponsiveMenu from './ResponsiveMenu';
import NavbarBanner from './NavbarBanner';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:.5,delay:.5}}
    > 
    <nav >
        <div className='container-fluid flex  justify-between px-16 h-20 items-center '>
            {/* logo section */}
            <div className='flex text-2xl  gap-2 items-center'>
                <MdOutlineComputer className='text-3xl text-secondary'/>
                <span className='font-bold'>                E-TUTOR
                </span>

            </div>
            {/* menu section */}
            <ul className='hidden lg:flex  gap-4 xl:gap-16 '>
               {
                NavbarMenu.map((item)=>(
                    <li key={item.id}>
                        <a className='text-sm xl:text-base hover:text-secondary transition-all duration-300' href={item.link}>{item.title}</a>
                    </li>
                ))
               }
            </ul>
            {/* CTA button section */}
        <div className='hidden lg:block'>
        <button className='font-semibold'>Sign in</button>
        <button className='bg-secondary font-semibold text-white rounded-full ms-3 px-6 py-2'>Register</button>
        </div>
            {/* Mobile Hamburger Menu section */}
            <div className='lg:hidden'>
                <MdMenu onClick={()=>setIsOpen(!isOpen)} className='text-4xl'/>
            </div>

        </div>
    </nav>
    </motion.div>


     {/* mobile sidebar section */}
     <ResponsiveMenu open={isOpen}  /> 
     <NavbarBanner/>

      
    </>
  )
}

export default Navbar
