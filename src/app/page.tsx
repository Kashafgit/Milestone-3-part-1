"use client";
import Image from "next/image";
import Link from "next/link";
import TShirtProps from "./components/t-shirt-props";
import { StarIcon } from "lucide-react";

export default function Home() {

  return (
    <>

      <div className="bg-pink-100 px-10 flex justify-between items-center">
        <div>
          <h4>Women</h4>
          <h1 className="text-6xl font-bold font-sans">Slick.Modern.</h1>
          <h1 className="text-6xl font-bold font-sans">Awesome.</h1>
          <button className="bg-black text-white px-4 py-2 mt-20">Shop collection</button>
        </div>
        <div>
          <Image src={"/hero.png"} alt="picture-1" width={600} height={400} />
        </div>
      </div>
      <div className="py-9">
        <h1 className="text-gray-500 text-center">Summer Collection</h1>
        <h2 className="text-3xl text-center font-bold mb-6">Popular T-shirts</h2>
        <div className="flex justify-between">
          <Link href="/blogs/1">
            <TShirtProps
              imgSrc="/man-2.jpg"
              category="MAN"
              name="T-Shirt Name-10"
              cost="$33.00 - $36.00"
              colors={["", "", ""]}
              size={["", "", "", "", ""]}
            />
          </Link>
          <Link href="/blogs/2">
            <TShirtProps
              imgSrc="/women-1.jpg"
              category="WOMEN"
              name="T-Shirt Name-9"
              cost="$23.00 - $26.00"
              colors={["", "", ""]}
              size={["", "", "", "", ""]}
            />
          </Link>
          <Link href="/blogs/3">
            <TShirtProps
              imgSrc="/man-img.jpg"
              category="MAN"
              name="T-Shirt Name-8"
              cost="$33.00 - $36.00"
              colors={["", "", ""]}
              size={["", "", "", "", ""]}
            />
          </Link>
          <Link href="/blogs/4">
            <TShirtProps
              imgSrc="/women-2.jpg"
              category="WOMEN"
              name="T-Shirt Name-7"
              cost="$33.00 - $36.00"
              colors={["", "", ""]}
              size={["", "", "", "", ""]}
            />
          </Link>
        </div>
      </div>
      {/* section-2 */}
      <div className="flex justify-center gap-10 mb-8">
        <div className="w-[500px]">
          <Image src={"/images/man-3.jpg"} alt="man-fashion" width={480} height={100} />
          <div className="mt-3">
            <h2 className="text-5xl font-bold text-center">The base collection-ideal every day</h2>
            <button className="bg-black text-white px-4 py-2 mt-4 ml-[200px] ">Shop Now</button>
          </div>
        </div>
        <div>
          <Image src={"/images/man-4.jpg"} alt="man fashion" width={500} height={400} />
        </div>

      </div>
      {/* section-3 */}
      <section >
        <div className="bg-[url('/images/whitecouple.jpg')] bg-cover bg-center h-[500px]">
          <div className="p-32 ">
            <h1 className="text-white  text-2xl font-bold flex justify-center items-center">New Collection</h1>
            <h2 className="text-center text-5xl font-bold pt-20">Be Different in Your Own Way!</h2>
            <h5 className="text-center font-bold mt-10 text-3xl ">FIND YOUR UNIQUE STYLE</h5>
            <div className="flex justify-center">
              <button className="bg-black text-white px-4 py-2 mt-4">Shop Collection</button>
            </div>
          </div>

        </div>
      </section>
      {/* section-3 */}
      <section className="m-16 flex justify-center">
    <div className="w-[1000px]">
      <Image src={"/images/sumer-t-shirt.jpg"} alt="summer-shirt" width={600} height={300}/>
    </div>
    <div className="p-10">
      <h5 className="text-gray-400 ">Women</h5>
      <p className="text-4xl font-bold text-center my-8">Spring summer collection</p>
      <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam corporis maxime consectetur debitis quisquam. Vel et, dolores illum reprehenderit nulla accusantium eaque delectus optio, aperiam molestiae doloremque similique tenetur alias.</p>
      <div className="flex justify-center">
              <button className="bg-black text-white px-4 py-2 mt-8">See Whole Collection</button>
            </div>
    </div>


      </section>
      {/* section-4 */}
      <section>
     <div className="p-10">
     <h2 className="text-center text-2xl text-gray-500">Summer collection</h2>
     <h4 className="text-center text-4xl font-bold my-3">On Sale T-Shirts</h4>
     </div>
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

      </section>
      {/* reviews section */}
      <div className="p-20">
        <h2 className="text-center text-3xl font-bold">Reviews</h2>
        <p className="font-bold  text-center mx-32 my-8">“ Very good quality T-shirts and lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum! ”</p>
        <div className="flex gap-2 items-center justify-center">
        <StarIcon className="text-yellow-400 fill-yellow-300"/>
        <StarIcon className="text-yellow-400 fill-yellow-300"/>
        <StarIcon className="text-yellow-400 fill-yellow-300"/>
        <StarIcon className="text-yellow-400 fill-yellow-300"/>
        <StarIcon className="text-yellow-400 fill-yellow-300"/>
        </div>
        <p className="text-gray-400 text-center py-4">Jane oliver</p>
      </div>
      {/* last section */}
      <section className="flex justify-center gap-5 mb-5">
      <Link href="./man"><div className="bg-[url('/images/man.jpg')] bg-cover bg-center bg-no-repeat w-[500px] h-[600px] relative"> 
        <div className=" absolute bottom-4 bg-white w-full text-center p-2  font-bold">
          <p>Man Product-4</p>
        <h6 className="text-gray-500 text-[15px]">4-Products</h6>
        </div>
      </div></Link>
      <Link href="./women"><div className="bg-[url('/images/women-4.jpg')] w-[500px] bg-cover bg-center bg-no-repeat h-[600px] relative">
        <div className=" absolute bottom-4 bg-white w-full text-center p-2 font-bold">
          <p>Women Product-4</p>
          <h6 className="text-gray-500 text-[15px]">4-Products</h6>

        </div>
      </div></Link>
      
      </section>

    </>
  );
}
