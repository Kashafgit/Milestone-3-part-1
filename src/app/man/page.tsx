import React from 'react'
import Link from 'next/link'
import TShirtProps from '../components/t-shirt-props'
export default function Man() {
  return (
    <>
    <h2 className='text-center text-4xl font-bold my-8'>MAN</h2>
    <div className='mt-5 flex justify-between'>
    <Link href="/blogs/3">
                    <TShirtProps
                        imgSrc="/images/man-img.jpg"
                        category="MAN"
                        name="T-Shirt Name-8"
                        cost="$33.00 - $36.00"
                        colors={["", "", ""]}
                        size={["", "", "", "", ""]}
                    />
                </Link>
                <Link href="/blogs/1">
                    <TShirtProps
                        imgSrc="/images/man-2.jpg"
                        category="MAN"
                        name="T-Shirt Name-10"
                        cost="$33.00 - $36.00"
                        colors={["", "", ""]}
                        size={["", "", "", "", ""]}
                    />
                </Link>
                <Link href="/blogs/6">
                    <TShirtProps
                        imgSrc="/images/man-5.jpg"
                        category="MAN"
                        name="T-Shirt Name-8"
                        cost="$33.00 - $36.00"
                        colors={["", "", ""]}
                        size={["", "", "", "", ""]}
                    />
                </Link>
                <Link href="/blogs/7">
                    <TShirtProps
                        imgSrc="/images/man-7.jpg"
                        category="MAN"
                        name="T-Shirt Name-9"
                        cost="$23.00 - $26.00"
                        colors={["", "", ""]}
                        size={["", "", "", "", ""]}
                    />
                </Link>



    </div>
    
    </>
  )
}
