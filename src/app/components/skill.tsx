import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Skill = () => {
  return (
    <div id="skills">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
              Skills
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem]">
            {/* Skill */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <AiOutlineCheckCircle className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-blue-500 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[100%]"></div>
                  </div>
                  <p className="font-bold text-blue-600 text-right">100%</p>
                </div>
              </div>
            </div>
             <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <AiOutlineCheckCircle className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                   CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-500 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[80%]"></div>
                  </div>
                  <p className="font-bold text-blue-600 text-right">80%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <AiOutlineCheckCircle className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                   TypeScript / JavaScript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-500 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[90%]"></div>
                  </div>
                  <p className="font-bold text-blue-600 text-right">90%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <AiOutlineCheckCircle className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                   MS Office
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-500 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[85%]"></div>
                  </div>
                  <p className="font-bold text-blue-600 text-right">85%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <AiOutlineCheckCircle className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                   Adobe Photoshop
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-500 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[70%]"></div>
                  </div>
                  <p className="font-bold text-blue-600 text-right">70%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <AiOutlineCheckCircle className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                   Sony Vegas
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-500 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[80%]"></div>
                  </div>
                  <p className="font-bold text-blue-600 text-right">80%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <AiOutlineCheckCircle className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                   Office Administration
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-500 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[90%]"></div>
                  </div>
                  <p className="font-bold text-blue-600 text-right">90%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <AiOutlineCheckCircle className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                   Next JS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-500 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[30%]"></div>
                  </div>
                  <p className="font-bold text-blue-600 text-right">30%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <AiOutlineCheckCircle className="text-xl font-bold" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                   Social Media Management
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-500 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[95%]"></div>
                  </div>
                  <p className="font-bold text-blue-600 text-right">95%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
