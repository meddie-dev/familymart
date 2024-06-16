export default function PromoSectionOverlap() {
    return (
        <>
            <div className="relative z-10">
                <div>
                    <div className="text-center my-20">
                        <h1 className=" text-white text-6xl font-bold max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-sm:px-2">Stock Up and Save: Pharmacy Sale Extravaganza!</h1>
                        <button className="btn btn-primary w-[13rem] h-[3rem] mt-[3rem] mb-2 max-sm:w-[12rem]">Shop Collection</button>
                    </div>
                    
                    <div className="relative max-w-[90%] mx-auto mb-20 flex flex-row gap-9  max-lg:flex-row max-lg:max-w-[97%] max-lg:mx-auto  max-md:flex-col max-md:max-w-[75%]  max-sm:flex-col max-sm:max-w-[75%]">
                        
                        <div className="relative flex drop-shadow-xl" >
                            <img className="rounded-xl brightness-[90%] " src={import.meta.env.BASE_URL + "./assets/category/pm1.jpg"} alt="Prescription Medicine image" />
                            <div className="absolute bottom-7 left-7 flex flex-col z-10">
                                <h3 className="text-sm font-semibold text-white my-1">Shop the Collection</h3>
                                <p className="text-md font-bold text-white">Prescription Medicine</p>
                            </div>
                            <div className="absolute rounded-lg top-0 right-0 opacity-30 w-full h-full bg-gradient-to-t from-gray-500 "></div>
                        </div>
                        <div className="relative flex drop-shadow-xl" >
                            <img className="rounded-xl brightness-[90%]" src={import.meta.env.BASE_URL + "./assets/category/pm2.avif"} alt="Baby & Kids image" />
                            <div className="absolute bottom-7 left-7 flex flex-col z-10">
                                <h3 className="text-sm font-semibold text-white my-1">Shop the Collection</h3>
                                <p className="text-md font-bold text-white"> Baby & Kids </p>
                            </div>
                            <div className="absolute rounded-lg top-0 right-0 opacity-30 w-full h-full bg-gradient-to-t from-gray-500 "></div>
                        </div>
                        <div className="relative flex drop-shadow-xl" >
                            <img className="rounded-xl brightness-[90%]" src={import.meta.env.BASE_URL + "./assets/category/pm3.jpg"} alt="Personal care image" />
                            <div className="absolute bottom-7 left-7 flex flex-col z-10">
                                <h3 className="text-sm font-semibold text-white my-1">Shop the Collection</h3>
                                <p className="text-md font-bold text-white">Personal care</p>
                            </div>
                            <div className="absolute rounded-lg top-0 right-0 opacity-30 w-full h-full bg-gradient-to-t from-gray-500 "></div>
                        </div>
                        
                    </div>
                </div>
                <div className="absolute top-[-5rem] right-0 left-0 z-[-10] brightness-75 blur-sm">
                    <img className=" object-cover h-[40rem] w-full max-xl:h-[36rem] max-lg:h-[31rem] max-md:h-[29rem] max-sm:h-[33rem]  " src={import.meta.env.BASE_URL + "./assets/bg3.jpg"} alt="bg3.jpg" />
                    <div className="absolute rounded-lg top-0 right-0 opacity-40 w-full h-full bg-gradient-to-b from-[#637eb9] "></div>
                </div>
                
            </div>
        </>
    )
}