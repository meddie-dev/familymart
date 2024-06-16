import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const handleResize = () => {
        if (window.innerWidth >= 1024) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <header className="  mx-auto bg-white sticky top-0 z-20 mb-10 ">
                <div className="p-3 flex flex-row justify-evenly max-md:justify-between max-md:px-8">
                    <div className="flex flex-row gap-2 max-w-auto p-4">
                        <svg className="w-15 h-15 p-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <h3 className="font-bold text-sky-800 text-xl">FamilyMart</h3>
                    </div>
                    <div className="max-md:hidden max-sm:hidden">
                        <ul id="content" className="flex flex-row p-2 m-2 gap-9 list-none">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><a href="#">Marketplace</a></li>
                            <li><a href="#">Company</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-row gap-3 py-2 my-2 max-md:hidden max-sm:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                        </svg>
                    </div>
                    <button id="menuButton" onClick={toggleSidebar} className="py-2 my-2 hidden max-md:block">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>

                <div className="md:hidden">
                    <div className={`relative w-full text-white flex-col h-screen transition-all ${isSidebarOpen ? 'flex' : 'hidden'} md:flex`}>
                        <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
                            <source src= {import.meta.env.BASE_URL + "src/assets/4121750-uhd_3840_2160_25fps.mp4"} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="relative z-10 flex-1 px-2 py-10 space-y-2 text-center bg-opacity-75 bg-gray-800">
                            <ul id="content" className="flex flex-col p-2 m-2 gap-9 list-none">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><a href="#">Marketplace</a></li>
                                <li><a href="#">Company</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}

