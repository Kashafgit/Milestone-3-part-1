"use client";
import Image from "next/image";
import Link from "next/link";
import TShirtProps from "./components/t-shirt-props";
import { StarIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="bg-pink-100 px-4 sm:px-10 flex flex-col sm:flex-row justify-between items-center py-16">
        <div className="text-center sm:text-left">
          <h4 className="text-xl sm:text-2xl">Women</h4>
          <h1 className="text-4xl sm:text-6xl font-bold font-sans">Slick.Modern.</h1>
          <h1 className="text-4xl sm:text-6xl font-bold font-sans">Awesome.</h1>
          <button className="bg-black text-white px-6 py-3 mt-6 sm:mt-20">Shop collection</button>
        </div>
        <div className="mt-6 sm:mt-0">
          <Image src={"/images/hero.png"} alt="picture-1" width={600} height={400} />
        </div>
      </div>

      <div className="py-9">
        <h1 className="text-gray-500 text-center">Summer Collection</h1>
        <h2 className="text-3xl text-center font-bold mb-6">Popular T-shirts</h2>
        <div className="flex flex-col items-center md:flex-row justify-between md:gap-6">
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

      {/* Section 2 */}
      <div className="flex flex-col sm:flex-row justify-center gap-10 mb-8">
        <div className="w-full sm:w-[500px]">
          <Image src={"/images/man-3.jpg"} alt="man-fashion" width={480} height={300} />
          <div className="mt-3 text-center sm:text-left">
            <h2 className="text-3xl sm:text-5xl font-bold">The base collection - ideal every day</h2>
            <button className="bg-black text-white px-4 py-2 mt-4">Shop Now</button>
          </div>
        </div>
        <div className="w-full sm:w-[500px]">
          <Image src={"/images/man-4.jpg"} alt="man fashion" width={500} height={400} />
        </div>
      </div>

      {/* Section 3 */}
      <section className="bg-[url('/images/whitecouple.jpg')] bg-cover bg-center h-[500px] flex justify-center items-center text-center">
        <div className="p-12 sm:p-32 bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-white text-2xl font-bold">New Collection</h1>
          <h2 className="text-white text-5xl font-bold pt-20">Be Different in Your Own Way!</h2>
          <h5 className="text-white text-3xl mt-10">FIND YOUR UNIQUE STYLE</h5>
          <button className="bg-black text-white px-6 py-3 mt-4">Shop Collection</button>
        </div>
      </section>
{/* Section 4 */}
<section className="m-16 flex justify-center gap-10">
    <div className="w-full sm:w-[1000px] flex flex-col sm:flex-row justify-between gap-6">
        {/* Image */}
        <div className="w-full sm:w-[480px] mb-8 sm:mb-0">
            <Image 
                src={"/images/sumer-t-shirt.jpg"} 
                alt="summer-shirt" 
                width={600} 
                height={300} 
                className="w-full h-auto"
            />
        </div>

        {/* Text Content */}
        <div className="w-full sm:w-[500px] p-6 sm:p-10">
            <h5 className="text-gray-400 text-center sm:text-left">Women</h5>
            <p className="text-4xl font-bold text-center my-8 sm:text-left">Spring Summer Collection</p>
            <p className="text-gray-500 mb-8 text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam corporis maxime consectetur debitis quisquam.
                Vel et, dolores illum reprehenderit nulla accusantium eaque delectus optio, aperiam molestiae doloremque similique tenetur alias.
            </p>
            <div className="flex justify-center sm:justify-start">
                <button className="bg-black text-white px-6 py-3 rounded-md">
                    See Whole Collection
                </button>
            </div>
        </div>
    </div>
</section>


      {/* Section 5 */}
      <section>
        <div className="p-10">
          <h2 className="text-center text-2xl text-gray-500">Summer collection</h2>
          <h4 className="text-center text-4xl font-bold my-3">On Sale T-Shirts</h4>
        </div>
        <div className="flex flex-col items-center md:flex-row justify-between md:gap-6">
          <Link href="/blogs/8">
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
      </section>

      {/* Reviews Section */}
      <div className="p-20">
        <h2 className="text-center text-3xl font-bold">Reviews</h2>
        <p className="font-bold text-center mx-4 sm:mx-32 my-8 text-sm sm:text-lg">
          “ Very good quality T-shirts and lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum! ”
        </p>
        <div className="flex gap-2 items-center justify-center">
          <StarIcon className="text-yellow-400 fill-yellow-300" />
          <StarIcon className="text-yellow-400 fill-yellow-300" />
          <StarIcon className="text-yellow-400 fill-yellow-300" />
          <StarIcon className="text-yellow-400 fill-yellow-300" />
          <StarIcon className="text-yellow-400 fill-yellow-300" />
        </div>
        <p className="text-gray-400 text-center py-4">Jane oliver</p>
      </div>

   


    </>
  );
}
