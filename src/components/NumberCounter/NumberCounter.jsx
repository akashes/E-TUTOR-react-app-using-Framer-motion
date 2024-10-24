import React from 'react'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'
import { SlideRight } from '../../utility/animation'
import { counterData } from '../../mockData/counterData'
const NumberCounter = () => {
  return (
    <motion.div
    variants={SlideRight(1.2)}
    initial='hidden'
    animate='visible'
    className='mt-5 w-full grid grid-cols-2 md:grid-cols-4 gap-10 bg-secondary text-white py-12 '>
      {
        counterData.map((item,i)=>(
           <div key={i} className='flex flex-col items-center justify-center'>
                <CountUp className='text-3xl font-semibold' end={item.number} 
                start={0}
                duration={3}
                suffix={item.plus ? "+" : ""}
                 delay={1}
                 enableScrollSpy={true}
                scrollSpyOnce={true}
                 />
             <p>
{item.title}
            </p>
           </div>
        ))
      }
       
       
    </motion.div>
  )
}

export default NumberCounter
