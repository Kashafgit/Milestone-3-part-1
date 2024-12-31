import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

export default function Contact() {
  return (
    <>
      <div className='px-48'>
        <h1 className='text-5xl font-bold text-center py-5  '>Contact</h1>
        <hr className="w-16 border-t-2 border-black mx-auto my-2" />
        
        <p className='text-center font-bold my-10'>Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.nteger ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.</p>

      </div>
      <div className='flex justify-between bg-pink-50 my-5 px-10 py-12'>
        <div className='w-[500px]'>
          <h1 className='text-4xl font-bold py-8'>Get in touch</h1>
          <p className='text-gray-500 my-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur id perspiciatis dolorum at dolorem minima minus qui ?</p>
          <div className='flex gap-2 mt-4'> <MapPin /> <p>123 Fifth Avenue, New York, NY 10699</p></div>
          <div className='flex gap-2 mt-4'> <Mail /> <p>contactinfo@gmail.com</p></div>
          <div className='flex gap-2 mt-4'> <Phone /> <p>932-2545-38264</p></div>
        </div>
        <div className='bg-white p-10 rounded-lg'>
          <form className='w-[500px] '>
            <div className='flex flex-col gap-4'>
              <div className='flex justify-between gap-4'>
                <input type='text' placeholder='FirstName' className='py-2 px-4 border border-gray-300 rounded-lg' />
                <input type='text' placeholder='LastName' className='py-2 px-4 border border-gray-300 rounded-lg' />
              </div>
              <input type='email' placeholder='Email' className='py-2 px-4 border border-gray-300 rounded-lg' />
              <input type='text' placeholder='Subject' className='py-2 px-4 border border-gray-300 rounded-lg' />
              <textarea placeholder='Message' className='py-2 px-4 border border-gray-300 rounded-lg'></textarea>
              <button className='bg-black text-white py-2  px-2 w-40'>Send Message</button>
            </div>
          </form>
        </div>

      </div>
      <div className=' h-[500px] '>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14469.427114520444!2d67.04725734851904!3d24.95397319588984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3408545e8af11%3A0xd557fabb6ac61c9!2sSakhi%20Hassan%20Block%20N%20North%20Nazimabad%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1735633939983!5m2!1sen!2s" width="100%" height="100%"  loading="eager"  ></iframe>
      </div>


    </>
  )
}
