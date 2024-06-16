import { Link } from "react-router-dom";
import Incentives from "../components/incentives.jsx";
import bg from '../assets/4121750-uhd_3840_2160_25fps.mp4';
export default function PromoSection() {
    return (
        <>
           <div>
                <Incentives />
                <div className=" mx-auto mt-10 mb-10 max-xl:py-2 max-xl:flex max-xl:flex-col-reverse max-lg:flex max-lg:flex-col-reverse max-lg:py-2 max-md:flex max-md:flex-col-reverse">
                    
                    <div className="flex flex-row max-md:flex-col ">
                        <div className="text-center w-1/2 px-10 py-5 border  border-gray-300 max-xl:border  max-lg:w-full max-lg:border-b  max-md:w-full max-md:border">
                            <h3 className="text-[#969696] font-normal ">Shop with us online</h3>
                            <p className="font-semibold text-lg max-lg:text-sm text-[#637eb9]">Get an exclusive &#x20B1;100 off code</p>
                        </div>
                        <div className="text-center w-1/2 px-10 py-5 border border-gray-300 max-xl:border  max-lg:w-full max-lg:border  max-md:w-full max-md:border">
                            <h3 className="text-[#969696] font-normal">Return when you're ready</h3>
                            <p className="font-semibold text-lg max-lg:text-sm text-[#637eb9]">60 days of free returns</p>
                        </div>
                        <div className="text-center w-1/2 px-10 py-5 border border-gray-300 max-xl:border  max-lg:w-full max-lg:border  max-md:w-full max-md:border max-sm:rounded-b-md">
                            <h3 className="text-[#969696] font-normal">Create an account with us</h3>
                            <p className="font-semibold text-lg max-lg:text-sm text-[#637eb9]">15% off your first order</p>
                        </div>

                    </div>
                    
                    <div className="grid grid-cols-2 h-[100vh] bg-gray-100 max-xl:rounded-md max-lg:rounded-md max-md:flex max-md:flex-col max-md:h-full max-md:rounded-md max-sm:py-2 ">
                        <div className=" text-gray-600 px-10 py-5 my-auto">
                            <h1 className="text-6xl font-bold max-xl:text-5xl max-lg:text-4xl max-md:text-4xl max-sm:text-4xl">Focus on what matters</h1>
                            <p className="py-5 text-xl max-xl:text-xl max-lg:text-lg max-md:text-lg max-sm:text-md">At FamilyMart, we offer a great selection of highly available prescription and over-the-counter pharmaceutical products as well as food, personal care, and health and wellness items.</p>
                            <Link to="/sign_in">
                                <button className="w-1/3 h-[3.3rem] my-5 btn btn-primary max-xl:w-1/2 max-lg:w-[55%] max-md:my-1 max-md:mb-9 max-sm:w-[38%] max-sm:text-sm max-sm:mb-9">Shop with Us</button>
                            </Link>
                        </div>
                        <div>
                            <video lazy className="h-[100vh] max-md:h-full object-cover object-bottom brightness-[70%] max-xl:rounded-r-md max-lg:rounded-r-md max-md:rounded-r-md max-sm:rounded-r-none max-sm:mb-[-1rem] " autoPlay loop muted  src= {bg} alt="item video" />
                        </div>
                    </div>

                </div>
           </div>
        </>
    ) 
}