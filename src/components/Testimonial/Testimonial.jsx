import React from 'react'
import Slider from 'react-slick/lib/slider';
const testimonials = [
    {
        id: 1,
        name: "John Doe",
        text: "The service was outstanding! From the moment I signed up, the team made everything smooth and easy. Highly recommend them!",
        img: "https://picsum.photos/100/100",
        delay: .2
    },
    {
        id: 2,
        name: "Jane Smith",
        text: "I was impressed by the professionalism and speed of their support. Every question I had was answered quickly, making the process hassle-free.",
        img: "https://picsum.photos/101/101",
        delay: .3
    },
    {
        id: 3,
        name: "Mike Johnson",
        text: "Their attention to detail was amazing. I felt supported every step of the way, and the final result was beyond my expectations.",
        img: "https://picsum.photos/102/102",
        delay: .5
    },
    {
        id: 4,
        name: "Emily Davis",
        text: "I couldn’t be happier with the service. Everything went smoothly, and the team was so accommodating and responsive to my needs.",
        img: "https://picsum.photos/104/104",
        delay: .8
    },
    {
        id: 5,
        name: "Chris Brown",
        text: "Fantastic experience! The team delivered exactly what I was looking for, with great communication throughout the process. I’ll be back for sure.",
        img: "https://picsum.photos/103/103",
        delay: 1.1
    }
];
const Testimonial = () => {
   const setting={
    dots:true,
    arrow:false,
    infinite:true,
    speed:500,
    slidesToScroll:1,
    autoplaySpeed:2000,
    cssEase:"linear",
    pauseOnHover:true,
    pauseOnFocus:true,
    responsive: [
      {
        breakpoint:10000,
        settings:{
            slidesToShow:3,
            slidesToScroll:1,
            infinite:true
        }
      },
      {
        breakpoint:1024,
        settings:{
            slidesToShow:2,
            slidesToScroll:1,
            initialSlide:2
        }
      },{
        breakpoint:640,
        settings:{
            slidesToShow:1,
            slidesToScroll:1
        }
      }
 
    ]

   }
    
  return (
  
    <div className="py-14 mb-10">
         <div className="container">
    {/* header section  */}
    <div className='space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6'>
        <h1 className='uppercase font-semibold text-orange-600 '>OUR TESTIMONIALS</h1>
        <p className='font-semibold text-3xl'> What Our Students Say About Us</p>
    </div>

    
    {/* testimonial section  */}
    <div>
        <Slider {...setting}>
            {
                testimonials.map((item)=>(
                    <div key={item.id}>
                        <div className='flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10' >
                            {/* upper section  */}
                            <div className='flex justify-start items-center gap-5'>
                                <img src={item.img} alt="" className='w-16 h-16 rounded-full' />
                                <div>
                                <p className='text-xl font-bold text-black/80'>{item.name}</p>
                                <p>{item.name}</p>
                            </div>
                            </div>
                           
                        {/* bottom section  */}
                        <div className='py-6 space-y-4'>
                            <p className='text-sm text-gray-500'>{item.text}</p>
                            <p>⭐⭐⭐⭐⭐</p>

                        </div>
                        </div>


                    </div>
                ))
            }
        </Slider>
    </div>
   </div>
    </div>
  )
}

export default Testimonial
