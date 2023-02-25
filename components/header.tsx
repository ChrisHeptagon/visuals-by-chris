'use client'
import Image from 'next/image'
import { useState } from 'react'



export default function ResponsiveHeader() {
    const [isOpen, setIsOpen] = useState(false)
return (
         <header>
        <nav className="flex items-center justify-evenly bg-[#ffbb00] p-[2vw]">
            <span className="font-semibold text-xl tracking-tight hover:text-[#2e2e2e] transition hidden md:flex"> 
                <a href="/"> About</a>
            </span>
            <a href="/">
            <Image className="mx-auto hover:brightness-[0.8] " src="/images/VisualsByChris.png" width={200} height={200} alt="Visuals By Chris Logo"/>
            </a>
            <span className="font-semibold text-xl tracking-tight hover:text-[#2e2e2e] transition hidden md:flex">
                <a href="/portfolio"> Portfolio </a>     
            </span>
            <button className='flex md:hidden' onClick={() => setIsOpen(!isOpen)}>
                <svg className="w-6 h-6 text-[#2e2e2e] hover:text-[#ffffff] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

       </nav>            
       <div className={`flex-col items-center text-center border-spacing-1 rounded-lg ${isOpen ? 'flex md:hidden' : 'hidden md:hidden'}`}>
                <a href="/about" className="font-semibold text-xl tracking-tight hover:text-[#2e2e2e] transition border min-w-full">About</a>
                <a href="/portfolio" className="font-semibold text-xl tracking-tight hover:text-[#2e2e2e] transition border min-w-full">Portfolio</a>
            </div>
       </header>
    )
}