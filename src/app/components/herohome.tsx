"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroHome() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8">
            <div className="flex-1 flex justify-center md:max-w-[50%] relative">
                <div className="relative">
                    <Image 
                        src="/home/Dzaky01.jpg" 
                        alt="Description" 
                        className="rounded-lg shadow-lg transition-all hover:brightness-75" 
                        layout="intrinsic" 
                        width={600} 
                        height={400} 
                    />
                    <span className="absolute top-2 left-2 text-white text-lg bg-black bg-opacity-70 px-2 py-1 rounded">
                        <p className="text-[20px] text-rose-400 font-bold">Developer</p>
                        <p className="text-[15px] font-semibold">Dzaky Athariq Ferreira</p>
                    </span>
                </div>
            </div>
            <div className="flex-1 text-center md:text-left mt-8 md:mt-0">
                {/* Add the image above the portfolio heading */}
                <div className="flex justify-center md:justify-start mb-4 ml-[10rem]">
                    <Image 
                        src="/home/coding.png" 
                        alt="Portfolio Icon"
                        width={250} // Adjust width as needed
                        height={50} // Adjust height as needed
                    />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    My little Portfolio
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    Hello this is my portofolio using NextJs, I hope you enjoy the page.
                </p>
                <Link href="#projects" className="mt-4 px-6 py-3 bg-white text-blue-500 rounded-full font-semibold transition duration-300 hover:bg-gray-200">
                    View My Work
                </Link>
            </div>
        </div>
    );
}
