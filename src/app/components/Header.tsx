"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Header() {
  return (
    <header className="w-full bg-white pt-14 sm:pt-24 pb-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 h-auto shadow-lg rounded-lg overflow-hidden">
        {/* Left Side */}
        <div className="bg-yellow-500 text-black flex flex-col items-center justify-center p-8 md:p-10">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
            <Image
              src="/images/beto.jpeg"
              alt="Profile"
              width={160}
              height={160}
              className="object-cover"
            />
          </div>
          <h1 className="text-2xl md:text-3xl md:text-center font-bold mt-4">
            Roberto Torres
          </h1>
          <p className="mt-3 text-base md:text-lg text-center max-w-[270px] leading-snug">
            I am a full-stack developer that enjoys traveling, spending time
            with friends, and studying web development when I&apos;m not
            working.
          </p>
        </div>

        {/* Image Carousel */}
        <div className="col-span-1 md:col-span-2">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="w-full h-[300px] md:h-[550px]"
          >
            {[
              "/images/temple.jpeg",
              "/images/nashville.jpeg",
              "/images/ny.jpeg",
            ].map((src, index) => (
              <SwiperSlide key={index} className="w-full h-full relative">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </header>
  );
}
