"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbar  px-5 md:px-10 flex justify-between items-center top-0 w-full z-10 fixed backdrop-blur-md bg-white/20">
            <div className="flex-none">
                <Image src="/navbar/gitlab.svg" alt="logo" width={32} height={32} />
            </div>

            <ul className="hidden md:flex flex-1 justify-center gap-5 text-black">
                <li className="btn btn-ghost text-lg md:text-xl">
                    <Link href="/">Home</Link>
                </li>
                <li className="btn btn-ghost text-lg md:text-xl">
                    <Link href="/about">About</Link>
                </li>
                <li className="btn btn-ghost text-lg md:text-xl">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>

            <div className="md:hidden flex flex-1 justify-end relative z-30">
                <button 
                    onClick={toggleMenu} 
                    className="cursor-pointer text-2xl px-2 py-1 text-black font-bold"
                    aria-label="Toggle menu"
                >
                    ☰
                </button>

                {menuOpen && (
                    <ul className="absolute right-0 top-full mt-1 text-black p-4 rounded shadow-lg flex flex-col gap-2 w-40 z-30 backdrop-blur-md">
                        <li className="btn btn-ghost text-lg">
                            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                        </li>
                        <li className="btn btn-ghost text-lg">
                            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
                        </li>
                        <li className="btn btn-ghost text-lg">
                            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
}
