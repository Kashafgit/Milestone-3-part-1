import React from 'react'
import Link from 'next/link'
import TShirtProps from '../components/t-shirt-props'
export default function Women() {
  return (
   <>
   <h2 className='text-center text-4xl my-5 font-bold'>WOMEN</h2>
   <div className='mt-8 flex justify-between'>
   <Link href="/blogs/8">
                    <TShirtProps
                        imgSrc="/images/women-6.jpg"
                        category="WOMEN"
                        name="T-Shirt Name-10"
                        cost="$33.00 - $36.00"
                        colors={["", "", ""]}
                        size={["", "", "", "", ""]}
                    />
                </Link>
                <Link href="/blogs/5">
                    <TShirtProps
                        imgSrc="/images/women-7.jpg"
                        category="WOMEN"
                        name="T-Shirt Name-7"
                        cost="$33.00 - $36.00"
                        colors={["", "", ""]}
                        size={["", "", "", "", ""]}
                    />
                </Link>
                <Link href="/blogs/2">
                    <TShirtProps
                        imgSrc="/images/women-1.jpg"
                        category="WOMEN"
                        name="T-Shirt Name-9"
                        cost="$23.00 - $26.00"
                        colors={["", "", ""]}
                        size={["", "", "", "", ""]}
                    />
                </Link>
                <Link href="/blogs/4">
                    <TShirtProps
                        imgSrc="/images/women-2.jpg"
                        category="WOMEN"
                        name="T-Shirt Name-7"
                        cost="$33.00 - $36.00"
                        colors={["", "", ""]}
                        size={["", "", "", "", ""]}
                    />
                </Link>
   </div>
   
   </>
  )
}
