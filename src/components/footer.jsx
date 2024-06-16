import React from 'react';

export default function Footer() {
    return (
        <>
            <footer className="relative z-50 bg-gray-800 text-white py-8">
                <div className=" container mx-auto px-4">
                    <div className="flex flex-wrap justify-between xl:flex-nowrap sm:flex-wrap max-sm:text-center ">
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h2 className="text-xl font-bold mb-4 px-3">Accounts</h2>
                            <ul className='p-3'>
                                <li className="mb-2"><a href="/shop" className="text-gray-400 hover:text-white">Manage Account</a></li>
                                <li className="mb-2"><a href="/about" className="text-gray-400 hover:text-white">Saved Items</a></li>
                                <li className="mb-2"><a href="/contact" className="text-gray-400 hover:text-white">Orders</a></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h2 className="text-xl font-bold mb-4 px-3">Service</h2>
                            <ul className='p-3'>
                                <li className="mb-2"><a href="/shop" className="text-gray-400 hover:text-white">Shipping & Returns</a></li>
                                <li className="mb-2"><a href="/about" className="text-gray-400 hover:text-white">Warranty</a></li>
                                <li className="mb-2"><a href="/contact" className="text-gray-400 hover:text-white">FAQ</a></li>
                                <li className="mb-2"><a href="/contact" className="text-gray-400 hover:text-white">Find a store</a></li>
                                <li className="mb-2"><a href="/contact" className="text-gray-400 hover:text-white">Get in touch</a></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h2 className="text-xl font-bold mb-4 px-3">Company</h2>
                            <ul className='p-3'>
                                <li className="mb-2"><a href="/shop" className="text-gray-400 hover:text-white">Who we are</a></li>
                                <li className="mb-2"><a href="/about" className="text-gray-400 hover:text-white">Press</a></li>
                                <li className="mb-2"><a href="/contact" className="text-gray-400 hover:text-white">Careers</a></li>
                                <li className="mb-2"><a href="/contact" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
                                <li className="mb-2"><a href="/contact" className="text-gray-400 hover:text-white">Privacy</a></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h2 className="text-xl font-bold mb-4 px-3">Quick Links</h2>
                            <ul className='p-3'>
                                <li className="mb-2"><a href="/shop" className="text-gray-400 hover:text-white">Shop</a></li>
                                <li className="mb-2"><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                                <li className="mb-2"><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
                                <li className="mb-2"><a href="/faq" className="text-gray-400 hover:text-white">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3">
                            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
                            <div className="flex space-x-4 max-sm:justify-center">
                                <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54v-2.243c0-2.507 1.493-3.89 3.777-3.89 1.094 0 2.239.195 2.239.195v2.463h-1.26c-1.243 0-1.63.774-1.63 1.563V12h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                                    </svg>
                                </a>
                                <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.18 0-.355-.013-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.647 4.118 4.118 0 001.804-2.27 8.225 8.225 0 01-2.605.996A4.107 4.107 0 0016.616 4c-2.266 0-4.103 1.837-4.103 4.103 0 .322.036.636.106.935C8.11 8.952 5.31 7.556 3.286 5.337a4.088 4.088 0 00-.555 2.062c0 1.42.722 2.673 1.823 3.408a4.09 4.09 0 01-1.858-.513v.052c0 1.981 1.408 3.632 3.281 4.005a4.108 4.108 0 01-1.853.07 4.107 4.107 0 003.834 2.85A8.233 8.233 0 012 18.407 11.617 11.617 0 008.29 20" />
                                    </svg>
                                </a>
                                <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.342 3.608 1.317.975.975 1.255 2.242 1.317 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.342 2.633-1.317 3.608-.975.975-2.242 1.255-3.608 1.317-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.342-3.608-1.317-.975-.975-1.255-2.242-1.317-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.342-2.633 1.317-3.608.975-.975 2.242-1.255 3.608-1.317 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.755 0 8.346.012 7.052.07 5.735.13 4.468.403 3.336 1.535 2.204 2.667 1.931 3.934 1.87 5.252.812 8.346.812 11.654.812 12c0 .346.012.654.058 2.748.062 1.318.334 2.585 1.466 3.717 1.132 1.132 2.399 1.404 3.717 1.466 1.318.046 1.626.058 2.748.058.346 0 .654-.012 2.748-.058 1.318-.062 2.585-.334 3.717-1.466 1.132-1.132 1.404-2.399 1.466-3.717.046-1.318.058-1.626.058-2.748 0-.346-.012-.654-.058-2.748-.062-1.318-.334-2.585-1.466-3.717-1.132-1.132-2.399-1.404-3.717-1.466-1.318-.046-1.626-.058-2.748-.058zm0 5.838c-3.403 0-6.163 2.761-6.163 6.163s2.761 6.163 6.163 6.163 6.163-2.761 6.163-6.163-2.761-6.163-6.163-6.163zm0 10.163c-2.212 0-4-1.788-4-4s1.788-4 4-4 4 1.788 4 4-1.788 4-4 4zm6.406-11.845c0 .796-.646 1.442-1.442 1.442s-1.442-.646-1.442-1.442.646-1.442 1.442-1.442 1.442.646 1.442 1.442z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <p className="text-gray-400">&copy; 2024 FamilyMart. All rights reserved.</p>
                    </div>
                </div>
                <div className='absolute z-0 top-0 left-0 w-full h-full opacity-10'>
                    <video className='w-full h-full object-cover' src="src/assets/Untitled design (2).mp4" autoPlay muted playsInline loop></video>
                </div>
            </footer>
        </>
    );
};
