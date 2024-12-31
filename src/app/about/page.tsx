import React from 'react'
import Image from 'next/image';
export default function About() {
    return (
        <>
            <div className='px-48'>
                <h1 className='text-5xl font-bold text-center'>ABOUT</h1>
                <hr className="w-16 border-t-2 border-black mx-auto my-2" />
                <p className='text-center font-bold my-10'>Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.</p>
                <p className='text-center  text-gray-500 my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus. Ut sit amet porta sem, interdum tincidunt libero. Nulla vel quam lobortis, varius est scelerisque, dapibus nisl.</p>
            </div>
            <div className="bg-[url('/images/clothes.jpg')] bg-cover bg-no-repeat bg-center h-[500px] flex ">
                <div className='flex justify-between items-center'>
                    <div >
                        <p className='text-black font-bold text-4xl px-6'><h1 className='pb-5 text-xl'>The Mission</h1>
                            At the heart of everything, we set out to offer the best quality.</p>
                    </div>
                    <div>
                        <p className='text-white font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam totam omnis voluptatum officiis magni, adipisci ex tempore nam eius labore perspiciatis saepe consequatur! Animi earum perferendis accusantium consequatur assumenda itaque.</p>
                        <br />
                        <p className='text-white font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam totam omnis voluptatum officiis magni, adipisci ex tempore nam eius labore perspiciatis saepe consequatur! Animi earum perferendis accusantium consequatur assumenda itaque.</p>
                    </div>
                </div>

            </div>
            <div>
                <h1 className='font-bold text-4xl text-center py-10 font-sans'>How it started</h1>
                <p className='text-gray-500 text-center mx-48'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi praesentium officiis, nihil enim voluptates eveniet dolor magnam ipsam</p>
                <div className='m-20 bg-pink-50 flex justify-center'>
                    <div className='p-20 w-[800px]'>
                        <h3 className='font-bold text-4xl  py-5'>Vel mauris molestie dignissim</h3>
                        <p className='font-bold py-5'>Proin eu ante vel mauris molestie dignissim non eget nunc. Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.</p>
                        <p className='text-gray-500'>Praesent vel faucibus ligula. Sed sit amet ipsum eget velit aliquet faucibus. Maecenas et odio id turpis sollicitudin pulvinar sit amet vitae augue. Phasellus nec ultricies arcu. Quisque efficitur tellus sit amet bibendum molestie. Duis id egestas odio. Phasellus lacinia ex quis faucibus tempor. Sed feugia.</p>

                    </div>
                    <div>
                        <Image src="/images/about-pic.jpg" alt='about-img' width={550} height={300}/>
                    </div>

                </div>
            </div>

        </>
    )
}
