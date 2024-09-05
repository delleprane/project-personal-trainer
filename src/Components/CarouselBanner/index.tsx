import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './CarouselBanner.css';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function CarouselBanner() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="banner-img" src="images/banner_1.png" alt="Banner 1"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="banner-img" src="images/banner_2.png" alt="Banner 2"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="banner-img" src="images/banner_3.png" alt="Banner 3"></img>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
