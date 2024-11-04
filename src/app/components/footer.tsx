"use client";

import { FaGithubSquare, FaSteamSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center bg-white py-4 border-t-2 border-black w-full">
            <div className='text-sm md:text-base lg:text-lg text-center mb-2'>
                Job Connector Web Development Purwadhika Bandung Property on FrontEnd Projects.
            </div>
            <div className="flex justify-center items-center gap-5 md:gap-10 mb-2">
                <a href="https://github.com/crayoninvok" className="text-3xl md:text-4xl hover:text-gray-600">
                    <FaGithubSquare />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61562493073873&locale=id_ID" className="text-3xl md:text-4xl hover:text-gray-600">
                    <FaSquareFacebook />
                </a>
                <a href="mailto:dathariqf@gmail.com" className="text-3xl md:text-4xl hover:text-gray-600">
                    <MdAttachEmail />
                </a>
                <a href="https://steamcommunity.com/profiles/76561198272808740/" className="text-3xl md:text-4xl hover:text-gray-600">
                    <FaSteamSquare />
                </a>
            </div>
            <div className="text-xs md:text-sm lg:text-base w-full bg-white text-center py-2">
                &copy; 2024 Copyright: Dzaky Athariq Ferreira
            </div>
        </footer>
    );
}
