import React from 'react'
import { serviceCardData } from '../../mockData/serviceCardData'
import {motion} from 'framer-motion'
import { SlideLeft } from '../../utility/animation'
const ServicesSection = () => {
  return (
    <div className='mx-16 mt-20 text-center bg-[#f9fafc]'>
        <div className="container py-24">
            {/* header section */}
            <div className='space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5' >
                <h1 className='uppercase font-semibold text-orange-600'>Why Choose Us</h1>
                <p className='font-semibold text-3xl'>Benefits of online tutoring services with us</p>
            </div>
            {/* cards section */}
            <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-6'>
                {
                    serviceCardData.map((item,i)=>(
                        <motion.div key={i}
                        variants={SlideLeft(item.delay)}
                          initial='hidden'
                          whileInView={"visible"}
                        className='space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]'>
                            {/* icon section`` */}
                            <div style={{background:item.bgColor}} className='w-10 h-10 rounded-lg flex justify-center items-center text-white'>
                                <div className='text-2xl ' >
                                    {item.icon}
                                </div>
                            </div>
                            <p className='font-semibold'>{item.title}</p>
                            <p className='text-sm text-gray-500 '>{item.description}</p>
                        </motion.div>
                    ))
                }
            </div>

        </div>
  
      

    </div>
  )
}

export default ServicesSection
