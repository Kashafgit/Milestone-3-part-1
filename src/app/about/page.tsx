import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-48">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">ABOUT</h1>
        <hr className="w-16 border-t-2 border-black mx-auto my-2" />
        <p className="text-center font-bold my-5 sm:my-10">
          Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.
        </p>
        <p className="text-center text-gray-500 my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus. Ut sit amet porta sem, interdum tincidunt libero. Nulla vel quam lobortis, varius est scelerisque, dapibus nisl.
        </p>
      </div>
     <br />
        <div className=" bg-[url('/images/whitecouple.jpg')] bg-cover  bg-no-repeat bg-center h-96 sm:h-[700px] flex flex-col sm:flex-row items-center justify-center px-4">
          

          <div className="sm:w-1/2 text-center sm:text-left sm:mt-5 ">
            <h1 className="text-3xl font-bold text-black mb-4 ">The Mission</h1>
            <p className="text-black font-bold text-lg">
              At the heart of everything, we set out to offer the best quality.
            </p>
          </div>
          <div className="sm:w-1/2 mt-6 sm:mt-0 text-center sm:text-left">
            <p className=" font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam totam omnis voluptatum officiis magni, adipisci ex tempore nam eius labore perspiciatis saepe consequatur! Animi earum perferendis accusantium consequatur assumenda itaque.
            </p>
            <br />
            <p className=" font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam totam omnis voluptatum officiis magni, 
            </p>
          </div>
        </div>
    

      <div>
        {/* Heading Section */}
        <h1 className="font-bold text-2xl sm:text-4xl text-center py-10 font-sans">
          How it started
        </h1>

        {/* Description Section */}
        <p className="text-gray-500 text-center mx-4 sm:mx-16 lg:mx-48">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi praesentium officiis, nihil enim voluptates eveniet dolor magnam ipsam
        </p>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center m-4 sm:m-10 lg:m-20 bg-pink-50">
          {/* Text Section */}
          <div className="p-4 sm:p-10 lg:p-20 lg:w-1/2">
            <h3 className="font-bold text-2xl sm:text-4xl py-2 sm:py-5">
              Vel mauris molestie dignissim
            </h3>
            <p className="font-bold py-2 sm:py-5">
              Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.
            </p>
            <p className="text-gray-500">
              Praesent vel faucibus ligula. Sed sit amet ipsum eget velit aliquet faucibus. Maecenas et odio id turpis sollicitudin pulvinar sit amet vitae augue. Phasellus nec ultricies arcu. Quisque efficitur tellus sit amet bibendum molestie. Duis id egestas odio. Phasellus lacinia ex quis faucibus tempor. Sed feugia.
            </p>
          </div>

          {/* Image Section */}
          <div className="p-4 sm:p-10 lg:w-1/2">
            <Image
              src="/images/about-pic.jpg"
              alt="about-img"
              width={550}
              height={300}
              className="md:w-full md:h-auto w-[300px] sm:h-[400px]"
            />
          </div>
        </div>
      </div>

    </>
  );
}
