import React from "react";

export default function Category() {
    return (
        <>
            <div>
                <div className="m-2 p-3 flex justify-between">
                    <div className="m-2 p-3 font-bold text-2xl text-gray-700 max-sm:text-[20px] ">
                        <h1 >Shop by Category</h1>
                    </div>

                    <div className=" m-2 p-3 flex gap-3 max-sm:text-[15px]">
                        <span className="text-[#637eb9]">Browse all categories</span>
                        <svg color="white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#637eb9" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </div>

                <div className="max-w-[90%] mx-auto">
                    <div className="grid grid-cols-2 gap-8  max-md:max-w-[90%]  max-md:mx-auto max-md:gap-5 max-sm:flex max-sm:flex-col ">
                        <div className="relative max-md:h-[30rem] max-sm:max-h-[14rem] ">
                            <img className="object-cover h-full w-full  rounded-md brightness-[80%] " src= {import.meta.env.BASE_URL + "./assets/category/pm1.jpg"} alt="Product image" />
                            <div className="absolute bottom-0 left-0 text-white m-3 p-3 ">
                                <h3 className="font-bold">New Arrivals</h3>
                                <p>Prescription Medicine</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 justify-between max-md:justify-between  ">
                            <div className="relative h-80 max-md:max-h-[14rem]  ">
                                <img className="object-cover h-[20rem] max-md:h-[14rem]  w-full rounded-md brightness-[80%] " src= {import.meta.env.BASE_URL + "./assets/category/pm2.avif"} alt="Product image" />
                                <div className="absolute bottom-0 left-0  text-white m-3 p-3 ">
                                    <h3 className="font-bold">New Arrivals</h3>
                                    <p>Baby & Kids</p>
                                </div>
                            </div>
                            <div className="relative h-80 max-md:max-h-[14rem]  ">
                                <img className="object-cover h-[20rem] max-md:h-[14rem]  w-full rounded-md brightness-[80%] " src= {import.meta.env.BASE_URL + "./assets/category/pm3.jpg"} alt="Product image" />
                                <div className="absolute bottom-0 left-0  text-white m-3 p-3 ">
                                    <h3 className="font-bold">New Arrivals</h3>
                                    <p>Personal care</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}