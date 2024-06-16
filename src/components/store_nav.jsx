import { Link } from 'react-router-dom';
export default function StoreNav() {
    return (
        <>
            <div>
                <div className="sticky top-0 bg-[#637eb9] w-full h-[2.5rem] rounded-t-lg flex justify-between text-white px-9 py-2  my-auto font-semibold    ">
                    <div className="max-xl:hidden max-lg:hidden max-md:hidden">
                        <svg className="w-15 h-15 p-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </div>

                    <div className="w-[40%] text-right max-xl:w-full max-xl:text-center max-lg:w-full max-lg:text-center max-md:w-full max-md:text-center">
                        <h3>Get free delivery on orders over &#x20B1;2,000 </h3>
                    </div>

                    <div className="flex justify-between gap-5 max-xl:hidden max-lg:hidden max-md:hidden">
                        <h3><Link to="/create">Create an account</Link></h3>
                        <div className="border-l h-6 border-gray-300 my-auto "></div>
                        <h3><Link to="/sign_in">Sign in</Link></h3>
                    </div>
                </div>

                <div className="flex justify-between  py-2 border-b  ">
                    <div className="flex mx-5 max-lg:w-[50%] max-lg:justify-between">
                        <div className="my-auto p-2 gap-3 hidden  max-lg:flex max-md:flex">
                            <svg className=" my-auto" width="30px" height="30px" viewBox="0 0 42 42" enable-background="new 0 0 32 32" id="Editable-line" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#637eb9" stroke="#637eb9"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><line fill="none" id="XMLID_103_" stroke="#637eb9" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="7" x2="25" y1="16" y2="16"></line><line fill="none" id="XMLID_102_" stroke="#637eb9" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="7" x2="25" y1="25" y2="25"></line><line fill="none" id="XMLID_101_" stroke="#637eb9" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" 
                            stroke-width="2" x1="7" x2="25" y1="7" y2="7"></line></g></svg>

                             <div className="flex max-2xl:hidden max-xl:hidden max-lg:block">
                                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#969696"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </div>
                        </div>
                        
                        <div className="flex max-lg:gap-2 max-lg:flex-row-reverse max-lg:justify-end">
                            <div className=" p-4">
                                <Link to="/">
                                    <svg className="w-15 h-15 p-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#637eb9" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                </Link>

                            </div>
                            
                            <div className=" max-lg:hidden max-md:hidden max-sm:hidden">
                                <ul id="content" className="flex flex-row p-2 m-2 gap-9 list-none">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/market_place">Marketplace</Link></li>
                                    <li><Link to="/company">Company</Link></li>
                                </ul>
                            </div>
                            
                           
                        </div>
                    </div>
                       
                    <div className="flex m-2 p-2 gap-5  ">

                        <div className=" max-lg:hidden max-md:hidden ">
                            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#969696"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </div>

                        <div className="flex gap-3">
                            <Link to="/account">
                                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#969696"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="6" r="4" stroke="#969696" stroke-width="1.5"></circle> <path opacity="0.5" d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z" stroke="#969696" stroke-width="1.5"></path> </g></svg>
                            </Link>

                            <div className="border-l h-6 border-gray-300 my-auto mx-2 "></div>

                            <div className="flex gap-3">
                                <Link to="/shopping_cart">
                                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#969696"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="#969696" stroke-width="1.5"></path> <path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="#969696" stroke-width="1.5"></path> <path d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7" stroke="#969696" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                                </Link>
                                <span className="text-[#969696] text-lg">0</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

