"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaJava, FaHtml5, FaAws } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiNextdotjs,
  SiPython,
  SiMysql,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const certificates = [
  { name: "Command Line", src: "/certificates/command.png" },
  { name: "C#", src: "/certificates/csharp.png" },
  { name: "HTML", src: "/certificates/html.png" },
  { name: "Java", src: "/certificates/java.png" },
  { name: "Next.js", src: "/certificates/nextjs.png" },
  { name: "Python 3", src: "/certificates/python.png" },
  { name: "SQL", src: "/certificates/sql.png" },
];

export default function About() {
  return (
    <div id="about" className="py-12 bg-white text-black scroll-mt-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* Left Side - Story & Skills */}
        <div className="space-y-6">
          {/* Title with decorative line */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-yellow-500">About</h2>
            <div className="w-16 h-1 bg-yellow-500 rounded-full"></div>
          </div>

          <p className="text-lg">
            I&apos;ve studied various web development languages (all listed
            underneath) and excel in front-end development. Currently, I am
            practicing with Next.js and learning about AWS. I wish to study
            back-end development as well so I can own a startup.
          </p>
          <p className="text-lg">
            I&apos;m looking for an opportunity to start my career in Web
            Development. I enjoy learning Web Development and hope to master
            everything there is to being a full-stack developer. Ideally, I
            would like a position where I can work front-end while studying the
            back-end.
          </p>

          {/* SDK Icons Grid with Labels */}
          <div className="grid grid-cols-5 gap-6 text-center text-lg">
            <div className="flex flex-col items-center">
              <FaJava className="text-orange-500 text-4xl" />
              <span>Java</span>
            </div>
            <div className="flex flex-col items-center">
              <SiJavascript className="text-yellow-400 text-4xl" />
              <span>JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <FaHtml5 className="text-red-500 text-4xl" />
              <span>HTML</span>
            </div>
            <div className="flex flex-col items-center">
              <TbBrandCSharp className="text-blue-500 text-4xl" />
              <span>C#</span>
            </div>
            <div className="flex flex-col items-center">
              <SiPython className="text-yellow-500 text-4xl" />
              <span>Python</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-blue-400 text-4xl" />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <SiVite className="text-purple-400 text-4xl" />
              <span>Vite</span>
            </div>
            <div className="flex flex-col items-center">
              <SiNextdotjs className="text-black text-4xl" />
              <span>Next.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiMysql className="text-blue-300 text-4xl" />
              <span>SQL</span>
            </div>
            <div className="flex flex-col items-center">
              <FaAws className="text-yellow-500 text-4xl" />
              <span>Amplify</span>
            </div>
          </div>
        </div>

        {/* Right Side - Carousel */}
        <div className="w-full flex justify-center items-center">
          {" "}
          {/* Center vertically and horizontally */}
          <div className="w-full max-w-lg">
            {" "}
            {/* Constrain carousel width */}
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
                bulletClass: "swiper-pagination-bullet !bg-yellow-500", // Yellow dots
                bulletActiveClass:
                  "swiper-pagination-bullet-active !bg-yellow-500", // Active dot
              }}
              className="relative h-full"
            >
              {certificates.map((cert, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center"
                >
                  {" "}
                  {/* Center slide content */}
                  <div className="p-6 bg-black rounded-lg shadow-lg w-64 h-64 mx-auto">
                    {" "}
                    {/* Centered box */}
                    <div className="relative w-full h-48">
                      <Image
                        src={cert.src}
                        alt={cert.name}
                        fill
                        className="rounded-lg object-contain"
                      />
                    </div>
                    <p className="text-center text-lg font-semibold text-yellow-500">
                      {cert.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
              {/* Pagination Dots Container */}
              <div className="swiper-pagination mt-8 !bottom-0" />{" "}
              {/* Force dots to bottom */}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
