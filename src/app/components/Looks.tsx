"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export default function Looks() {
  return (
    <div className="bg-[#FF5757] w-full min-h-screen flex justify-center items-center">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="w-[80%]"
        loop={true}
        modules={[Navigation, Pagination]}
        style={{
          // @ts-ignore
          "--swiper-navigation-color": "#ffff",
          "--swiper-pagination-color": "#ffff",
          "--swiper-pagination-bottom": "0px",
        }}
      >
        <SwiperSlide>
          <Image
            src="/images/nashville.jpeg"
            width={300}
            height={200}
            layout="responsive"
            alt="image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/temple.jpeg"
            width={300}
            height={200}
            layout="responsive"
            alt="image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/ny.jpeg"
            width={300}
            height={200}
            layout="responsive"
            alt="image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/ny.jpeg"
            width={300}
            height={200}
            layout="responsive"
            alt="image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
