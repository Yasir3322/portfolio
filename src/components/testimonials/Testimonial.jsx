import React from 'react';
import './testimonial.css';
import img from '../../assets/avatar2.jpg';


// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const clientReview = [
    {
      id:1,
      avt:img,
      name:"Muhammad Asim",
      review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aspernatur dolore dolorum, vel, enim ipsa quos non sunt officia facilis reprehenderit mollitia officiis ipsam libero magnam expedita, est veritatis ullam?",

    },
    {
      id:2,
      avt:img,
      name:"Muhammad Asim",
      review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aspernatur dolore dolorum, vel, enim ipsa quos non sunt officia facilis reprehenderit mollitia officiis ipsam libero magnam expedita, est veritatis ullam?",

    },
    {
      id:3,
      avt:img,
      name:"Muhammad Asim",
      review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aspernatur dolore dolorum, vel, enim ipsa quos non sunt officia facilis reprehenderit mollitia officiis ipsam libero magnam expedita, est veritatis ullam?",

    },
    {
      id:4,
      avt:img,
      name:"Muhammad Asim",
      review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aspernatur dolore dolorum, vel, enim ipsa quos non sunt officia facilis reprehenderit mollitia officiis ipsam libero magnam expedita, est veritatis ullam?",

    },
]

const Testimonial = () => {
  return (
    <section id='testimonial'>
        <h5>My Clients Review</h5>
        <h2>Testimonials</h2>
        <Swiper className="container testimonial_container"
           modules={[Pagination]}
           spaceBetween={40}
           slidesPerView={1}
           pagination={{ clickable: true }}
        
        >
            {clientReview.map(clientreview => {
                const {id , avt , name , review} = clientreview;

                return(
                    <SwiperSlide className='testimonial' key={id}>
                    <div className='testimonial_client_avt'>
                      <img src={avt} alt="avatar" className='client_avt'/>
                    </div>
                     <h3 className='client_name'>{name}</h3>
                     <small className='client_review'>{review}</small>
                    </SwiperSlide>
                )
            })}    
        </Swiper>
    </section>
  )
}

export default Testimonial