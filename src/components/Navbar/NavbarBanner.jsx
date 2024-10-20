import React, { useState } from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import { MdCancel } from "react-icons/md";

const NavbarBanner = () => {
    const [isOpen, setIsOpen] = useState(true)
  return (
    <AnimatePresence>
    {
        isOpen && (
            <motion.div
            initial={{opacity:0,y:-10}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0,y:-10}}
            transition={{duration:.4,delay:.7}}

            
            className='bg-primary   py-1 text-sm text-center font-semibold p-1
            hidden lg:block
              relative'>
           <p>
           Are you a university or shcool student for an online tutoring partnership ? 
            <a href="#" className='text-secondary ml-2'>            Talk to us
            </a>
           </p>
            <MdCancel className='  absolute top-1/2 -translate-y-1/2 right-10 cursor-pointer' onClick={()=>setIsOpen(false )}/>
            </motion.div>
        )
    }
    </AnimatePresence>
  )
}

export default NavbarBanner
