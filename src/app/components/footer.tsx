import React from 'react'
import Link from 'next/link'
import { Facebook, Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <>
            <footer className='bg-pink-100 p-20'>
                <h2 className='text-center text-2xl font-bold'>Subscribe To Get Offers In Your Inbox</h2>
                <h3 className='text-center text-gray-800 mt-4'>Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod condimentum</h3>
                <ul className='mt-6'>
                    <li className="flex gap-5 text-[13px] justify-center items-center">
                        <Link href={"/"} >BUY T-SHIRTS</Link>
                        <Link href={"/"}>WOMEN</Link>
                        <Link href={"/"}>MAN</Link>
                        <Link href={"/"}>ABOUT</Link>
                        <Link href={"/"}>CONTACT</Link>
                    </li>
                </ul>
                <div className='flex justify-center gap-5 mt-9'>
                    <Link href="https://www.facebook.com/profile.php?id=61553826722345" className='p-3 bg-white'><Facebook /></Link>
                <Link href="https://www.linkedin.com/in/kashaf-akram-b26b61277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='p-3 bg-white'><Linkedin /></Link>
                   <Link href="https://github.com/Kashafgit" className='p-3 bg-white'><Github /></Link>
                   </div>
                   
                
            </footer>
            <div className='bg-black p-8 text-white text-center'>
                    <p>Copyright &copy; 2024 All Right Reserved. Design by kashaf akram</p>
                   </div>

        </>
    )
}

export default Footer