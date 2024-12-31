import { Shirts } from "../interfaces/shirt";
interface ShirtCardProps{
    shirt:Shirts
}
import React from 'react'
import Image from "next/image";

export default function ShirtCard({shirt}:ShirtCardProps) {
  return (
    <div>
        <Image src={shirt.imgsrc} alt="shirt" width={300} height={300}/>
        <h2>{shirt.name}</h2>
        <h2>{shirt.category}</h2>
        <h2>{shirt.cost}</h2>
        <h2>{shirt.paragraph}</h2>

    </div>
  )
}
