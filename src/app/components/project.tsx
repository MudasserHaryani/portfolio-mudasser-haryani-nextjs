'Use client'
import Image from 'next/image'
import React from 'react'


const Project = () => {
  return (
    <div id='project'>
        <section className="text-gray-600 body-font">
  <div className="container px- py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Projects By Mudasser Haryani
      </h1>
      
    </div>
    <div className="flex flex-wrap -m-8 -mt-[5rem]">
        {/* {Project class} */}
        <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/assets/project/project-1.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Resume
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              GIAIC Hackathon milestone 1
            </h1>
            <p className="leading-relaxed line-clamp-3">
              This is my first project which I've created using HTML, CSS and Typescript for my hackathon project for GIAIC.
            </p>
            <a 
            target='_blank'
            href='https://resume-builder-by-mudasser-haryani-u7og.vercel.app/'>
            <p className='Leading-relaxed text-blue-500 hover:underline'>View Projects..</p>
            </a>
          </div>
        </div>
      </div>
     
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/assets/project/project-2.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Interactive Resume Generator
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              GIAIC Hackathon
            </h1>
            <p className="leading-relaxed line-clamp-3">
              This is my Second project which I've created using HTML, CSS and Typescript for my hackathon project for GIAIC.
            </p>
            <a 
            target='_blank'
            href='https://milestone5-shareable-resume-builder-six.vercel.app/'>
            <p className='Leading-relaxed text-blue-500 hover:underline'>View Projects..</p>
            </a>
          </div>
        </div>
      </div>
      
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../public/assets/project/project-3.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Home work assignment given on wed 25-sep-2024
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              GIAIC Class Homework
            </h1>
            <p className="leading-relaxed line-clamp-3">
              This is my GIAIC honework assignment project which I've created using NextJS, Typescript, and Tailwind for my homework assignment for GIAIC.
            </p>
            <a 
            target='_blank'
            href='https://class-3-homework-assignment-wed7to10-mudasser-haryani.vercel.app/'>
            <p className='Leading-relaxed text-blue-500 hover:underline'>View Projects..</p>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default Project