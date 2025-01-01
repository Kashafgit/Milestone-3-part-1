import React from 'react'
import Link from 'next/link'
import { Facebook, Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <>
            <footer className='bg-pink-100 p-10 sm:p-16 lg:p-20'>
                <h2 className='text-center text-xl sm:text-2xl lg:text-3xl font-bold'>
                    Subscribe To Get Offers In Your Inbox
                </h2>
                <h3 className='text-center text-gray-800 mt-4 text-sm sm:text-base'>
                    Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod condimentum
                </h3>
                <ul className='mt-6'>
                    <li className="flex flex-wrap gap-3 sm:gap-5 text-[12px] sm:text-[13px] lg:text-base justify-center items-center">
                        <Link href={"/"} className="hover:underline">BUY T-SHIRTS</Link>
                        <Link href={"/"} className="hover:underline">WOMEN</Link>
                        <Link href={"/"} className="hover:underline">MAN</Link>
                        <Link href={"/"} className="hover:underline">ABOUT</Link>
                        <Link href={"/"} className="hover:underline">CONTACT</Link>
                    </li>
                </ul>
                <div className='flex justify-center gap-4 sm:gap-6 lg:gap-8 mt-9'>
                    <Link href="https://www.facebook.com/profile.php?id=61553826722345" className='p-3 bg-white rounded-full hover:bg-gray-200'>
                        <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/kashaf-akram-b26b61277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='p-3 bg-white rounded-full hover:bg-gray-200'>
                        <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Link>
                    <Link href="https://github.com/Kashafgit" className='p-3 bg-white rounded-full hover:bg-gray-200'>
                        <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Link>
                </div>
            </footer>
            <div className='bg-black p-5 sm:p-8 text-white text-center'>
                <p className='text-xs sm:text-sm lg:text-base'>
                    Copyright &copy; 2024 All Right Reserved. Design by Kashaf Akram
                </p>
            </div>
        </>
    );
}

export default Footer;
