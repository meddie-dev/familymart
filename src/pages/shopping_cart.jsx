import { Link } from "react-router-dom";
import StoreNav from "../components/store_nav.jsx";
import Footer from "../components/footer.jsx";
import items from '../assets/item.png';

export default function ShoppingCart() {
    return (
        <>
            <StoreNav />
            <div className="w-[70%] h-full mx-auto max-lg:w-full">
                <div className="max-w-full mx-auto my-[3rem] text-center">
                    <h1 className="text-4xl font-bold">Shopping Cart</h1>
                </div>
                <div className="max-w-[90%] mx-auto flex flex-col ">
                    <div className="w-[90%] mx-auto flex flex-row justify-between border-b border-t">
                        <div className="flex flex-row p-3">
                            <div className="w-[12rem]">
                                <img src= {items} alt="item.png" />
                            </div>
                            <div className="flex flex-col justify-between p-5">
                                <div className="flex flex-col gap-3">
                                    <h3 className="w-[4rem]">Basic Tee</h3>
                                    <p className="text-gray-500">Sienna</p>
                                    <p className="text-gray-500">Large</p>
                                </div>
                                <p className="flex gap-3 max-lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>

                                    In Stock
                                </p>
                            </div>
                            <hr className="my-5 " />
                        </div>

                        <div className="flex flex-col justify-between p-9 max-md:px-4">
                            <div className=" ">
                                <span className="font-semibold">$32.00</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[#637eb9] cursor-pointer">Remove</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-[90%] mx-auto flex flex-row justify-between border-b border-t">
                        <div className="flex flex-row p-3">
                            <div className="w-[12rem]">
                                <img src= {items} alt="item.png" />
                            </div>
                            <div className="flex flex-col justify-between p-5">
                                <div className="flex flex-col gap-3">
                                    <h3 className="w-[4rem]">Basic Tee</h3>
                                    <p className="text-gray-500">Sienna</p>
                                    <p className="text-gray-500">Large</p>
                                </div>
                                <p className="flex gap-3 max-lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>

                                    Will ship in 7-8 years
                                </p>
                            </div>
                            <hr className="my-5 " />
                        </div>

                        <div className="flex flex-col justify-between p-9 max-md:px-4">
                            <div className=" ">
                                <span className="font-semibold">$32.00</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[#637eb9] cursor-pointer">Remove</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-[90%] mx-auto flex flex-row justify-between border-b border-t">
                        <div className="flex flex-row p-3">
                            <div className="w-[12rem]">
                                <img src= {items} alt="item.png" />
                            </div>
                            <div className="flex flex-col justify-between p-5">
                                <div className="flex flex-col gap-3">
                                    <h3 className="w-[4rem]">Basic Tee</h3>
                                    <p className="text-gray-500">Sienna</p>
                                    <p className="text-gray-500">Large</p>
                                </div>
                                <p className="flex gap-3 max-lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>

                                    In Stock
                                </p>
                            </div>
                            <hr className="my-5 " />
                        </div>

                        <div className="flex flex-col justify-between p-9 max-md:px-4">
                            <div className=" ">
                                <span className="font-semibold">$32.00</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[#637eb9] cursor-pointer">Remove</span>
                            </div>
                        </div>
                    </div>


                    <div className="w-[90%] mx-auto flex flex-row justify-between border-b border-t">
                        <div className="flex flex-row p-3">
                            <div className="w-[12rem]">
                                <img src= {items} alt="item.png" />
                            </div>
                            <div className="flex flex-col justify-between p-5">
                                <div className="flex flex-col gap-3">
                                    <h3 className="w-[4rem]">Basic Tee</h3>
                                    <p className="text-gray-500">Sienna</p>
                                    <p className="text-gray-500">Large</p>
                                </div>
                                <p className="flex gap-3 max-lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>

                                    In Stock
                                </p>
                            </div>
                            <hr className="my-5 " />
                        </div>

                        <div className="flex flex-col justify-between p-9 max-md:px-4">
                            <div className=" ">
                                <span className="font-semibold">$32.00</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[#637eb9] cursor-pointer">Remove</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-[80%] mx-auto my-10">
                    <div className="flex flex-row justify-between px-9 ">
                        <h3 className="font-semibold text-md">Subtotal</h3>
                        <p className="font-semibold text-lg">$32.00</p>
                    </div>
                    <p className="text-gray-500 px-9">Shipping and taxes will be calculated at checkout.</p>
                    <Link to="/checkout">
                        <button className="w-full h-12 bg-[#637eb9] text-white px-9 rounded-lg mt-10">Checkout</button>
                    </ Link>

                    <p className="text-center text-gray-500 mt-3" >
                        or
                        <Link to="/shop">
                            <span className="text-[#637eb9] cursor-pointer px-3">Continue Shopping </span>
                        </ Link>
                    </p>
                </div>

            </div>

            <Footer />

        </>
    );
}