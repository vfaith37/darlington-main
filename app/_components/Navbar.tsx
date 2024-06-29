"use client";
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const variants = {
        open: { opacity: 1, height: 'auto', transition: { duration: 0.5 } },
        closed: { opacity: 0, height: 0, transition: { duration: 0.5 } },
    };

    return (
        <nav className="bg-white-transparent text-black fixed w-full">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="#">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap font-gallient">Darlington</span>
                    </div>
                </Link>
                <button
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    data-collapse-toggle="navbar-solid-bg"
                    type="button"
                    className="inline-flex items-center p-2 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
                    aria-controls="navbar-solid-bg"
                    aria-expanded={navbarOpen}
                >
                    {navbarOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="30" width="30" className="icon icon--larger" focusable="false" aria-hidden="true" fill="black">
                            <path stroke="black" strokeWidth="2" className="close-icon" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="30" width="30" className="icon icon--larger" focusable="false" aria-hidden="true" fill="black">
                            <path stroke="black" strokeWidth="2" className="menu-icon" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/>
                        </svg>
                    )}
                </button>
                <motion.div
                    initial="closed"
                    animate={navbarOpen ? "open" : "closed"}
                    variants={variants}
                    className="w-full md:hidden"
                    id="navbar-solid-bg"
                >
                    <ul className="flex flex-col font-medium mt-4 rounded-lg items-center bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent">
                        <li>
                            <Link href="/">
                                <div className="block py-2 px-3 md:p-0" aria-current="page">About</div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/portfolio">
                                <div className="block py-2 px-3 md:p-0 md:border-0">Portfolio</div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/event">
                                <div className="block py-2 px-3 md:p-0 md:border-0">Event</div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/press">
                                <div className="block py-2 px-3 md:p-0 md:border-0">Press</div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/press">
                                <div className="block py-2 px-3 md:border-0 bg-black text-white h-8 rounded-lg items-center flex justify-center">Book Now</div>
                            </Link>
                        </li>
                    </ul>
                </motion.div>
                <div className="hidden md:block w-full md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg items-center bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent">
                        <li>
                            <Link href="/">
                                <div className="block py-2 px-3 md:p-0" aria-current="page">About</div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/portfolio">
                                <div className="block py-2 px-3 md:p-0 md:border-0">Portfolio</div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/event">
                                <div className="block py-2 px-3 md:p-0 md:border-0">Event</div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/press">
                                <div className="block py-2 px-3 md:p-0 md:border-0">Press</div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/press">
                                <div className="block py-2 px-3 md:border-0 bg-black text-white h-8 rounded-lg items-center flex justify-center">Book Now</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
