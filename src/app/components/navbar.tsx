'use client'
import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BsYoutube, BsLinkedin, BsGithub } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center justify-between">
          
          {/* Logo */}
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image 
              src="/assets/picture/logo.jpg"  
              alt="Mudasser Haryani" 
              width={100} 
              height={100}
              className="w-[50px]"
            />
            <span className="ml-3 text-xl font-bold">Mudasser Haryani</span>
          </a>
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
            <Link href="#about" className="mr-5 hover:text-gray-900">About</Link>
            <Link href="#skills" className="mr-5 hover:text-gray-900">Skills</Link>
            <Link href="#project" className="mr-5 hover:text-gray-900">Project</Link>
            <Link href="#Contact" className="mr-5 hover:text-gray-900">Contact</Link>
          </nav>

          {/* Social Media Icons and CV Button - Aligned to the Right Side */}
          <div className="flex items-center space-x-6">
            {/* Social Media Icons */}
            <a 
              target="_blank" 
              rel="noopener noreferrer"
              href="https://www.youtube.com/@MudasserHaryani" 
              className="text-[#ff0000]"
            >
              <BsYoutube className="text-3xl hover:text-gray-500" />
            </a>
            <a
              target="_blank" 
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mudasser-haryani-8907b22b4"
              className="text-[#0077b5]"
            >
              <BsLinkedin className="text-3xl hover:text-gray-500" />
            </a>
            <a 
              target="_blank" 
              rel="noopener noreferrer"
              href="https://github.com/MudasserHaryani" 
              className="text-[#0d0c0c]"
            >
              <BsGithub className="text-3xl hover:text-gray-500" />
            </a>

            {/* Download CV Button */}
            <a href="/assets/CV/Mudasser Haryani Resume (1).pdf">
              <button className="inline-flex items-center bg-blue-300 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-base">
                Download CV
                <AiOutlineCloudDownload className="text-xl ml-2"/>
              </button>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
