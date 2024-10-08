"use client";
import Image from "next/image";
import React from "react";
import Typewriter from 'typewriter-effect';
import { BsYoutube, BsLinkedin, BsGithub } from 'react-icons/bs';

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-200">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-blue-900">
            I am, Mudasser Haryani
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: ['Full Stack Web Developer', 'UI/UX Designer', 'Video Editor'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[40px] h-[2px] bg-blue-700"></div>
          <p className="mb-8 leading-relaxed text-justify">
            Dedicated professional with a Masters degree and diverse
            experience in office administration, pharmacy ownership, and
            customs clearance. Recently completed Quarter 1 of the Governor
            Initiative Program (GIAIC) with a focus on TypeScript, achieving a
            98th percentile result. Currently progressing in Quarter 2,
            learning Next.js as part of my journey toward applied Generative
            AI and cloud development. Proficient in MS Office, Adobe Suite,
            and social media management. Adept at multitasking and
            problem-solving, with a commitment to excellence and continuous
            learning.
          </p>
          
          <div className="flex justify-center">
            <a href={"#Contact"}>
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Contact
              </button>
            </a>
          </div>
        </div>

        {/* Image container with customized styling */}
        <div className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded-full border-4 border-blue-500 shadow-xl mx-auto w-[20rem] h-[20rem]"
            alt="Mudasser Haryani"
            width={720}
            height={720}
            src={require('../../../public/assets/picture/Mudasser Haryani Profile photo.jpg')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
