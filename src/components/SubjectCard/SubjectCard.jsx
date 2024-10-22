import React from 'react'
import {motion} from 'framer-motion'
import { FaComputer } from 'react-icons/fa6'
import { FaBook } from 'react-icons/fa'

const subjectList = [
    {
        id: 1,
        name: "Engineering",
        icon: <FaBook />,
        color: '#0063ff',
        delay: .2
    },
    {
        id: 2,
        name: "English",
        icon: <FaBook />,
        color: '#00c986',
        delay: .3
    },
    {
        id: 3,
        name: "Programming",
        icon: <FaBook />,
        color: '#922aee',
        delay: .4
    },
    {
        id: 4,
        name: "Science",
        icon: <FaBook />,
        color: '#ea7516',
        delay: .5
    },
    {
        id: 5,
        name: "History",
        icon: <FaBook />,
        color: '#075267',
        delay: .6
    },
    {
        id: 6,
        name: "Psychology",
        icon: <FaBook />,
        color: '#986d1d',
        delay: .7
    },
    {
        id: 7,
        name: "Web Design",
        icon: <FaBook />,
        color: '#b93838',
        delay: .8
    },
    {
        id: 8,
        name: "See all",
        icon: <FaBook />,
        color: '#464646',
        delay: .9
    }
];

const SubjectCard = () => {
  return (

    <>
        <div id='tutors' className="container py-14 md:py-24">
                {/* header section */}
                <div className='space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5'>
                     
                    <h1 className='uppercase font-semibold text-orange-500'>Our tutor subjects </h1>
                    <p className='font-semibold text-3xl'>Find Online Tutor in Any Subject</p>
                     


            </div>
            {/* cards section  */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                {
                    subjectList.map((subject)=>(
                        <motion.div
                        key={subject.id}
                        initial={{opacity:0,x:-200}}
                        whileInView={{opacity:1,x:0}}
                        transition={{type:"spring",stiffness:100,delay:subject.delay}}
                        className='border rounded-lg border-secondary p-4 flex justify-start gap-4 items-center hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer'>
                            <div style={{backgroundColor:subject.color+'20',color:subject.color}} className='w-10 h-10 rounded-md flex justify-center items-center  '>
                                {subject.icon}

                            </div>
                            <p>{subject.name}</p>
                        </motion.div>
                    ))
                }
            </div>

        </div>
    </>
  )
}

export default SubjectCard
