import React from 'react'
import TShirtProps from '../components/t-shirt-props';
import Link from 'next/link';
export default function Buy() {
    return (
        <div>
           <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center my-4 sm:my-6 md:my-8">
  Buy Your Favourite T-Shirts
</h1>

            <div className="flex flex-col items-center justify-between md:flex-row ">
            <Link href="/blogs/8" >
                    <TShirtProps
                        imgSrc="/images/women-6.jpg"
                        category="WOMEN"
                        name="SMR-TS-008"
                        cost="$33.00 - $36.00"
                        colors={["", "", ""]}
                        size={["", "", "", "", ""]}
                        
                    />
                </Link>
                <Link href="/blogs/7">
                    <TShirtProps
                        imgSrc="/images/man-7.jpg"
                        category="MAN"
                        name="SMR-TS-007"
                        cost="$23.00 - $26.00"
                        colors={["", "", ""]}
                        size={["", "", "", "", ""]}
                    />
                </Link>
                <Link href="/blogs/6">
                    <TShirtProps
                        imgSrc="/images/man-5.jpg"
                        category="MAN"
                        name="SMR-TS-006"
                        cost="$33.00 - $36.00"
                        colors={["", "", ""]}
                        size={["", "", "", "", ""]}
                    />
                </Link>
                <Link href="/blogs/5">
                    <TShirtProps
                        imgSrc="/images/women-7.jpg"
                        category="WOMEN"
                        name="SMR-TS-005"
                        cost="$33.00 - $36.00"
                        colors={["", "", ""]}
                        size={["", "", "", "", ""]}
                    />
                </Link>
            </div>
            <div className="flex flex-col items-center md:flex-row justify-between mt-8">
                <Link href="/blogs/1">
                    <TShirtProps
                        imgSrc="/images/man-2.jpg"
                        category="MAN"
                        name="SMR-TS-001"
                        cost="$33.00 - $36.00"
                        colors={["", "", ""]}
                        size={["", "", "", "", ""]}
                    />
                </Link>
                <Link href="/blogs/2">
                    <TShirtProps
                        imgSrc="/images/women-1.jpg"
                        category="WOMEN"
                        name="SMR-TS-002"
                        cost="$23.00 - $26.00"
                        colors={["", "", ""]}
                        size={["", "", "", "", ""]}
                    />
                </Link>
                <Link href="/blogs/3">
                    <TShirtProps
                        imgSrc="/images/man-img.jpg"
                        category="MAN"
                        name="SMR-TS-003"
                        cost="$33.00 - $36.00"
                        colors={["", "", ""]}
                        size={["", "", "", "", ""]}
                    />
                </Link>
                <Link href="/blogs/4">
                    <TShirtProps
                        imgSrc="/images/women-2.jpg"
                        category="WOMEN"
                        name="SMR-TS-004"
                        cost="$33.00 - $36.00"
                        colors={["", "", ""]}
                        size={["", "", "", "", ""]}
                    />
                </Link>
            </div>
        </div>
    )
}
