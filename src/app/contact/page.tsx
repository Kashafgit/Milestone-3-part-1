import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

export default function Contact() {
  return (
    <>
      <div className="px-6 sm:px-12 md:px-24 lg:px-48">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center py-4 sm:py-5">Contact</h1>
        <hr className="w-16 border-t-2 border-black mx-auto my-2" />

        <p className="text-center font-bold text-sm sm:text-base md:text-lg my-6 sm:my-8 md:my-10">
          Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between bg-pink-50 my-5 px-6 sm:px-10 lg:px-20 py-8 sm:py-12">
        {/* Left Section */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-4 sm:py-6">Get in touch</h1>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg my-4 sm:my-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur id perspiciatis dolorum at dolorem minima minus qui?
          </p>
          <div className="flex gap-2 mt-4 items-center text-sm sm:text-base">
            <MapPin />
            <p>123 Fifth Avenue, New York, NY 10699</p>
          </div>
          <div className="flex gap-2 mt-4 items-center text-sm sm:text-base">
            <Mail />
            <p>contactinfo@gmail.com</p>
          </div>
          <div className="flex gap-2 mt-4 items-center text-sm sm:text-base">
            <Phone />
            <p>932-2545-38264</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-md">
          <form className="w-full">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="py-2 px-4 border border-gray-300 rounded-lg w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="py-2 px-4 border border-gray-300 rounded-lg w-full"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="py-2 px-4 border border-gray-300 rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Subject"
                className="py-2 px-4 border border-gray-300 rounded-lg w-full"
              />
              <textarea
                placeholder="Message"
                className="py-2 px-4 border border-gray-300 rounded-lg w-full"
              ></textarea>
              <button className="bg-black text-white py-2 px-4 w-full sm:w-40 self-center sm:self-start">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="h-[300px] sm:h-[400px] lg:h-[500px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14469.427114520444!2d67.04725734851904!3d24.95397319588984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3408545e8af11%3A0xd557fabb6ac61c9!2sSakhi%20Hassan%20Block%20N%20North%20Nazimabad%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1735633939983!5m2!1sen!2s"
          width="100%"
          height="100%"
          loading="eager"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </>
  );
}
