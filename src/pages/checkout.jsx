import { Link } from "react-router-dom";
import StoreNav from "../components/store_nav.jsx";
import Footer from "../components/footer";
export default function Checkout() {
    return (
        <>
            <StoreNav />
            <div className="relative z-40  max-w-full mx-auto p-10 gap-2 rounded-lg grid grid-cols-2 max-xl:grid-cols-1">
                <div className=" z-50 bg-[#637eb9] text-gray-800 py-10 rounded-lg shadow-xl">
                    <div className="container mx-auto px-4">
                        <h1 className="text-2xl font-bold p-2 mb-6 text-white">Contact information</h1>
                        <section className="mb-10">
                            
                            <div className="max-w-2xl h-full mx-auto bg-white p-8 rounded shadow-md">
                                <h2 className="text-2xl font-bold mb-4">Billing Address</h2>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-3 py-2 border rounded"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-3 py-2 border rounded"
                                        placeholder="john.doe@example.com"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="address">Address</label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        className="w-full px-3 py-2 border rounded"
                                        placeholder="123 Main St"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="city">City</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        className="w-full px-3 py-2 border rounded"
                                        placeholder="New York"
                                    />
                                </div>
                                <div className="flex mb-4">
                                    <div className="w-1/2 pr-2">
                                        <label className="block text-gray-700 mb-2" htmlFor="state">State</label>
                                        <input
                                            type="text"
                                            id="state"
                                            name="state"
                                            className="w-full px-3 py-2 border rounded"
                                            placeholder="NY"
                                        />
                                    </div>
                                    <div className="w-1/2 pl-2">
                                        <label className="block text-gray-700 mb-2" htmlFor="zip">Zip</label>
                                        <input
                                            type="text"
                                            id="zip"
                                            name="zip"
                                            className="w-full px-3 py-2 border rounded"
                                            placeholder="10001"
                                        />
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="cardName">Name on Card</label>
                                    <input
                                        type="text"
                                        id="cardName"
                                        name="cardName"
                                        className="w-full px-3 py-2 border rounded"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="cardNumber">Card Number</label>
                                    <input
                                        type="text"
                                        id="cardNumber"
                                        name="cardNumber"
                                        className="w-full px-3 py-2 border rounded"
                                        placeholder="1234 5678 9012 3456"
                                    />
                                </div>
                                <div className="flex mb-4">
                                    <div className="w-1/2 pr-2">
                                        <label className="block text-gray-700 mb-2" htmlFor="expiryDate">Expiry Date</label>
                                        <input
                                            type="text"
                                            id="expiryDate"
                                            name="expiryDate"
                                            className="w-full px-3 py-2 border rounded"
                                            placeholder="MM/YY"
                                        />
                                    </div>
                                    <div className="w-1/2 pl-2">
                                        <label className="block text-gray-700 mb-2" htmlFor="cvv">CVV</label>
                                        <input
                                            type="text"
                                            id="cvv"
                                            name="cvv"
                                            className="w-full px-3 py-2 border rounded"
                                            placeholder="123"
                                        />
                                    </div>
                                </div>

                                <button type="button" className="w-full  px-4 py-2 rounded">
                                    Place Order
                                </button>
                            </div>
                            
                        </section>
                        
                    </div>
                   
                </div>

                <div className=" w-full h-full mx-auto  rounded-lg">
                    <div className="max-w-full mx-auto my-[2rem]">
                        <h1 className="text-2xl font-bold px-3">Order Summary</h1>
                    </div>
                    <div className="max-w-[100%] mx-auto flex flex-col ">
                        <div className="w-full mx-auto flex flex-row justify-between border-b border-t">
                            <div className="flex flex-row p-3">
                                <div className="w-[12rem]">
                                    <img src="src/assets/item.png" alt="" />
                                </div>
                                <div className="flex flex-col justify-between p-5">
                                    <div className="flex flex-col gap-3 max-sm:w-[4rem]">
                                        <h3>Basic Tee</h3>
                                        <p className="text-gray-500">Sienna</p>
                                        <p className="text-gray-500">Large</p>
                                    </div>
                                    <p className="flex gap-3 max-sm:hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>

                                        In Stock
                                    </p>
                                </div>
                                <hr className="my-5 " />
                            </div>

                            <div className="flex flex-col justify-between p-9 max-sm:px-3">
                                <div className=" ">
                                    <span className="font-semibold">$32.00</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#637eb9] cursor-pointer">Remove</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full mx-auto flex flex-row justify-between border-b border-t">
                            <div className="flex flex-row p-3">
                                <div className="w-[12rem]">
                                    <img src="src/assets/item.png" alt="" />
                                </div>
                                <div className="flex flex-col justify-between p-5">
                                    <div className="flex flex-col gap-3 max-sm:w-[4rem]">
                                        <h3>Basic Tee</h3>
                                        <p className="text-gray-500">Sienna</p>
                                        <p className="text-gray-500">Large</p>
                                    </div>
                                    <p className="flex gap-3 max-sm:hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>

                                        Will ship in 7-8 years
                                    </p>
                                </div>
                                <hr className="my-5 " />
                            </div>

                            <div className="flex flex-col justify-between p-9 max-sm:px-3">
                                <div className=" ">
                                    <span className="font-semibold">$32.00</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#637eb9] cursor-pointer">Remove</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full mx-auto flex flex-row justify-between border-b border-t">
                            <div className="flex flex-row p-3">
                                <div className="w-[12rem]">
                                    <img src="src/assets/item.png" alt="" />
                                </div>
                                <div className="flex flex-col justify-between p-5">
                                    <div className="flex flex-col gap-3 max-sm:w-[4rem]">
                                        <h3>Basic Tee</h3>
                                        <p className="text-gray-500">Sienna</p>
                                        <p className="text-gray-500">Large</p>
                                    </div>
                                    <p className="flex gap-3 max-sm:hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>

                                        In Stock
                                    </p>
                                </div>
                                <hr className="my-5 " />
                            </div>

                            <div className="flex flex-col justify-between p-9 max-sm:px-3">
                                <div className=" ">
                                    <span className="font-semibold">$32.00</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#637eb9] cursor-pointer">Remove</span>
                                </div>
                            </div>
                        </div>


                        <div className="w-full mx-auto flex flex-row justify-between border-b border-t">
                            <div className="flex flex-row p-3">
                                <div className="w-[12rem]">
                                    <img src="src/assets/item.png" alt="" />
                                </div>
                                <div className="flex flex-col justify-between p-5">
                                    <div className="flex flex-col gap-3 max-sm:w-[4rem]">
                                        <h3>Basic Tee</h3>
                                        <p className="text-gray-500">Sienna</p>
                                        <p className="text-gray-500">Large</p>
                                    </div>
                                    <p className="flex gap-3 max-sm:hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>

                                        In Stock
                                    </p>
                                </div>
                                <hr className="my-5 " />
                            </div>

                            <div className="flex flex-col justify-between p-9 max-sm:px-3">
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
                    </div>
                    <div className="absolute top-0 left-0 z-0 w-full h-full opacity-10 ">
                        <video className=" object-cover w-full h-full" src="src/assets/Untitled design (1).mp4" autoPlay muted playsInline loop></video>
                    </div>
                </div>
                
            </div>
            
            <Footer />
        </>
    )
}