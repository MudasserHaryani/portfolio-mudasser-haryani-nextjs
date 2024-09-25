import React from 'react'
import Image from 'next/image';


const About = () => {
  return (
    <div id='about'>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0" >
      <Image
        className="object-cover object-center rounded mx-auto w-[auto] h-[400]"
        alt="hero"
        src={require("../../../public/assets/picture/Mudasser Haryani Profile photo.jpg")}
        width={400}
        height={400}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
       
      </h1>
      <p className="mb-5 leading-relaxed text-justify">
      My Name is Mudasser Haryani, I have completed my masters degree in Internation Relations, currently I am working at Shaheed Mohtarma Benazir Bhutto Medical College Lyari Karachi as a Postgraduate Committee Incharge since 2013 to present.
      </p>
      <p className="mb-5 leading-relaxed text-justify">
       I am a dedicated student enrolled in the Governor Sindh IT Initiative Program (GIAIC), with Roll Number 476210. My classes are scheduled every Wednesday from 7 to 10 PM, and my lead teacher is Sir Mubahir Ali. I have successfully completed Quarter 1 with a 98% percentile, where I gained proficiency in TypeScript and Node.js. Currently, in Quarter 2, I am focused on learning and exploring Next.js for frontend development. I am committed to continuous learning and applying my knowledge to practical projects.
      </p>
      <div className="flex justify-center">
      <a href="/assets/CV/Mudasser Haryani Resume (1).pdf">
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          View CV
        </button>
        </a>        
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About