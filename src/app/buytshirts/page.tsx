import React from 'react'
import TShirtProps from '../components/t-shirt-props';
import Link from 'next/link';
export default function Buy() {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-8'>Buy Your Favourite T Shirts</h1>
            <div className="flex justify-between">
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
            </div>
            <div className="flex justify-between mt-8">
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
        </div>
    )
}
