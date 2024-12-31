

import { Shirts } from "@/app/interfaces/shirt";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";

const shirts: Shirts[] = [
    {
        id: "1",
        imgsrc: "/images/man-2.jpg",
        img1: "/images/shirt.jpg",
        img2: "/images/shirt-2.jpg",
        img3: "/images/shirt-3.jpg",
        category: "MAN",
        name: "T-Shirt Name 10",
        cost: "$33.00-$36.00",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, rem. Quo ipsum nisi alias sapiente saepe, quaerat asperiores aliquid distinctio error accusantium. Eos ullam facere inventore harum nesciunt ab distinctio.",
        color1: "",
        color2: "",
        color3: "",
        size1: "XS",
        size2: "S",
        size3: "M",
        size4: "L",
        size5: "XL",
        
        description1: `About this item: 100% Cotton, Imported, Machine Wash, Short-sleeve T-shirt featuring crew neckline and contrast logo on chest${"\n"}, Model is 6 and wearing a size Medium, Standard Fit, Imported from USA and Made in Mexico `,
        
        description2: `100& Cotton ${"\n"} 256gsm ${"\n"} Breathable fabric ${"\n"} Machine washable ${"\n"} Crew neck ${"\n"} Short sleeve ${"\n"} Regular fit ${"\n"} True to size ${"\n"} Soft material ${"\n"} Logo ${"\n"} ` ,
        description3: "Size and Fit ",
        description4: "Model is wearing a size M and is 6tall",
        description5: `Free delivery on order over $500 ${"\n"} 30 days return ${"\n"} 100% secure payment ${"\n"} 24/7 Customer service ${"\n"} 100% satisfaction guarantee ${"\n"} `,
    },
    
    {
        id: "2",
        imgsrc: "/images/women-1.jpg",
        img1: "/images/shirt.jpg",
        img2: "/images/shirt-2.jpg",
        img3: "/images/shirt-3.jpg",
        category: "WOMEN",
        name: "T-Shirt Name 9",
        cost: "$100-$200",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, rem. Quo ipsum nisi alias sapiente saepe, quaerat asperiores aliquid distinctio error accusantium. Eos ullam facere inventore harum nesciunt ab distinctio.",
        color1: "",
        color2: "",
        color3: "",
        size1: "XS",
        size2: "S",
        size3: "M",
        size4: "L",
        size5: "XL",
        description1: `About this item: 100% Cotton, Imported, Machine Wash, Short-sleeve T-shirt featuring crew neckline and contrast logo on chest${"\n"}, Model is 6 and wearing a size Medium, Standard Fit, Imported from USA and Made in Mexico `,
        
        description2: `100& Cotton ${"\n"} 256gsm ${"\n"} Breathable fabric ${"\n"} Machine washable ${"\n"} Crew neck ${"\n"} Short sleeve ${"\n"} Regular fit ${"\n"} True to size ${"\n"} Soft material ${"\n"} Logo ${"\n"} ` ,
        description3: "Size and Fit ",
        description4: "Model is wearing a size M and is 6tall",
        description5: `Free delivery on order over $500 ${"\n"} 30 days return ${"\n"} 100% secure payment ${"\n"} 24/7 Customer service ${"\n"} 100% satisfaction guarantee ${"\n"} `,
    },

    {
        id: "3",
        imgsrc: "/images/man-img.jpg",
        img1: "/images/shirt.jpg",
        img2: "/images/shirt-2.jpg",
        img3: "/images/shirt-3.jpg",
        category: "Man",
        name: "T-Shirt Name 8",
        cost: "$33.00-$36.00",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, rem. Quo ipsum nisi alias sapiente saepe, quaerat asperiores aliquid distinctio error accusantium. Eos ullam facere inventore harum nesciunt ab distinctio.",
        color1: "",
        color2: "",
        color3: "",
        size1: "XS",
        size2: "S",
        size3: "M",
        size4: "L",
        size5: "XL",
        description1: `About this item: 100% Cotton, Imported, Machine Wash, Short-sleeve T-shirt featuring crew neckline and contrast logo on chest${"\n"}, Model is 6 and wearing a size Medium, Standard Fit, Imported from USA and Made in Mexico `,
        
        description2: `100& Cotton ${"\n"} 256gsm ${"\n"} Breathable fabric ${"\n"} Machine washable ${"\n"} Crew neck ${"\n"} Short sleeve ${"\n"} Regular fit ${"\n"} True to size ${"\n"} Soft material ${"\n"} Logo ${"\n"} ` ,
        description3: "Size and Fit ",
        description4: "Model is wearing a size M and is 6tall",
        description5: `Free delivery on order over $500 ${"\n"} 30 days return ${"\n"} 100% secure payment ${"\n"} 24/7 Customer service ${"\n"} 100% satisfaction guarantee ${"\n"} `,
    },
    {
        id: "4",
        imgsrc: "/images/women-2.jpg",
        img1: "/images/shirt.jpg",
        img2: "/images/shirt-2.jpg",
        img3: "/images/shirt-3.jpg",
        category: "Women",
        name: "T-Shirt Name 7",
        cost: "$33.00-$36.00",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, rem. Quo ipsum nisi alias sapiente saepe, quaerat asperiores aliquid distinctio error accusantium. Eos ullam facere inventore harum nesciunt ab distinctio.",
        color1: "",
        color2: "",
        color3: "",
        size1: "XS",
        size2: "S",
        size3: "M",
        size4: "L",
        size5: "XL",
        description1: `About this item: 100% Cotton, Imported, Machine Wash, Short-sleeve T-shirt featuring crew neckline and contrast logo on chest${"\n"}, Model is 6 and wearing a size Medium, Standard Fit, Imported from USA and Made in Mexico `,
        
        description2: `100& Cotton ${"\n"} 256gsm ${"\n"} Breathable fabric ${"\n"} Machine washable ${"\n"} Crew neck ${"\n"} Short sleeve ${"\n"} Regular fit ${"\n"} True to size ${"\n"} Soft material ${"\n"} Logo ${"\n"} ` ,
        description3: "Size and Fit ",
        description4: "Model is wearing a size M and is 6tall",
        description5: `Free delivery on order over $500 ${"\n"} 30 days return ${"\n"} 100% secure payment ${"\n"} 24/7 Customer service ${"\n"} 100% satisfaction guarantee ${"\n"} `,
    },
    {
        id: "5",
        imgsrc: "/images/women-7.jpg",
        img1: "/images/shirt.jpg",
        img2: "/images/shirt-2.jpg",
        img3: "/images/shirt-3.jpg",
        category: "Man",
        name: "T-Shirt Name 6",
        cost: "$33.00-$36.00",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, rem. Quo ipsum nisi alias sapiente saepe, quaerat asperiores aliquid distinctio error accusantium. Eos ullam facere inventore harum nesciunt ab distinctio.",
        color1: "",
        color2: "",
        color3: "",
        size1: "XS",
        size2: "S",
        size3: "M",
        size4: "L",
        size5: "XL",
        description1: `About this item: 100% Cotton, Imported, Machine Wash, Short-sleeve T-shirt featuring crew neckline and contrast logo on chest${"\n"}, Model is 6 and wearing a size Medium, Standard Fit, Imported from USA and Made in Mexico `,
        
        description2: `100& Cotton ${"\n"} 256gsm ${"\n"} Breathable fabric ${"\n"} Machine washable ${"\n"} Crew neck ${"\n"} Short sleeve ${"\n"} Regular fit ${"\n"} True to size ${"\n"} Soft material ${"\n"} Logo ${"\n"} ` ,
        description3: "Size and Fit ",
        description4: "Model is wearing a size M and is 6tall",
        description5: `Free delivery on order over $500 ${"\n"} 30 days return ${"\n"} 100% secure payment ${"\n"} 24/7 Customer service ${"\n"} 100% satisfaction guarantee ${"\n"} `,
    },
    {
        id: "6",
        imgsrc: "/images/man-5.jpg",
        img1: "/images/shirt.jpg",
        img2: "/images/shirt-2.jpg",
        img3: "/images/shirt-3.jpg",
        category: "Man",
        name: "T-Shirt Name 5",
        cost: "$33.00-$36.00",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, rem. Quo ipsum nisi alias sapiente saepe, quaerat asperiores aliquid distinctio error accusantium. Eos ullam facere inventore harum nesciunt ab distinctio.",
        color1: "",
        color2: "",
        color3: "",
        size1: "XS",
        size2: "S",
        size3: "M",
        size4: "L",
        size5: "XL",
        description1: `About this item: 100% Cotton, Imported, Machine Wash, Short-sleeve T-shirt featuring crew neckline and contrast logo on chest${"\n"}, Model is 6 and wearing a size Medium, Standard Fit, Imported from USA and Made in Mexico `,
        
        description2: `100& Cotton ${"\n"} 256gsm ${"\n"} Breathable fabric ${"\n"} Machine washable ${"\n"} Crew neck ${"\n"} Short sleeve ${"\n"} Regular fit ${"\n"} True to size ${"\n"} Soft material ${"\n"} Logo ${"\n"} ` ,
        description3: "Size and Fit ",
        description4: "Model is wearing a size M and is 6tall",
        description5: `Free delivery on order over $500 ${"\n"} 30 days return ${"\n"} 100% secure payment ${"\n"} 24/7 Customer service ${"\n"} 100% satisfaction guarantee ${"\n"} `,
    },
    {
        id: "7",
        imgsrc: "/images/man-7.jpg",
        img1: "/images/shirt.jpg",
        img2: "/images/shirt-2.jpg",
        img3: "/images/shirt-3.jpg",
        category: "Man",
        name: "T-Shirt Name 4",
        cost: "$33.00-$36.00",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, rem. Quo ipsum nisi alias sapiente saepe, quaerat asperiores aliquid distinctio error accusantium. Eos ullam facere inventore harum nesciunt ab distinctio.",
        color1: "",
        color2: "",
        color3: "",
        size1: "XS",
        size2: "S",
        size3: "M",
        size4: "L",
        size5: "XL",
        description1: `About this item: 100% Cotton, Imported, Machine Wash, Short-sleeve T-shirt featuring crew neckline and contrast logo on chest${"\n"}, Model is 6 and wearing a size Medium, Standard Fit, Imported from USA and Made in Mexico `,
        
        description2: `100& Cotton ${"\n"} 256gsm ${"\n"} Breathable fabric ${"\n"} Machine washable ${"\n"} Crew neck ${"\n"} Short sleeve ${"\n"} Regular fit ${"\n"} True to size ${"\n"} Soft material ${"\n"} Logo ${"\n"} ` ,
        description3: "Size and Fit ",
        description4: "Model is wearing a size M and is 6tall",
        description5: `Free delivery on order over $500 ${"\n"} 30 days return ${"\n"} 100% secure payment ${"\n"} 24/7 Customer service ${"\n"} 100% satisfaction guarantee ${"\n"} `,
    },
    {
        id: "8",
        imgsrc: "/images/women-6.jpg",
        img1: "/images/shirt.jpg",
        img2: "/images/shirt-2.jpg",
        img3: "/images/shirt-3.jpg",
        category: "Man",
        name: "T-Shirt Name 3",
        cost: "$33.00-$36.00",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, rem. Quo ipsum nisi alias sapiente saepe, quaerat asperiores aliquid distinctio error accusantium. Eos ullam facere inventore harum nesciunt ab distinctio.",
        color1: "",
        color2: "",
        color3: "",
        size1: "XS",
        size2: "S",
        size3: "M",
        size4: "L",
        size5: "XL",
        description1: `About this item: 100% Cotton, Imported, Machine Wash, Short-sleeve T-shirt featuring crew neckline and contrast logo on chest${"\n"}, Model is 6 and wearing a size Medium, Standard Fit, Imported from USA and Made in Mexico `,
        
        description2: `100& Cotton ${"\n"} 256gsm ${"\n"} Breathable fabric ${"\n"} Machine washable ${"\n"} Crew neck ${"\n"} Short sleeve ${"\n"} Regular fit ${"\n"} True to size ${"\n"} Soft material ${"\n"} Logo ${"\n"} ` ,
        description3: "Size and Fit ",
        description4: "Model is wearing a size M and is 6tall",
        description5: `Free delivery on order over $500 ${"\n"} 30 days return ${"\n"} 100% secure payment ${"\n"} 24/7 Customer service ${"\n"} 100% satisfaction guarantee ${"\n"} `,


        
    },

];
export default async function ShirtDetails({ params }: { params: Promise<{ id: string }> }) {
    const paramsId = (await params).id
    const shirt = await shirts.find((tShirt) => tShirt.id === paramsId)
    if (!shirt) {

        return <h2>Shirt not found!</h2>
    }
    return (
        <>
            <div className="flex mt-10  ">
                {/* left side */}
                <div className="w-[600px] ">
                    <Image src={shirt.imgsrc} alt="shirt-1" width={410} height={400} />
                    <div className="flex gap-3 mt-3 mb-3">
                        <Image src={shirt.img1} alt="shirt-1" width={200} height={200} />
                        <Image src={shirt.img2} alt="shirt-1" width={200} height={200} />
                        
                    </div>
                    <Image src={shirt.img3} alt="shirt-1" width={200} height={200} />
                </div>
                {/* rigth-side */}
                <div className="w-[700px]">
                    <h2 className="text-xl text-gray-400 mb-5">{shirt.category}</h2> 
                    <h2 className="text-3xl font-bold mb-4">{shirt.name}</h2>
                    <h2 className="font-bold text-2xl mb-2 ">{shirt.cost}</h2>
                    <h1 className="text-gray-400">
                    <hr className="w-[600px] mt-4 bg-gray-400 mb-6 "/>
                    {shirt.paragraph}</h1>
                    <div className="flex gap-3 mt-5 mb-3">
                        <div className="w-8 h-8 bg-pink-100">{shirt.color1}</div>
                        <div className="w-8 h-8 bg-black">{shirt.color2}</div>
                        <div className="w-8 h-8 bg-gray-50">{shirt.color3}</div>
                    </div>

                    <div className="flex gap-2">
                        <h1 className="border border-gray-300 p-2 mt-2">{shirt.size1}</h1>
                        <h1 className="border border-gray-300 p-2 mt-2">{shirt.size2}</h1>
                        <h1 className="border border-gray-300 p-2 mt-2">{shirt.size3}</h1>
                        <h1 className="border border-gray-300 p-2 mt-2">{shirt.size4}</h1>
                        <h1 className="border border-gray-300 p-2 mt-2">{shirt.size5}</h1>
                    </div>
                    <h1 className="text-gray-500 py-10">{shirt.description1}</h1>
                    
                    <h1 className="text-gray-500 ">{shirt.description2}</h1>
                    <br />
                    <h1 className="font-bold text-2xl ">{shirt.description3}</h1>
                    <hr className="w-32 border-t-2 border-black  " />
                            
                    <div className="flex items-center gap-2">
                        <CircleArrowRight/>
                    <h1 className="text-gray-800 text-xl py-10">{shirt.description4}</h1>
                    </div>
                    
                    
                    <h1 className="text-gray-500 ">{shirt.description5}</h1>
                   
                    
                    
                </div>
            </div>


        </>
    )

}