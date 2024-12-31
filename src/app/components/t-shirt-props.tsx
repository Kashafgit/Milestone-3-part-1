import React from 'react';
import Image from 'next/image';

interface Tshirts {

  imgSrc?: string,
  category?: string,
  name?: string,
  cost?: string,
  colors: string[],
  size: string[]
}
const TShirtProps = (props: Tshirts) => {

  return (
    <>
      <div>

        <Image src={props.imgSrc || '/default-image.png'} alt='fashion-img' width={300} height={300} />
        <div className='px-6 py-4'>
          <p className='text-gray-400'>{props.category}</p>
          <h3 className='text-2xl font-bold mt-2'>{props.name}</h3>
          <h4 className='text-gray-600 font-bold mt-2'>{props.cost}</h4>
          <div className='flex gap-5 mt-3'>{props.colors}
            <div className='bg-[#000000] w-6 h-6'></div>
            <div className='bg-[#f5f5f5] w-6 h-6'></div>
            <div className='bg-[#ffcccc] w-6 h-6'></div>
          </div>
          <div className='flex gap-2'>
            <div className='p-2 border border-gray-200 mt-5 '>{props.size}XS</div>
            <div className='p-2 border border-gray-200 mt-5 '>{props.size}S</div>
            <div className='p-2 border border-gray-200 mt-5 '>{props.size}M</div>
            <div className='p-2 border border-gray-200 mt-5 '>{props.size}L</div>
            <div className='p-2 border border-gray-200 mt-5 '>{props.size}XL</div>

          </div>

        </div>
      </div>

    </>
  )
}

export default TShirtProps