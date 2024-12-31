
import Link from "next/link";
import { Shirts } from "../interfaces/shirt";
import Image from "next/image";
import { CircleArrowRight } from "lucide-react";
const shirts:Shirts[] = [
    {
        id:"1",
        imgsrc:"/images/man-2.jpg",
        img1:"/images/shirt.jpg",
        img2:"/images/shirt-2.jpg",
        img3:"/images/shirt-3.jpg",
        category:"Man",
        name:"Shirt",
        cost:"$100",
        paragraph:"This is a shirt",
        size1:"XS",
        size2:"S",
        size3:"M",
        size4:"L",
        size5:"XL",
        color1:"",
        color2:"",
        color3:"",
        description1: `About this item: 100% Cotton, Imported, Machine Wash, Short-sleeve T-shirt featuring crew neckline and contrast logo on chest${"\n"}, Model is 6 and wearing a size Medium, Standard Fit, Imported from USA and Made in Mexico `,
        
        description2: `100& Cotton ${"\n"} 256gsm ${"\n"} Breathable fabric ${"\n"} Machine washable ${"\n"} Crew neck ${"\n"} Short sleeve ${"\n"} Regular fit ${"\n"} True to size ${"\n"} Soft material ${"\n"} Logo ${"\n"} ` ,
        description3: "Size and Fit ",
        description4: "Model is wearing a size M and is 6tall",
        description5: `Free delivery on order over $500 ${"\n"} 30 days return ${"\n"} 100% secure payment ${"\n"} 24/7 Customer service ${"\n"} 100% satisfaction guarantee ${"\n"} `,
    },
    {
        id:"2",
        imgsrc:"/images/women-1.jpg",
        img1:"/images/shirt.jpg",
        img2:"/images/shirt-2.jpg",
        img3:"/images/shirt-3.jpg",
        category:"Women",
        name: "T-Shirt Name 8",
        cost: "$33.00-$36.00",
        paragraph:"This is a shirt",
       size1:"XS",
        size2:"S",
        size3:"M",
        size4:"L",
        size5:"XL",
        color1:"",
        color2:"",
        color3:"",
        description1: `About this item: 100% Cotton, Imported, Machine Wash, Short-sleeve T-shirt featuring crew neckline and contrast logo on chest${"\n"}, Model is 6 and wearing a size Medium, Standard Fit, Imported from USA and Made in Mexico `,
        
        description2: `100& Cotton ${"\n"} 256gsm ${"\n"} Breathable fabric ${"\n"} Machine washable ${"\n"} Crew neck ${"\n"} Short sleeve ${"\n"} Regular fit ${"\n"} True to size ${"\n"} Soft material ${"\n"} Logo ${"\n"} ` ,
        description3: "Size and Fit ",
        description4: "Model is wearing a size M and is 6tall",
        description5: `Free delivery on order over $500 ${"\n"} 30 days return ${"\n"} 100% secure payment ${"\n"} 24/7 Customer service ${"\n"} 100% satisfaction guarantee ${"\n"} `,
    },
    
    {
        id:"3",
        imgsrc:"/images/man-img.jpg",
        img1:"/images/shirt.jpg",
        img2:"/images/shirt-2.jpg",
        img3:"/images/shirt-s3.jpg",
        category:"Man",
        name: "T-Shirt Name 7",
        cost: "$33.00-$36.00",
        paragraph:"This is a shirt",
        size1:"XS",
        size2:"S",
        size3:"M",
        size4:"L",
        size5:"XL",
        color1:"",
        color2:"",
        color3:"",
        description1: `About this item: 100% Cotton, Imported, Machine Wash, Short-sleeve T-shirt featuring crew neckline and contrast logo on chest${"\n"}, Model is 6 and wearing a size Medium, Standard Fit, Imported from USA and Made in Mexico `,
        
        description2: `100& Cotton ${"\n"} 256gsm ${"\n"} Breathable fabric ${"\n"} Machine washable ${"\n"} Crew neck ${"\n"} Short sleeve ${"\n"} Regular fit ${"\n"} True to size ${"\n"} Soft material ${"\n"} Logo ${"\n"} ` ,
        description3: "Size and Fit ",
        description4: "Model is wearing a size M and is 6tall",
        description5: `Free delivery on order over $500 ${"\n"} 30 days return ${"\n"} 100% secure payment ${"\n"} 24/7 Customer service ${"\n"} 100% satisfaction guarantee ${"\n"} `,
    },
    {
        id:"4",
        imgsrc:"/images/women-2.jpg",
        img1:"/images/shirt.jpg",
        img2:"/images/shirt-2.jpg",
        img3:"/images/shirt-3.jpg",
        category:"Women",
        name: "T-Shirt Name 6",
        cost: "$33.00-$36.00",
        paragraph:"This is a shirt",
        size1:"XS",
        size2:"S",
        size3:"M",
        size4:"L",
        size5:"XL",
        color1:"",
        color2:"",
        color3:"",
        description1: `About this item: 100% Cotton, Imported, Machine Wash, Short-sleeve T-shirt featuring crew neckline and contrast logo on chest${"\n"}, Model is 6 and wearing a size Medium, Standard Fit, Imported from USA and Made in Mexico `,
        
        description2: `100& Cotton ${"\n"} 256gsm ${"\n"} Breathable fabric ${"\n"} Machine washable ${"\n"} Crew neck ${"\n"} Short sleeve ${"\n"} Regular fit ${"\n"} True to size ${"\n"} Soft material ${"\n"} Logo ${"\n"} ` ,
        description3: "Size and Fit ",
        description4: "Model is wearing a size M and is 6tall",
        description5: `Free delivery on order over $500 ${"\n"} 30 days return ${"\n"} 100% secure payment ${"\n"} 24/7 Customer service ${"\n"} 100% satisfaction guarantee ${"\n"} `,
    },
    {
        id:"5",
        imgsrc:"/images/women-7.jpg",
        img1:"/images/shirt.jpg",
        img2:"/images/shirt-2.jpg",
        img3:"/images/shirt-3.jpg",
        category:"Man",
        name: "T-Shirt Name 5",
        cost: "$33.00-$36.00",
        paragraph:"This is a shirt",
        size1:"XS",
        size2:"S",
        size3:"M",
        size4:"L",
        size5:"XL",
        color1:"",
        color2:"",
        color3:"",
        description1: `About this item: 100% Cotton, Imported, Machine Wash, Short-sleeve T-shirt featuring crew neckline and contrast logo on chest${"\n"}, Model is 6 and wearing a size Medium, Standard Fit, Imported from USA and Made in Mexico `,
        
        description2: `100& Cotton ${"\n"} 256gsm ${"\n"} Breathable fabric ${"\n"} Machine washable ${"\n"} Crew neck ${"\n"} Short sleeve ${"\n"} Regular fit ${"\n"} True to size ${"\n"} Soft material ${"\n"} Logo ${"\n"} ` ,
        description3: "Size and Fit ",
        description4: "Model is wearing a size M and is 6tall",
        description5: `Free delivery on order over $500 ${"\n"} 30 days return ${"\n"} 100% secure payment ${"\n"} 24/7 Customer service ${"\n"} 100% satisfaction guarantee ${"\n"} `,
    },
    {
        id:"6",
        imgsrc:"/images/man-5.jpg",
        img1:"/images/shirt.jpg",
        img2:"/images/shirt-2.jpg",
        img3:"/images/shirt-3.jpg",
        category:"Man",
        name: "T-Shirt Name 5",
        cost: "$33.00-$36.00",
        paragraph:"This is a shirt",
        size1:"XS",
        size2:"S",
        size3:"M",
        size4:"L",
        size5:"XL",
        color1:"",
        color2:"",
        color3:"",
        description1: `About this item: 100% Cotton, Imported, Machine Wash, Short-sleeve T-shirt featuring crew neckline and contrast logo on chest${"\n"}, Model is 6 and wearing a size Medium, Standard Fit, Imported from USA and Made in Mexico `,
        
        description2: `100& Cotton ${"\n"} 256gsm ${"\n"} Breathable fabric ${"\n"} Machine washable ${"\n"} Crew neck ${"\n"} Short sleeve ${"\n"} Regular fit ${"\n"} True to size ${"\n"} Soft material ${"\n"} Logo ${"\n"} ` ,
        description3: "Size and Fit ",
        description4: "Model is wearing a size M and is 6tall",
        description5: `Free delivery on order over $500 ${"\n"} 30 days return ${"\n"} 100% secure payment ${"\n"} 24/7 Customer service ${"\n"} 100% satisfaction guarantee ${"\n"} `,
    },
    {
        id:"7",
        imgsrc:"/images/man-7.jpg",
        img1:"/images/shirt.jpg",
        img2:"/images/shirt-2.jpg",
        img3:"/images/shirt-3.jpg",
        category:"Man",
        name: "T-Shirt Name 4",
        cost: "$33.00-$36.00",
        paragraph:"This is a shirt",
        size1:"XS",
        size2:"S",
        size3:"M",
        size4:"L",
        size5:"XL",
        color1:"",
        color2:"",
        color3:"",
        description1: `About this item: 100% Cotton, Imported, Machine Wash, Short-sleeve T-shirt featuring crew neckline and contrast logo on chest${"\n"}, Model is 6 and wearing a size Medium, Standard Fit, Imported from USA and Made in Mexico `,
        
        description2: `100& Cotton ${"\n"} 256gsm ${"\n"} Breathable fabric ${"\n"} Machine washable ${"\n"} Crew neck ${"\n"} Short sleeve ${"\n"} Regular fit ${"\n"} True to size ${"\n"} Soft material ${"\n"} Logo ${"\n"} ` ,
        description3: "Size and Fit ",
        description4: "Model is wearing a size M and is 6tall",
        description5: `Free delivery on order over $500 ${"\n"} 30 days return ${"\n"} 100% secure payment ${"\n"} 24/7 Customer service ${"\n"} 100% satisfaction guarantee ${"\n"} `,
    },
    {
        id:"8",
        imgsrc:"/images/women-6.jpg",
        img1:"/images/shirt.jpg",
        img2:"/images/shirt-2.jpg",
        img3:"/images/shirt-3.jpg",
        category:"Man",
        name: "T-Shirt Name 3",
        cost: "$33.00-$36.00",
        paragraph:"This is a shirt",
        
        size1:"XS",
        size2:"S",
        size3:"M",
        size4:"L",
        size5:"XL",
        color1:"",
        color2:"",
        color3:"",
        
        description1: `About this item: 100% Cotton, Imported, Machine Wash, Short-sleeve T-shirt featuring crew neckline and contrast logo on chest${"\n"}, Model is 6 and wearing a size Medium, Standard Fit, Imported from USA and Made in Mexico `,
        
        description2: `100& Cotton ${"\n"} 256gsm ${"\n"} Breathable fabric ${"\n"} Machine washable ${"\n"} Crew neck ${"\n"} Short sleeve ${"\n"} Regular fit ${"\n"} True to size ${"\n"} Soft material ${"\n"} Logo ${"\n"} ` ,
        description3: "Size and Fit ",
        description4: "Model is wearing a size M and is 6tall",
        description5: `Free delivery on order over $500 ${"\n"} 30 days return ${"\n"} 100% secure payment ${"\n"} 24/7 Customer service ${"\n"} 100% satisfaction guarantee ${"\n"} `,
    },

]
export default function BlogPage(){
    return(
        <>
        <div>
            <div>
                {shirts.map((shirt) => (
                    <Link key={shirt.id} href={`/blogs/${shirt.id}`}>
                        <div>
                            <Image src={shirt.imgsrc} alt={shirt.name} height={300} width={300}/>
                            <Image src={shirt.img1} alt={shirt.name} height={300} width={300}/>
                            <Image src={shirt.img2} alt={shirt.name} height={300} width={300}/>
                            <Image src={shirt.img3} alt={shirt.name} height={300} width={300}/>
                            <h2 className="text-2xl font-bold">{shirt.category}</h2>
                            <h2>{shirt.name}</h2>
                            <h2>{shirt.cost}</h2>
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
                            
                          <div className="flex gap-3">
                          <h1 className="border border-gray-300 p-2 m-2">{shirt.size1}</h1>
                            <h1 className="border border-gray-300 p-2 m-2">{shirt.size2}</h1>
                            <h1 className="border border-gray-300 p-2 m-2">{shirt.size3}</h1>
                            <h1 className="border border-gray-300 p-2 m-2">{shirt.size4}</h1>
                            <h1 className="border border-gray-300 p-2 m-2">{shirt.size5}</h1>
                          </div>
                          <div className="flex gap-3">
                            <div className="w-8 h-8 bg-pink-100">{shirt.color1}</div>
                            <div className="w-8 h-8 bg-black">{shirt.color2}</div>
                            <div className="w-8 h-8 bg-gray-50">{shirt.color3}</div>
                          </div>
                            <h1>{shirt.paragraph}</h1>
                            
                            
                        </div>
                    
                    
                    </Link>
                ))}
            </div>
        </div>
        
        
        
        </>
    )
}