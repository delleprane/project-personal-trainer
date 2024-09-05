import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { reviewsTexts } from "../../Utils/Texts"

import 'swiper/css';
import 'swiper/css/pagination';

import './CarouselReviews.css';

import { Pagination, Autoplay } from 'swiper/modules';

export default function CarouselReviews() {
    return (
        <>
            <Swiper
                pagination={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper">
                {reviewsTexts.map((item) =>
                    <SwiperSlide>
                        <div className="info-review">
                            <h2>{item.title}</h2>
                            <p>{item.content}
                            </p>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );
}