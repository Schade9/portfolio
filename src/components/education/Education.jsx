import React from 'react'
import './education.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
        name: 'Primary Level |  2005 - 2011',
        review: 'White Angels Primary School. Kampala Uganda. Earned a PLE certificate.'
    },
    {
        avatar: AVTR2,
        name: "High school O'level | 2012 - 2015",
        review: 'Seeta High School. Seeta Mukono. Earned a UCE certificate.'
    },
    {
        avatar: AVTR3,
        name: "High School A'level | 2016 - 2017",
        review: 'Seeta High School. Seeta Mukono. I majored in PCM/ICT. Earned a UACE certificate'
    },
    {
        avatar: AVTR4,
        name: "College | 2018 - 2023",
        review: 'Makerere University. Bachelor of Science in Software Engineering'
    }
]

const Education = () => {
  return (
    <section id='testimonials'>
        {/* <h5>Review from clients</h5> */}
        <br /><br />
        <h2>Education</h2>

        <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
            {
                data.map(({avatar, name, review}, index) => {
                    return (
                        <SwiperSlide key={index} className="testimonial">
                            <div className="client__avatar">
                                <img src={avatar}/>
                            </div>
                            <h5 className="client__name"><strong>{name}</strong></h5>
                            <p className="client__review">{review}</p>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </section>
  )
}

export default Education
